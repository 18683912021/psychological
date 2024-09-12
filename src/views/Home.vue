<template>
  <div class="home">
    <Header></Header>
    <div class="middle">
      <div class="banner">
        <div class="banner-content">
          <div class="title">
            <P>The world is so big, I listen to you</P>
            <P>世界这么大，有我倾听你</P>
          </div>
          <div class="yy">
            <p>豆芽心理辅导平台</p>
          </div>
        </div>
      </div>
      <div class="business">
        <div class="business-content">
          <div class="big-title">
            <div class="img">
              <img src="@/assets/Home/fw.jpg" alt="">
            </div>
            <p>我们为您提供</p>
          </div>
          <div class="details">
            <div class="details-list">
              <div class="img">
                <img src="@/assets/Home/gl.jpg" alt="">
              </div>
              <p class="title">灵活</p>
              <p class="details-middle">从早上9点至晚上10点，我们的疏导师随时在线，即时聆听你的困惑；当然，你也可选择预约下班后或周末时间。</p>
            </div>
            <div class="details-list">
              <div class="img">
                <img src="@/assets/Home/gl.jpg" alt="">
              </div>
              <p class="title">亲切</p>
              <p class="details-middle">没有空间与时间的限制，你可以聊想聊的任何话题</p>
            </div>
            <div class="details-list">
              <div class="img">
                <img src="@/assets/Home/gl.jpg" alt="">
              </div>
              <p class="title">专业</p>
              <p class="details-middle">我们的疏导师都是执证心理咨询师</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ject">
        <div class="ject-content">
          <div class="ject-content-title">
            <div class="little-title">
              <div class="img">
                <img src="@/assets/Home/gz.jpg" alt="">
              </div>
              <p>每个人都有特别需要倾诉的时刻</p>
            </div>
            <p class="p1">专业心理疏导师愿聆听你的困惑、为你提供情绪支持以及看问题的另一种角度</p>
          </div>
          <!-- <div class="ject-content-detail">
            <el-row :gutter="0">
              <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="detail-up">
                <div class="yw">
                  <div class="ic">
                    <i class="el-icon-shopping-cart-full"></i>
                  </div>
                  <p>线上零售</p>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="detail-up">
                <div class="yw">
                  <div class="ic">
                    <i class="el-icon-shopping-cart-full"></i>
                  </div>
                  <p>线上零售</p>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="detail-up">
                <div class="yw">
                  <div class="ic">
                    <i class="el-icon-shopping-cart-full"></i>
                  </div>
                  <p>线上零售</p>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="detail-up">
                <div class="yw">
                  <div class="ic">
                    <i class="el-icon-shopping-cart-full"></i>
                  </div>
                  <p>线上零售</p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="detail-down">
                <div class="yw">
                  <div class="ic">
                    <i class="el-icon-shopping-cart-full"></i>
                  </div>
                  <p>线上零售</p>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="detail-down">
                <div class="yw">
                  <div class="ic">
                    <i class="el-icon-shopping-cart-full"></i>
                  </div>
                  <p>线上零售</p>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="detail-down">
                <div class="yw">
                  <div class="ic">
                    <i class="el-icon-shopping-cart-full"></i>
                  </div>
                  <p>线上零售</p>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="detail-down">
                <div class="yw">
                  <div class="ic">
                    <i class="el-icon-shopping-cart-full"></i>
                  </div>
                  <p>线上零售</p>
                </div>
              </el-col>
            </el-row> -->
          <!-- </div> -->
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
import "@/css/Home.scss";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>
