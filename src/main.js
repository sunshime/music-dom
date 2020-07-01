// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Vuex from 'vuex'
import '../static/font/iconfont.css'

Vue.config.productionTip = false

// 将axios绑定在vue的原型上面
Vue.prototype.$http = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  Vuex,
  components: { App },
  template: '<App/>'
})
