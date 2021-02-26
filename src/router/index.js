import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import Page from '../components/Page'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/page/:id',
    name: 'Page',
    component: Page
  },
  {
    path: '/*',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  routes,
  // 解決打開新頁面的位置(置頂)
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0, y:0};
    }
  }
})

export default router