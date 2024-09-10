<template>
  <div class="admin-psychologist">
    <div class="admin-header">
      <div>
        <span style="color: #fff; cursor: pointer" @click="home()">首页</span>
        > 个人中心管理
      </div>
    </div>
    <el-form
      v-model="editForm"
      label-width="100px"
      style="margin-top: 20px; width: 50%"
    >
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item label="姓名">
            <el-input v-model="editForm.name" placeholder="请输入姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别">
            <el-select
              style="width: 100%"
              v-model="editForm.gender"
              placeholder="请选择性别"
            >
              <el-option label="男" :value="0" />
              <el-option label="女" :value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号">
            <el-input v-model="editForm.phone" placeholder="请输入手机号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱">
            <el-input v-model="editForm.email" placeholder="请输入邮箱" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户类型">
            <el-select
              style="width: 100%"
              v-model="editForm.roleType"
              placeholder="请选择用户类型"
            >
              <el-option label="用户" :value="1" />
              <el-option label="咨询师" :value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="12">
            <el-form-item label="密码">
              <el-input v-model="editForm.password" placeholder="请输入密码" />
            </el-form-item>
          </el-col> -->
        <el-col :span="12" v-if="editForm.roleType === 2">
          <el-form-item label="专业">
            <el-input
              v-model="editForm.specialization"
              placeholder="请输入专业"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
      style="width: 50%; text-align: center"
    >
      <el-button @click="editDialogVisible = false">取消</el-button>
      <el-button v-if="!formDisabled" type="primary" @click="saveEdit"
        >保存</el-button
      >
    </div>
  </div>
</template>

<script>
import { getUserInfo, editUserInfo } from "@/service/api";

export default {
  data() {
    return {
      loading: false,
      formDisabled: false,
      tableData: [],
      editForm: {
        name: "",
        gender: 0,
        phone: "",
        email:'',
        roleType: 1,
        specialization: "",
      },
    };
  },

  mounted() {
    this.queryList();
  },
  methods: {
    handleSizeChange(val) {
      this.searchData.pageSize = val;
      this.queryList();
    },
    handleCurrentChange(val) {
      this.searchData.pageNumber = val;
      this.queryList();
    },
    queryList() {
      this.loading = true;
      getUserInfo().then((res) => {
        this.loading = false;
        this.editForm = res.data.data
      });
    },
    home() {
      this.$router.push("/");
    },
    onSubmit() {
      this.queryList();
    },
    editRow(row, type) {
      this.editForm = Object.keys(this.editForm).reduce((acc, key) => {
        if (row.hasOwnProperty(key)) {
          acc[key] = row[key]; // 仅保留 row 中存在的字段
        }
        return acc;
      }, {});
      this.editDialogVisible = true;
    },
    saveEdit() {
      // 在此处理保存逻辑，比如发请求更新数据
      this.editDialogVisible = false;
      editUserInfo(this.editForm).then((res) => {
        if (res.data.code == 1000) {
          this.$message.success("修改成功");
          this.queryList(); // 刷新表格数据
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    resetEditForm() {
      this.editForm = {
        name: "",
        gender: 0,
        phone: "",
        roleType: 1,
        specialization: "",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.admin-psychologist {
}
.admin-header {
  width: calc(100% - 20px);
  height: 50px;
  background-color: #545c64;
  color: #fff;
  text-align: left;
  line-height: 50px;
  padding-left: 20px;
  font-size: 14px;
}
.admin-content {
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  .table-content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
