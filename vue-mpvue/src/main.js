import Vue from 'vue'
import store from '@/store'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: ['pages/Home'],
    window: {
      navigationBarBackgroundColor: '#fafafa',
      navigationBarTitleText: 'WZ',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: false
    },
    "networkTimeout":{
      "request": 30000,
      "connectSocket": 30000,
      "uploadFile": 30000,
      "downloadFile": 30000
    }
  }
}
