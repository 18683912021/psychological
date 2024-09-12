<template>
  <div class="information">
    <Header></Header>
    <div class="middle">
      <div class="banner">
        <div class="banner">
          <div class="banner-content">
            <p class="mywords">我不知道将去何方，但我已在路上</p>
            <p class="mywords from">千与千寻</p>
          </div>
        </div>
      </div>
      <p class="way">首页>心理知识</p>
      <div class="big-title">
        <p>
          我们的疏导师也同时是国家认证的执证心理咨询师。
          他们有敏锐思维和专业知识， 但他们也和知己密友一样亲切，
          和谈心主播一样贴心。
        </p>
      </div>
      <div class="box">
        <div class="list1">
          <div class="list1-content">
            <div class="left"></div>
            <div class="right">
              <div class="box">
                <p class="title">走出情绪内耗的根本方法，有且只有一个</p>
                <p class="detail">
                  通过心理咨询进行疗愈的过程，充满了黑暗和痛苦，并不容易。但是总体状况是螺旋式上升的进步，这就已经非常棒了。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="list2">
          <div class="list2-content">
            <div class="left"></div>
            <div class="right">
              <div class="box">
                <p class="title">别人都能适应，为什么就你不行？</p>
                <p class="detail">
                  “别人都能适应，为什么就你不行？
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="list1">
          <div class="list1-content">
            <div class="left"></div>
            <div class="right">
              <div class="box">
                <p class="title">“我以为父母离婚，都是我的错”：止不住的自我厌恶，将我拖入双相障碍的沼泽</p>
                <p class="detail">
                  “我以为父母离婚，都是我的错”：止不住的自我厌恶，将我拖入双相障碍的沼泽
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="list2">
          <div class="list2-content">
            <div class="left"></div>
            <div class="right">
              <div class="box">
                <p class="title">“丧偶式育儿”的中年女性，困在婚姻牢笼里</p>
                <p class="detail">
                  在这间咨询室里，我可以毫无负担地褪去所有社会身份，仅仅是“我”。在这间咨询室里，我得以被一个人坚定地选择，被全身心地关注、看见、理解、共情。
                </p>
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
import "@/css/Information.scss";
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
