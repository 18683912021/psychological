<template>
  <div class="admin-psychologist">
    <div class="admin-header">
      <div>
        <span style="color: #fff; cursor: pointer" @click="home()">首页</span>
        > 心理医生管理
      </div>
    </div>
    <!-- 查询form表单 -->
    <div class="admin-content">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="用户id">
          <el-input
            v-model="searchData.name"
            placeholder="请输入用户id"
          ></el-input>
        </el-form-item>
        <el-form-item label="咨询师id">
          <el-input
            v-model="searchData.phone"
            placeholder="请输入咨询师id"
          ></el-input>
        </el-form-item>
        <!-- 提交按钮 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="table-content">
        <el-table
          :data="tableData"
          border
          v-loading="loading"
          height="calc(100vh - 250px)"
          style="width: 100%; margin-bottom: 10px; height: calc(100vh - 250px)"
        >
          <el-table-column prop="id" label="id"> </el-table-column>
          <el-table-column prop="phone" label="用户手机号"> </el-table-column>
          <el-table-column prop="sessionTime" label="会话时间"> </el-table-column>
          <el-table-column prop="therapistName" label="指导师姓名"> </el-table-column>
          <el-table-column prop="userName" label="用户姓名"> </el-table-column>
        </el-table>
        <div style="text-align: right">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="searchData.pageNumber"
            :page-sizes="[20, 200, 300, 400]"
            :page-size="searchData.pageSize"
            layout="sizes, prev, pager, next"
            :total="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>

    <!-- 修改弹窗 -->
    <el-dialog
      title="编辑信息"
      :visible.sync="editDialogVisible"
      width="40%"
      @close="resetEditForm"
    >
      <el-form v-model="editForm" label-width="100px" :disabled="formDisabled">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input v-model="editForm.name" placeholder="请输入姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
              <el-select v-model="editForm.gender" placeholder="请选择性别">
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
            <el-form-item label="用户类型">
              <el-select
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
          <el-col :span="24" v-if="editForm.roleType === 2">
            <el-form-item label="专业">
              <el-input
                v-model="editForm.specialization"
                placeholder="请输入专业"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button v-if="editForm.roleType === 2" type="primary" @click="saveEdit">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { listSession, editMatchPherapist } from "@/service/api";

export default {
  data() {
    return {
      loading: false,
      total:0,
      searchData: {
        pageNumber: 1,
        pageSize: 20,
        userId: "",
        therapistId: "",
      },
      formDisabled: false,
      tableData: [],
      editDialogVisible: false,
      editForm: {
        name: "",
        gender: 0,
        phone: "",
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
      listSession(this.searchData).then((res) => {
        this.loading = false;
        this.tableData = res.data.data.records;
        this.total = res.data.data.total;
      });
    },
    home() {
      this.$router.push("/");
    },
    onSubmit() {
      this.queryList();
    },
    editRow(row,type) {
      if(type === 1){
        this.formDisabled = true;
      }else{
        this.formDisabled = false;
      }
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
      editMatchPherapist(this.editForm).then((res) => {
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
