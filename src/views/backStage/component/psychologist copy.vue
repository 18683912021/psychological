<template>
  <div class="admin-psychologist">
    <div class="admin-header">
      <div>
        <span style="color: #fff;cursor:pointer;" @click="home()">首页</span>
        > 心理医生管理
      </div>
    </div>
    <!-- 查询form表单 -->
    <div class="admin-content">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="男" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <!-- 提交按钮 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="province" label="省份"> </el-table-column>
          <el-table-column prop="city" label="市区"> </el-table-column>
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="邮编"> </el-table-column>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
        },
      ],
    };
  },
  methods: {
    home(){
        this.$router.push("/")
    },
    onSubmit() {

    },
    handleClick(row){

    },
  },
};
</script>

<style scoped>
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
}
</style>
