// ==UserScript==
// @name:en      ShanghaiTech WiFi Auto login
// @name           Ìø¹ýÍøÕ¾µÈ´ý¡¢ÑéÖ¤Âë¼°µÇÂ¼
// @namespace https://github.com/aichiyu/Auto-login-wifi-with-tampermonkey
// @version 0.3
// @description auto login shanghaitech WiFi
// @author °®³ÔÓãµÄ27
// @match *controller.shanghaitech.edu.cn*
// @grant none
//@icon64  https://s1.ax2x.com/2018/02/08/vIH7p.png
// @updateURL  https://github.com/aichiyu/Auto-login-wifi-with-tampermonkey/blob/master/WiFilogin.js
// @downloadURL  https://github.com/aichiyu/Auto-login-wifi-with-tampermonkey/blob/master/WiFilogin.js
// ==/UserScript==


(function() {
    function clos(){//close the page
        window.opener=null;
        window.open('','_self');
        window.close();
    }
    'use strict';
    window.addEventListener('load', ()=> {// wait until page loaded
        let url = window.location.href;
        //wifiµÇÂ¼
        if (url.includes("controller.")){
            $('input[value*="µÇÂ¼ Login"]').click();
            setInterval(clos,1000);
        }
        // @match https://www.msn.cn/*
        //µÇÂ¼ºó¹Ø±Õmsn
        //if (url.includes("www.msn.cn")) {
        //    window.opener=null;
        //    window.open('','_self');
        //    window.close();
        //}
    }, false);
})();