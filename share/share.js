
function loadscript(url,cb){
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.type = 'text/javascript';
    script.async = false;
    ref.parentNode.insertBefore( script, ref );
    if (cb && typeof(cb) === "function") {
        script.onload = cb;
    }
    return script;
}

function shareWX(){
    wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx39f6fb3c9e56ef76', // 必填，企业号的唯一标识，此处填写企业号corpid
        timestamp: 1476858025, // 必填，生成签名的时间戳
        nonceStr: '5chfzqI2p4hbA4Ve', // 必填，生成签名的随机串
        signature: '5191b78498ffdb1d154590f4bbd5f352f323613d',// 必填，签名，见附录1
        jsApiList: [
            'onMenuShareAppMessage'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function(){
        wx.onMenuShareAppMessage({
            title: '重大活动', // 分享标题
            desc: '小半最好', // 分享描述
            link: 'https://sevenmoon.github.io/myblog/', // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: 'logo.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                alert('=================')
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                alert('=cancel')
            }
            
        });
    })
  
}



loadscript('http://res.wx.qq.com/open/js/jweixin-1.2.0.js',function(){
					shareWX();
                });
                
    