// ==UserScript==
// @name 
// @name:en      ShanghaiTech WiFi Auto login
// @name           ������վ�ȴ�����֤�뼰��¼
// @namespace http://tampermonkey.net/
// @version 0.2
// @description auto login shanghaitech WiFi
// @author �������27
// @match *controller.shanghaitech.edu.cn*
// @grant none
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