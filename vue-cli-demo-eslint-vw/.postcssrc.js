// https://github.com/michael-ciniawsky/postcss-load-config

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
