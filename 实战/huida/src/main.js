import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'view-design/dist/styles/iview.css'
import '../my-theme/index.less'
import store from './store'
import axios from 'axios'
import qs from 'qs'
 
Vue.prototype.axios=axios;
Vue.prototype.qs=qs;
axios.defaults.headers['Content-Type']="application/json;charset=UTF-8";
axios.defaults.withCredentials=true;


axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
