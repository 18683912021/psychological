<template>
  <div class="login">
    <Header></Header>
    
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import "@/css/login.scss";
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
