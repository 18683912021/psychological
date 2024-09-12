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
        <el-form-item label="姓名">
          <el-input
            v-model="searchData.name"
            placeholder="请输入用户、咨询师姓名"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="用户类型">
          <el-select
            disabled
            v-model="searchData.roleType"
            placeholder="请选择"
          >
            <el-option label="用户" value="1"></el-option>
            <el-option label="咨询师" value="2"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="手机号">
          <el-input
            v-model="searchData.phone"
            placeholder="请输入用户、咨询师手机号"
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
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="gender" label="性别">
            <template slot-scope="scope">
              <div v-if="scope.row.gender === 1">女</div>
              <div v-else>男</div>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间">
          </el-table-column>
          <el-table-column prop="phone" label="手机号"> </el-table-column>
          <el-table-column prop="roleType" label="用户类型">
            <template slot-scope="scope">
              <div v-if="scope.row.roleType === 1">用户</div>
              <div v-else>咨询师</div>
            </template>
          </el-table-column>
          <el-table-column prop="specialization" label="专业">
          </el-table-column>
          <el-table-column prop="updateTime" label="更新时间">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="editRow(scope.row, 1)" type="text" size="small"
                >查看</el-button
              >
              <el-button @click="editRow(scope.row, 2)" type="text" size="small"
                >编辑</el-button
              >
              <el-button
                v-if="userInfo.roleType === 1"
                @click="appointment(scope.row)"
                type="text"
                size="small"
                >预约</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="searchData.pageCurrent"
            :page-sizes="[20, 200, 300, 400]"
            :page-size="searchData.pageSize"
            layout="sizes, prev, pager, next"
            :total="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog
      title="请选择预约时间"
      :close-on-click-modal="false"
      :visible.sync="editDialogVisible2"
      width="20%"
    >
      <el-date-picker
        format="yyyy-MM-dd"
        v-model="datetime"
        type="datetime"
        placeholder="选择日期时间"
      >
      </el-date-picker>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveyy">保存</el-button>
      </span>
    </el-dialog>
    <!-- 修改弹窗 -->
    <el-dialog
      title="编辑信息"
      :visible.sync="editDialogVisible"
      :close-on-click-modal="false"
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
        <el-button v-if="!formDisabled" type="primary" @click="saveEdit"
          >保存</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getMatchPherapist, editMatchPherapist, reserve } from "@/service/api";

export default {
  data() {
    return {
      total: 0,
      loading: false,
      searchData: {
        pageCurrent: 1,
        pageSize: 20,
        name: "",
        roleType: "1",
        phone: "",
      },
      datetime: "",
      formDisabled: false,
      tableData: [],
      editDialogVisible: false,
      editDialogVisible2: false,
      editForm: {
        name: "",
        gender: 0,
        phone: "",
        roleType: 1,
        specialization: "",
      },
      useInfo: {},
      yy: {},
    };
  },

  mounted() {
    this.searchData.roleType =
      JSON.parse(localStorage.getItem("USERINFO"))?.roleType == 1 ? 2 : 1;
    this.userInfo = JSON.parse(localStorage.getItem("USERINFO"));
    this.queryList();
  },
  methods: {
    appointment(val) {
      this.yy = val;
      this.editDialogVisible2 = true;
      // this.$alert("确定预约当前医生", "预约提示", {
      //   confirmButtonText: "确定",
      //   callback: (action) => {},
      // });
    },
    saveyy() {
      reserve({
        reserveTime: this.$ft(this.datetime, "{y}-{m}-{d}"),
        therapistId: this.yy.id,
      }).then((res) => {
        if (res.data.code == 1000) this.$message.success("预约成功");
      });
      this.editDialogVisible2 = false;
    },
    handleSizeChange(val) {
      this.searchData.pageSize = val;
      this.queryList();
    },
    handleCurrentChange(val) {
      this.searchData.pageCurrent = val;
      this.queryList();
    },
    queryList() {
      this.loading = true;
      getMatchPherapist(this.searchData)
        .then((res) => {
          this.loading = false;
          this.tableData = res.data.data.records;
          this.total = res.data.data.total;
        })
        .catch((err) => {
          this.$message.error(err.data.msg);
          this.loading = false;
        });
    },
    home() {
      this.$router.push("/");
    },
    onSubmit() {
      this.searchData.pageCurrent = 1;
      this.queryList();
    },
    editRow(row, type) {
      if (type === 1) {
        this.formDisabled = true;
      } else {
        this.formDisabled = false;
      }
      this.editForm = JSON.parse(JSON.stringify(row));
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
        password: "",
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
