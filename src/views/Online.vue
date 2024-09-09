<template>
  <div class="online">
    <Header></Header>
    <div class="box"></div>
    <p class="way">首页>公告资讯</p>
    <div class="middle">
      <div class="middle-content">
        <div class="content-left">
          <p>在线文档</p>
          <p>在线文档</p>
          <p>在线文档</p>
          <p>在线文档</p>
          <p>在线文档</p>
          <p>在线文档</p>
          <p>在线文档</p>
          <p>在线文档</p>
        </div>
        <div class="content-right">
          <p>内容</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import "@/css/Online.scss";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>
