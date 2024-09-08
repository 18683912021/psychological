<template>
    <div class="contact">
        <Header></Header>
        <div class="middle">
            <div class="banner">
                <div class="banner-content">
                    <p class="mywords">我不知道将去何方，但我已在路上</p>
                    <p class="mywords from">千与千寻</p>
                </div>
            </div>
            <p class="way">首页>联系我们</p>
            <div class="site">
                <p class="big-title">以技术服务为核心，为客户持续创造价值</p>
                <div class="site-content">
                    <div class="content-title">
                        <p>联系我们</p>
                        <p>CONTACT US</p>
                        <p></p>
                    </div>
                    <div class="content-detail">
                        <div class="detail-left">
                            <div class="amap-container">
                                <el-amap vid="amapDemo" :zoom="zoom" :center="center"/>
                            </div>
                        </div>
                        <div class="detail-right">
                            <div class="right-content">
                                <p>客服QQ：&nbsp;&nbsp;&nbsp; 123456789</p>
                                <p>客服QQ：&nbsp;&nbsp;&nbsp; 123456789</p>
                                <p>客服微信：&nbsp;&nbsp;&nbsp; 123456789</p>
                                <p>公司名称：&nbsp;&nbsp;&nbsp; 豆芽网络科技有限公司</p>
                                <p>公司地址：&nbsp;&nbsp;&nbsp; 成都市天府新区西南交通大学研究院</p>
                            </div>
                        </div>
                    </div>
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
import "@/css/contact.scss";
export default {
  name: "Home",
  name: "AMap11",
  data() {
    return {
      zoom: 16, //
      center: [104.019857, 30.457654] // 指定地图中心点
    };
  },
  components: {
    Header,
    Footer
  }
}
</script>
