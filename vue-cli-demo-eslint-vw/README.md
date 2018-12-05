# vue_project

> vue-cli-eslint

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
config -> host: '0.0.0.0', // can be overwritten by process.env.HOST
change ip or localhost

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## px-to-viewport
大漠参考借鉴地址（原地址）：[https://www.w3cplus.com/mobile/vw-layout-in-vue.html](https://www.w3cplus.com/mobile/vw-layout-in-vue.html "大漠参考借鉴地址")
简书地址：[https://www.jianshu.com/p/1f1b23f8348f](https://www.jianshu.com/p/1f1b23f8348f "简书参考借鉴地址")

``` bash
# install dependencies
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S

```
### 在src目录下添加文件 .postcssrc.js
``` js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, 
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 375,     // (Number) The width of the viewport.  750 or 375 根据设计稿尺寸设定px，为计算vw根据
        viewportHeight: 667,    // (Number) The height of the viewport.也可以不配置
        unitPrecision: 3,       // (Number) 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw',     // (String) 指定需要转换成的视窗单位，建议使用vw.
        selectorBlackList: ['.ignore', '.hairlines'],  // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1,       // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值著.
        mediaQuery: false       // (Boolean) 允许在媒体查询中转换`px`.
      }, 
      "postcss-viewport-units":{},
      "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false//开启，所以zindex都自动设置为 1
      },
  }
}
```

### 兼容各类手机浏览器 index.html添加
``` html
<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
<script>
    window.onload = function () {
      window.viewportUnitsBuggyfill.init({
        hacks: window.viewportUnitsBuggyfillHacks
      });

      var winDPI = window.devicePixelRatio;
          var uAgent = window.navigator.userAgent;
          var screenHeight = window.screen.height;
          var screenWidth = window.screen.width;
          var winWidth = window.innerWidth;
          var winHeight = window.innerHeight;
          alert(
              "Windows DPI:" + winDPI +
              ";\ruAgent:" + uAgent +
              ";\rScreen Width:" + screenWidth +
              ";\rScreen Height:" + screenHeight +
              ";\rWindow Width:" + winWidth +
              ";\rWindow Height:" + winHeight
          )
    }
</script>
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
