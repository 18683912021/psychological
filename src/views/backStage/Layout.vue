<template>
  <div class="AdminLayout">
    <div class="content">
      <div class="left-nav">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="/Psychologist"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router
            >
              <el-menu-item
                v-if="userInfo.roleType == 1"
                index="/AdminLayout/Psychologist"
              >
                <i class="el-icon-location"></i>
                <span slot="title">心理医生管理</span>
              </el-menu-item>
              <el-menu-item
                v-if="userInfo.roleType == 2"
                index="/AdminLayout/Psychologist"
              >
                <i class="el-icon-location"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item
                v-if="userInfo.roleType == 2"
                index="/AdminLayout/SessionRecords"
              >
                <i class="el-icon-menu"></i>
                <span slot="title">咨询记录管理</span>
              </el-menu-item>
              <el-menu-item
                index="/AdminLayout/yyjl"
              >
                <i class="el-icon-phone-outline"></i>
                <span slot="title">预约记录</span>
              </el-menu-item>
              <el-menu-item index="/AdminLayout/PersonalCenter">
                <i class="el-icon-document"></i>
                <span slot="title">个人中心管理</span>
              </el-menu-item>
              <!-- <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item> -->
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="right-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        roleType: 0,
      },
    };
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("USERINFO"));
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/css/AdminLayout.scss";
</style>
