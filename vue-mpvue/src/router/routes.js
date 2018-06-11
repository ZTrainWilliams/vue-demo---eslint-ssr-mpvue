    // 给出的路由对象首个会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
module.exports = [
  {
    path: '/pages/Home',
    name: 'home',
    config: {
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true
    }
  },
  {
    path: '/components/Openwindow',
    name: 'openwindow',
    config: {
      navigationBarTitleText: '简介'
    }
  },
  {
    path: '/pages/Contact',
    name: 'contact',
    config: {
      navigationBarTitleText: '联系我们'
    }
  },
]
