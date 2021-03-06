// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
Vue.config.productionTip = false;
import echarts from 'echarts';

Vue.prototype.$echarts=echarts;
Vue.use(echarts);
/* eslint-disable no-new */
Vue.prototype.$axios=axios;
axios.defaults.baseURL = 'http://192.168.0.102:3000';
// Vue.use(axios);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
