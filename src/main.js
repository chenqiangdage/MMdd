import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout.vue' 
import router from './route-config.js'
import store from './store/store'
import BaiduMap from 'vue-baidu-map'
import 'vant/lib/index.css';
Vue.use(BaiduMap, {
 ak: 'm0tE2m8oQn6uhQfc0wesiWtutLoA5SNh'
})
//.图片懒加载
import {Lazyload} from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);
import './config/rem'
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.use(VueRouter)
 
new Vue({
  router,
  store,
  render: h => h(Layout)
}).$mount('#app')


window.router = router
window.Vue = Vue