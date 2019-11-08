import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//公共css
import '@/assets/stylus/import.styl';

// 网络请求
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
