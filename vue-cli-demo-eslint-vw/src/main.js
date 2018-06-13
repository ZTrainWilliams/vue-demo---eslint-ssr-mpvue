// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navigation from 'vue-navigation'
import store from './store/index.js'
Vue.use(Navigation, {router})

Vue.config.productionTip = false

const FastClick = require('fastclick')
FastClick.attach(document.body)// 去掉点击延迟300秒

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
