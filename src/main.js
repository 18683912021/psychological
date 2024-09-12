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

Vue.prototype.$ft=function(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date;
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
},
 
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
