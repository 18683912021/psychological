import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Information from "@/views/Information.vue";
import contact from "@/views/contact.vue";
import Online from "@/views/Online.vue";
import Product from "@/views/Product.vue";
import Login from "@/views//login/login.vue";
import BackStage from "@/views/backStage/backStage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/Information",
    name: "Information",
    component: Information,
    meta: {
      title: "心理知识",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
    meta: {
      title: "后台管理",
    },
  },
  {
    path: "/Online",
    name: "Online",
    component: Online,
    meta: {
      title: "公告资讯",
    },
  },
  {
    path: "/Product",
    name: "Product",
    component: Product,
    meta: {
      title: "交流论坛",
    },
  },
  {
    path: "/backStage",
    name: "BackStage",
    component: BackStage,
    meta: {
      title: "后台管理",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
