/* eslint-disable */
// 公用文件 ztrain 2018-02-08
import axios from 'axios';

export default function (url, data, fn, httpType) {
    if(!url){
        url = 'http://0.0.0.0:8088' + url;
    }
    let isUpFile = Object.prototype.toString.call(data) === "[object FormData]";//处理json
    httpType = ['get', 'post', 'put', 'delete'].includes(httpType) ? httpType : 'get';
    let head = {};
    if(httpType === 'post'||httpType === 'put'){
        head.headers = {'Content-Type':'application/json;charset=utf-8'};
        data = isUpFile ? data : JSON.stringify(data);
    }else{
        data = { params:data }
    }
    axios[httpType](url,data,head).then(res => {
        res = res ||{status:404,statusText:'服务器超时！'};
        if (res.status === 200 || res.status === 304 || res.status === 400) {
            return res;
        }else{
            return {
                status: res.status,
                data:{success:!1,data:{},message:res.statusText}
            };
        }
    }).then(res => {
        let err;
        let d = res.data;
        if(d.hasOwnProperty('success') && !d.success){
            err = res.data.message || '未知异常';
            this.$message.error(err);
        }
        try{
            let data = d.hasOwnProperty('data') ? d.data : d;
            fn.call(this,data,err);
        }catch (e){
            console.log("ajax回调函数有误：",e);
            this.$monitor.push({
                title: '回调函数有误：' + e.message,
                info: e.stack
            });
        }
    }).catch(err => {
        fn.call(this,null,err);
    });
};
