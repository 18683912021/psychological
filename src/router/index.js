import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Information from '@/views/Information.vue'
import contact from '@/views/contact.vue'
import Online from '@/views/Online.vue'
import Product from '@/views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Information',
    name: 'Information',
    component: Information,
    meta: {
      title: '资讯'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '/Online',
    name: 'Online',
    component: Online,
    meta: {
      title: '在线文档'
    }
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product,
    meta: {
      title: '产品'
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
