# vue-demo---eslint-ssr-mpvue
vue-demo -> eslint   px-to-viewport、ssr、mpvue

## vue-cli-demo-eslint-vw
vue-cli创建脚手架，配备编译过程的eslint语法检查，在此基础加上px-to-viewport实现编译过程自动根据px转译成vw。

## vue-mpvue
将vue-cli-demo-eslint-vw开发的vue_H5项目根据mpvue微信框架进行适当的调整转变成小程序，mpvue兼容了绝大部分的vueapi写法，代码调整幅度小。而已有样式px
会自动编译成小程序的rpx，非小程序标签会自动转成view标签并加上原标签类名，例如:
```html
<i></i>
<view class="_i"></view>
```
且对应样式名会自动转译成 _i。mpvue对于vue开发者来说可轻松使用。

## vue-ssr
将vue-cli-demo-eslint-vw项目部署成 ssr服务端渲染，单位暂时未匹配成自动转vw写法后续接上。
