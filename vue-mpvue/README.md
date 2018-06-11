# WZ -> vue-mpvue-demo

## 相关依赖

* [flyio](https://github.com/wendux/fly/blob/master/README-CH.md) - 同时支持浏览器、小程序、Node、Weex 及快应用的基于 Promise 的跨平台请求库
* [mpvue-entry](https://github.com/F-loat/mpvue-entry) - 集中式页面配置，不再需要重复编辑各页面的 main.js 文件
* [mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch) - 在 mpvue 中使用 vue-router 兼容的路由写法
* [xmlstring2json](https://github.com/vilien/xmlstring2json) - xml字符串转换 json 格式，适用于微信小程序


## Tips

``` js
alias: {
  '@': resolve('src'),
  vue: 'mpvue',
  flyio: 'flyio/dist/npm/wx',
  wx: resolve('src/utils/wx')
}
```

* vuex 使用方法

建立 `src/store/index.js` 文件

``` js
//demo.js
const state = {}
const mutations = {}
const actions = {}
export default {state, mutations, actions}

import Vue from 'vue'
import Vuex from 'vuex'

import demo from ;./demo.js

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {demo}
})

```

在 `src/main.js` 中引用

``` js
import Vue from 'vue'
import store from '@/store'
import App from '@/App'

const app = new Vue({
  store,
  ...App
}).$mount()
```

最后在需要使用 vuex 的页面相对应的 `main.js` 文件中像 `src/main.js` 一样引用即可


## 相关文章

* [Mpvue 小程序转 Web 实践总结](https://juejin.im/post/5ab84a33f265da239c7b56bd)
