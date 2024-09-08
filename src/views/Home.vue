<template>
  <div class="home">
    <Header></Header>
    <div class="middle">
      <div class="banner">
        <div class="banner-content">
          <div class="title">
            <P>TECHNOLOGY MAKES LIFE BETTER</P>
            <P>科技让生活更美好</P>
          </div>
          <div class="yy">
            <p>豆芽商业运营中心</p>
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
              <p class="title">管理系统</p>
              <p class="details-middle">编写各种类型的管理系统，根据你提供的各类方案，编写您所需要的管理系统。一步到。</p>
            </div>
            <div class="details-list">
              <div class="img">
                <img src="@/assets/Home/gl.jpg" alt="">
              </div>
              <p class="title">管理系统</p>
              <p class="details-middle">编写各种类型的管理系统，根据你提供的各类方案，编写您所需要的管理系统。一步到。</p>
            </div>
            <div class="details-list">
              <div class="img">
                <img src="@/assets/Home/gl.jpg" alt="">
              </div>
              <p class="title">管理系统</p>
              <p class="details-middle">编写各种类型的管理系统，根据你提供的各类方案，编写您所需要的管理系统。一步到。</p>
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
              <p>豆芽管理系统适合那些行业？</p>
            </div>
            <p class="p1">已覆盖了20+细分行业，助力企业快速开展业务，抢占市场红利</p>
          </div>
          <div class="ject-content-detail">
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
            </el-row>
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
