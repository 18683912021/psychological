<template>
  <div class="header">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="10" class="top-left">
        <div class="top-left-little">
          <h1>
            <img src="@/assets/logo.png" alt="" />
          </h1>
          <p class="title">心理辅导平台</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="14" class="top-right">
        <div class="top-right-little">
          <ul>
            <li class="sy" @click="home()">
              <P>
                <span>首页</span>
                <span>Home</span>
              </P>
            </li>
            <li class="zx" @click="information()">
              <p>
                <span>心理知识</span>
                <span>Information</span>
              </p>
            </li>
            <li class="cp" @click="product()">
              <p>
                <span>交流论坛</span>
                <span>Exchange Forum</span>
              </p>
            </li>
            <li class="wd" @click="online()">
              <p>
                <span>公告资讯</span>
                <span>Announcement Information</span>
              </p>
            </li>
            <li class="lx" @click="contact()">
              <p>
                <span>后台管理</span>
                <span>back-stage management</span>
              </p>
            </li>
            <li class="loginBtn" @click="login()">
              <p>
                <span>{{ loginText.cn }}</span>
                <span>{{ loginText.en }}</span>
              </p>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "@/components/header.scss";
export default {
  data() {
    return {
      loginText: {
        cn: "登录",
        en: "Login",
      },
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.loginText = {
        cn: "退出",
        en: "Logout",
      };
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    home() {
      this.$router.push("/");
    },
    information() {
      this.$router.push("/Information");
    },
    online() {
      this.$router.push("/Online");
    },
    contact() {
      this.$router.push("/AdminLayout");
    },
    // contact() {
    //   this.$router.push("/contact");
    // },
    product() {
      this.$router.push("/Product");
    },
  },
};
</script>
