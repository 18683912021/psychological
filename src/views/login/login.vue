<template>
  <div class="login">
    <div class="login-content">
      <el-form
        label-width="80px"
        label-position="right"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="identity">
          <el-radio-group v-model="ruleForm.identity">
            <el-radio label="1">管理员</el-radio>
            <el-radio label="2">管理员</el-radio>
            <el-radio label="3">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item class="btn">
          <el-button style="width: 100%;margin: 0 auto" type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        identity: "1",
      },
    };
  },
  components: {},
  methods:{
    submitForm(){
      this.$router.push("/")
    },
  }
};
</script>
<style scoped lang="scss">
@import "@/css/login.scss";
</style>
