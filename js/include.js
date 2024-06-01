var include = {
    styles: function () {
        document.write('<link rel="icon" href="/image/favicon.ico">');
        document.write('<link rel="stylesheet" href="/css/reset.css">');
        document.write('<link rel="stylesheet" href="/css/font.css">');
        document.write('<link rel="stylesheet" href="/css/jquery.fancybox.css">');
        document.write('<link rel="stylesheet" href="/css/slick.css">');
        document.write('<link rel="stylesheet" href="/css/style.css">');
        document.write('<link rel="stylesheet" href="/css/style_mo.css"></link>');
    },
    footer : function(){
        document.write('<div class="footer">');
        document.write('<div class="footer_area">');
        document.write('<p class="copy">2022 SAMSUNG SDI CO,.LTD. ALL RIGHT RESERVED.</p>');
        document.write('<p>Samsung SDI reserves the right to modify the design, packaging, specifications and features shown herein without prior notice or obligation.</p>');
        document.write('<p class="adress">[17084] 150-20, GONGSE-RO GIHEUNG-GU, YONGIN-SI, GYEONGGI-DO</p>');
        document.write('<p>Contact us: primx@samsung.com</p>');
        document.write('<p class="link">');
        document.write('<a href="https://www.samsungsdi.com" target="_blank"><span>Go to Samsung SDI Official Website</span></a>');
        document.write('</p>');
        document.write('</div>');
        document.write('</div>');
    },
    footerKR : function(){
        document.write('<div class="footer">');
        document.write('<div class="footer_area">');
        document.write('<p class="copy">2022 SAMSUNG SDI CO,.LTD. ALL RIGHT RESERVED.</p>');
        document.write('<p>본 사이트에서 포함된 정보의 전부 또는 일부를 무단으로 제 3자에게 공개, 배포, 복사 또는 사용하는 것은 엄격히 금지됩니다.</p>');
        document.write('<p class="adress">경기도 용인시 기흥구 공세로 150-20 [17084]</p>');
        document.write('<p>문의처 : primx@samsung.com</p>');
        document.write('<p class="link">');
        document.write('<a href="https://www.samsungsdi.co.kr" target="_blank"><span>삼성SDI 공식 홈페이지 바로가기</span></a>');
        document.write('</p>');
        document.write('</div>');
        document.write('</div>');
    },
    floatingBtns: function() {
        document.write('<div class="float_btn">');
        document.write('<button type="button" class="top_btn"><span class="a11y">최상단으로 스크롤</span></button>');
        // document.write('<a href="./file/Logo_eng.zip" target="_balnk" class="bi_download" download=""><span>BI<br>DOWN LOAD</span></a>');
        document.write('</div>');
    },
    analytics: function() {
        document.write('<!-- Global site tag (gtag.js) - Google Analytics -->');
        document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=G-6ZPHV5BWHD"></script>');
        document.write('<script>');
        document.write('window.dataLayer = window.dataLayer || [];');
        document.write('function gtag(){dataLayer.push(arguments);}');
        document.write('gtag("js", new Date());');
        document.write('gtag("config", "G-6ZPHV5BWHD");');
        document.write('</script>');
    }
}