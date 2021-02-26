import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router/index'
library.add(fas)

// 全域啟用
Vue.component('Loading', Loading);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
