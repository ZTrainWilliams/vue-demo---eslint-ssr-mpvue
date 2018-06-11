import wx from 'wx'
import querystring from 'querystring'

const baseurl = ''

/**
 * 封装axios的通用请求
 * 没有登录：NOT_LOGINED  登录失败：LOGIN_ERROR  退出失败：LOGOUT_ERROR
 * @param  {string}   url       请求的接口URL (设置了baseurl,不传入有默认值)
 * @param  {object}   data      传的参数  (此类接口为转化成get形式的参数拼接)
 * @param  {Function} fn        回调函数
 */
export default function (url, data, fn, methodType) {
  url = url || baseurl// baseurl
  let method = methodType || 'get'
  wx.request({url:url, data:data,method:method, header: {'Content-Type': 'application/json'},  
    success: function(res) {
      return typeof fn == "function" && fn(res.data,res)
    },
    fail: function(){
      return typeof fn == "function" && fn(res,false)
    }
  })
}
