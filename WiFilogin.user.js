// ==UserScript==
// @name:    ShanghaiTech WiFi Auto login
// @namespace https://github.com/aichiyu/Auto-login-wifi-with-tampermonkey
// @version 1.0
// @description auto login shanghaitech WiFi
// @author aichiyude27
// @match *controller.shanghaitech.edu.cn*
// @grant none
//@icon64  https://s1.ax2x.com/2018/02/08/vIH7p.png
// ==/UserScript==


(
    function() {
        var $ = window.jQuery;
        'use strict';
        window.addEventListener('load', ()=> {// wait until page loaded
            let url = window.location.href;
            //wifi login
            if (url.includes("controller.")){
                $('input[value*="登录 Login"]').click();
                setTimeout(function() {//close the page
                    window.opener=null;
                    window.open('','_self');
                    window.close();
                },3000);
            }
        }, false);
})();