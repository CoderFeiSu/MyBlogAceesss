/**
 * ime mobile JS
 * index
 * 2015-03-25
 */

(function () {

 function getUrlparam(name) {   
      var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest[name];
}
//获取链接中的渠道号
var df = getUrlparam("df"); 
var ct = getUrlparam("ct"); 
var adl = getUrlparam("adl"); 
if(!df){df="01010026";}
if(!ct){ct="XF01010026";}

if(adl=="1"){
	var ua = navigator.userAgent;
	if (/(Android)/i.test(ua)) {
		if (ua.toLowerCase().match(/MicroMessenger/i) == "micromessenger" && (typeof WeixinJSBridge !== undefined)) {
var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
if(wechatInfo[1] > "7.0.6.1500" ){
alert("请点击右上角在浏览器打开");             
}else{
                  location.href = "http://tz.xfdwz.com/shareskin/?df=" + df;
}
			

			} else { 
			location.href = "https://srf.xunfei.cn/a?df=" + df;
			}                
    } else if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {  
		location.href = "https://itunes.apple.com/app/apple-store/id917236063?pt=347483&ct=" + ct + "&mt=8";
        } else {location.href = "https://srf.xunfei.cn/?df=" + df + "&ct=" + ct;}
}
           

    var WIN = window,
            DOC = document,
            NAV = navigator,
            LOC = location,
            HIS = history;
    var innerHTML = "innerHTML",
            className = "className",
            appendChild = "appendChild",
            style = "style";

    var Base = BASE;
    var Touch = Base.cfg.isTouch;
    var $$ = Base.getEle,
            $_ = Base.creEle,
            $D = Base.disEle,
            $T = Base.txtEle,
            $R = Base.rmvEle,
            $G = Base.getUrl,
            $GC = Base.getCoord,
            $GP = Base.getPrefix,
            $EF = Base.execFun,
            $JP = Base.jsonParse,
            $JS = Base.jsonStringify,
            $SS = Base.setStorage,
            $GS = Base.getStorage,
            $AJAX = Base.ajax,
            $ADPALLSTYLE = Base.adpAllStyle,
            $CREATESTYLE = Base.createStyle,
            $CSSREADER = Base.cssReader;

    var body = DOC.body;
    var PageIndex = 0;
    var Activing, Hovering;
    var Time = 100;
    var isIphone=false, isWx=false;
    var downUrl=["https://srf.xunfei.cn/a?df="+df,"https://itunes.apple.com/app/apple-store/id917236063?pt=347483&ct=" + ct + "&mt=8"];
    var curBtn=$$('#andBtn');
  
    function initialize() {
        checkBrowserVer();
        initModel();
        initEvent();
        setTimeout(function () {          
            isLittle();
        }, 50);
    }
    
    function isLittle(){
        var _per=Math.abs(WIN.innerHeight)/Math.abs(WIN.innerWidth);
        if(isIphone&&WIN.screen.height==480){
            $$('#swipe').className="littleIphone";
            $$('#andBtn').className="littleBtn";
            $$('#iosBtn').className="littleBtn";
        }else if(_per<1.381){
            $$('#swipe').className="little";
            $$('#andBtn').className="littleBtn";
            $$('#iosBtn').className="littleBtn";
        }
        setTimeout(function () {
            $D(body,1);
        }, 10);
    }
  
  
    function initIE() {
        IE = getIE();
        $CSSREADER('css/index-ie.css', 'ie', function () {
            rmSvg();
           
            setTimeout(function () {
                $D(body, 1);
            }, 500);
        });

        function getIE() {
            var ie = 1;
            var cls = body[className];
            if (cls.indexOf('ie9') > 0) {
                ie = 9;
            } else if (cls.indexOf('ie8') > 0) {
                ie = 8;
            } else if (cls.indexOf('ie7') > 0) {
                ie = 7;
            }
            return ie;
        }
    }
    function initModel() {
        var cls = 'page active';

        modelP0();
        modelP1();
        modelP2();
        modelP3();
        modelP4();
        modelP5();

        function modelP0() {
            var page = $$("#p0");
            page.init = function (callback) {
                page.register = 1;
                $EF(callback);
            };
        }
        function modelP1() {
            var page = $$("#p1");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;

                setTimeout(function () {
                    $EF(callback);
                }, Time);
            };
        }
        function modelP2() {
            var page = $$("#p2");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;

                setTimeout(function () {
                    $EF(callback);
                }, Time);
            };
        }
        function modelP3() {
            var page = $$("#p3");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;

                setTimeout(function () {
                    $EF(callback);
                }, Time);
            };
        }
        function modelP4() {
            var page = $$("#p4");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;
                setTimeout(function () {
                    $EF(callback);
                }, Time);
                if (IE)
                    return;
            };
        }
        function modelP5() {
            var page = $$("#p5");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;

                setTimeout(function () {
                    $EF(callback);
                }, Time);
            };
        }
    }
    function initEvent() {
        initBtnClick();
        Touch && initTouchEvent();
  
        function initTouchEvent() {
            var START_EVENT = Touch ? 'ontouchstart' : 'onmousedown',
                    MOVE_EVENT = Touch ? 'ontouchmove' : 'onmousemove',
                    END_EVENT = Touch ? 'ontouchend' : 'onmouseup';

            var parEle = $$("#main");
            parEle[className] = 'grab';
            var ele = $$("#swipe");
            var Trsf = $GP('transform');
            var Trst = $GP('transition');
            var begin;
            var height;
            var listLength;
            var startTime, startY, currY;

            parEle[START_EVENT] = onStart;

            function onStart(e) {
                e.preventDefault();
                 
                if (Activing || begin)
                    return;
                e.stopPropagation();
                begin = true;
                ele[style][Trst] = 'initial';
                height = WIN.innerHeight;
                listLength = ele.children.length;
                startTime = new Date();
                startY = $GC(e, 'Y');
                DOC[MOVE_EVENT] = onMove;
                DOC[END_EVENT] = onEnd;
            }
            function onMove(e) {
              
                if (Activing || !begin)
                    return;
                e.preventDefault();
                //e.stopPropagation();

                currY = $GC(e, 'Y');
                var dist = currY - startY;

                if (PageIndex === 0 && dist > 0) {  //top img to top
                    dist = 0;
                } else if (PageIndex === listLength - 1 && dist < 0) {  //btm img to btm
                    return;
                    //dist /= 3;
                    //(dist <= (-1 * height / 3)) && (dist = (-1 * height / 3));
                } else if (PageIndex === listLength && dist > 0) {
                    return;
                } else if (PageIndex === listLength && dist <= 0) {
                    return;
                }

                (dist >= height) && (dist = height);
                (dist <= -height) && (dist = -height);

                ele[style]['top'] = (dist / height - PageIndex) * 100 + '%';
            }
            function onEnd(e) {
                e.preventDefault();

                if (Activing || !begin)
                    return;
                DOC[MOVE_EVENT] = '';
                DOC[END_EVENT] = '';

                if (PageIndex === listLength){
                    return reset();
                }
              
                    
                currY = $GC(e, 'Y');
                var index = PageIndex;
                var dist = currY - startY;
                var distTime = new Date() - startTime;

                if (distTime < 100) {
                    var d = Math.pow(dist / distTime, 2) / 0.001;
                    dist = Math.abs(dist) / dist * d;
                }
                dist >  height / 6 && (index--);
                dist < -height / 6 && (index++);
                
                (index < 0) && (index = 0);
                (index >= listLength) && (index = listLength - 1);            

                if (index !== PageIndex || (index === PageIndex && Math.abs(dist))) {
                    moveTo(index);  
                }else {
                    reset();
                }
            }

            function reset() {
                begin = false;
                ele[style][Trst] = "";
                $$("#cont")[style][Trst] = "";
            }

            function moveTo(index, callback) {
                ele[style][Trst] = "0.1s";
                gotoPage(index, reset);
            }

        }
    }
   
    function gotoPage(index, callback) {
       
        var len = $$("#swipe").children.length;
        if (Activing || index >= len)
            return;       
        Activing = 1;

        
        $$("#swipe")[style]['top'] = -100 * index + '%';
    

        showFixbar(index);
        setTimeout(deal, Time);

        function deal() {
            PageIndex = index;

            var page = $$("#p" + index);
            if (page.register)
                return clearActiving(0, callback);
            if (typeof page.init === 'function') {
                $EF(page.init, function () {
                    clearActiving(0, callback);
                });
            } else {
                clearActiving(0, callback);
            }
        }       
    }
    
 
    function showFixbar(index) {
        var len = $$("#fixbar").children.length;
        for (var i = 0; i < len; i++) {
            $$("#fixbar" + i)[className] = '';
        }
        $$("#fixbar" + index)[className] = 'open';
    }

    function initBtnClick() {       
        var url=downUrl[0];
        if(isIphone){
            curBtn=$$('#iosBtn');
            url=downUrl[1];
            $D($$('#andBtn'));
            $D($$('#iosBtn'),1);
        }

        if(isWx){
           /* $$("#cont").style.overflow="hidden";
            $$("#weixinPage").onclick = function (e) {
                e.stopPropagation();
                $D($$("#weixinPage"));
            };

            curBtn.onclick = function (e) {
               $D($$("#weixinPage"),1);             
            };*/
if(!isIphone){		

//var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
                   // var isHuawei = navigator.userAgent.toLowerCase().match(/huawei/i) == "huawei";
                   // var isHonor = navigator.userAgent.toLowerCase().match(/honor/i) == "honor";
                   /* if (wechatInfo[1] > "7.0.6.1500") {
 url="http://a.app.qq.com/o/simple.jsp?pkgname=com.iflytek.inputmethod&ckey=CK1373472118157&android_schema=open%3a%2f%2finputmethod.iflytek.com%2f7424%2f";          
}else{
                 url= "http://tz.xfdwz.com/shareskin/?df=" + df;
}	
*/
url="http://a.app.qq.com/o/simple.jsp?pkgname=com.iflytek.inputmethod&ckey=CK1373472118157&android_schema=open%3a%2f%2finputmethod.iflytek.com%2f7424%2f";          

}	


curBtn.onclick = function (e) {
              var _t=isIphone?"苹果":"安卓";
               Cnzz(_t+'微信下载', '点击');
               LOC.href=url;			  
            };
        }else{
            curBtn.onclick = function (e) {
              var _t=isIphone?"苹果":"安卓";
               Cnzz(_t+'手机下载', '点击');
               LOC.href=url; 
            };
        }

        if ($G("d") === '0') {
            $D($$("#andBtn"));
            $D($$("#iosBtn"));
        }
    }


    function checkBrowserVer() {
        var v = getBrowserInfo();
        var t = v.split(' ');
        var x = t[1].split('.')[0] - 0;

        if (t[0] === 'Chrome' && x <= 31) {
            body[className] = 'ie';
        }

        function getBrowserInfo() {
            var ua = NAV.userAgent,
                    N = NAV.appName, tem,
                    M = ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i) || [];
            M = M[2] ? [M[1], M[2]] : [N, NAV.appVersion, '-?'];
            if(ua.toLowerCase().indexOf("iphone") > 0){
                isIphone = true;
            }
            if(ua.toLowerCase().match(/MicroMessenger/i) == "micromessenger" && (typeof WeixinJSBridge !== undefined)){
                isWx = true;
            }
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null)
                M[2] = tem[1];
            return M.join(' ');
        }
    }
    function clearActiving(time, callback) {
        var t = time ? time : 50;
        setTimeout(function () {
            Activing = 0;
            $EF(callback);
        }, t);
    }
    function Cnzz(category, action) {
        !action && (action = '点击');
        try {
            _czc.push(["_trackEvent", category, action, '输入法-wap-首页']);
        } catch (e) {
            console.log(e);
        }
    }

    (function () {
        var styleStr;
        if (Touch) {
          styleStr = 'body{font-size:42px}#logo{left:34px;top:30px;width:168px;height:48px}#andBtn,#iosBtn{margin-left:-180px; bottom:160px;width:360px;height:100px;line-height:100px;border-radius:12px;text-indent:118px;word-spacing:4px}#andBtn.littleBtn,#iosBtn.littleBtn{bottom:130px;}#iosBtn{text-indent:112px;font-size:36px;}#andBtn>img,#iosBtn>img{width:84px;height:84px;left:24px;top:8px}.page>img{height: 864px;width: 552px;top:42px;margin-left:-276px;}.little>.page>img{height: 783px;width: 500px;margin-left:-250px;}.littleIphone>.page>img{height: 626px;width: 400px;margin-left:-200px;}#fixbar{font-size:12px;right:30px;margin-top:-84px}#fixbar>div{height:28px;width:28px}.barLab{width:8px;height:8px;margin:10px;border-radius:4px}.barDot{width:8px;height:8px;margin:10px;border-radius:4px}#weixinPage{font-size: 32px;}#weixinPageCon{padding: 42px;}#weixinPageCon div{line-height: 60px;}';
            $ADPALLSTYLE(styleStr, '', initialize, 720);
        } else {
            styleStr = '';
            $ADPALLSTYLE(styleStr, '', initialize, 720);
        }
      
    
    })();
})();