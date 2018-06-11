### 避免iframe嵌套页面判断了不允许嵌套iframe，强制新页面打开自己的网址
iframe标签增加   security="restricted" sandbox=""


#### mpvue
在非首页设置头部出现返回按钮
bindFocus () {
	wx.navigateTo({
		title:"goback",
		url: './pages/Home'
	})
}

### 不开启下拉刷新，却自动下拉

