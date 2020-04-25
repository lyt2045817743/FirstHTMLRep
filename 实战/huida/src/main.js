import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'view-design/dist/styles/iview.css'
import '../my-theme/index.less'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
