<template>
  <div class="login">
    <div class="login-content">
      <el-form
        label-width="80px"
        label-position="right"
        :model="ruleForm"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item v-if="type === '登录'" label="用户名" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号：" prop="phone">
          <el-input
            v-model="ruleForm.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="identity">
          <el-radio-group v-model="ruleForm.roleType">
            <el-radio label="2">管理员</el-radio>
            <el-radio label="1">用户</el-radio>
            <el-radio label="3">心理医生</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item class="btn">
          <el-button
            style="width: 100%; margin: 0 auto"
            type="primary"
            @click="submitForm('ruleForm')"
            >{{ type === "登录" ? "注册" : "登录" }}</el-button
          >
          <div class="loginType" @click="loginType()">{{ type }}</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login, register, getUserInfo } from "@/service/api/index";
export default {
  name: "Home",
  data() {
    return {
      // 注册还是登录
      type: "注册",
      ruleForm: {
        phone: "",
        name: "",
        password: "",
        roleType: "2",
      },
    };
  },
  components: {},
  methods: {
    loginType() {
      this.type = this.type === "登录" ? "注册" : "登录";
    },
    async submitForm() {
      let url = this.type !== "登录" ? login : register;
      let data = Object.assign({}, this.ruleForm);
      if (this.ruleForm.roleType == "3") {
        data.roleType = "2";
      }
      const result = await url(data);
      if (result.data.code == 1000) {
        this.$message.success(this.type === "登录" ? "注册成功" : "登录成功");
        // 登录才存token注册没有
        if (this.type === "注册") {
          //登录成功存token
          localStorage.setItem("TOKEN", result.data.data.token);
          this.$router.push("/");
          this.queryUserInfo();
        }
      } else {
        this.$message.error(result.data.msg);
      }
      console.log(result);
    },

    queryUserInfo() {
      getUserInfo().then((res) => {
        //获取个人信息存到本地
        localStorage.setItem("USERINFO", JSON.stringify(res.data.data));
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/css/login.scss";
.loginType {
  position: absolute;
  cursor: pointer;
  z-index: 1;
  button: 0px;
  right: 0px;
  color: white;
}
</style>
