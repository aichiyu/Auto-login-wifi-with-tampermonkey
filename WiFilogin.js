// ==UserScript==
// @name:en      ShanghaiTech WiFi Auto login
// @name           ������վ�ȴ�����֤�뼰��¼
// @namespace https://github.com/aichiyu/Auto-login-wifi-with-tampermonkey
// @version 0.3
// @description auto login shanghaitech WiFi
// @author �������27
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
        //wifi��¼
        if (url.includes("controller.")){
            $('input[value*="��¼ Login"]').click();
            setInterval(clos,1000);
        }
        // @match https://www.msn.cn/*
        //��¼��ر�msn
        //if (url.includes("www.msn.cn")) {
        //    window.opener=null;
        //    window.open('','_self');
        //    window.close();
        //}
    }, false);
})();