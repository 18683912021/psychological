import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 全局主策element提示
Vue.prototype.$message = ElementUI.Message;
 
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '65353fd259c046762e83343d44f37f70',
  // 插件集合
  plugin: ['AMap.Autocomplete','AMap.PlaceSearch','AMap.Scale','AMap.OverView','AMap.ToolBar','AMap.MapType','AMap.PolyEditor','AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面 title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
