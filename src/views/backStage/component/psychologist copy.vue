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
            v-model="form.name"
            placeholder="请输入用户、咨询师姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-select v-model="form.roleType" placeholder="请选择">
            <el-option label="用户" value="1"></el-option>
            <el-option label="咨询师" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input
            v-model="form.phone"
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
          style="width: 100%; margin-bottom: 10px;height: calc(100vh - 250px);"
        >
          <!-- <el-table-column
            prop="appointmentStartTime"
            label="可预约开始时间"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="appointmentEndTime"
            label="可预约结束时间"
            show-overflow-tooltip
          >
          </el-table-column> -->
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
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="searchData.pageNumber"
            :page-sizes="[20, 200, 300, 400]"
            :page-size="searchData.pageSize"
            layout="sizes, prev, pager, next"
            :total="tableData.length"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMatchPherapist } from "@/service/api";

export default {
  data() {
    return {
      loading: false,
      form: {
        name: "",
        roleType: "",
        phone: "",
      },
      searchData: {
        pageNumber: 1,
        pageSize: 20,
        name: "",
      },
      tableData: [],
    };
  },

  mounted() {
    console.log(123);
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
      getMatchPherapist(this.searchData).then((res) => {
        console.log(res.data.data.records);
        this.loading = false;
        this.tableData = res.data.data.records;
      });
    },
    home() {
      this.$router.push("/");
    },
    onSubmit() {
      this.queryList()
    },
    handleClick(row) {},
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
