'use strict';
function mobileCheck(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function ui() {
    var $body = $('body');
    $body.animate({scrollTop:0})
    // mouse cusor & play button position
    var $sectionWrap = $('.section_wrap');
    var $slickSlide = $('.slick-slide');
    var $movWrap = $('.mov_wrap');
    var $playerWrap = $('.player');
    var $playBtn = $playerWrap.find('.floating_btn');
    var $palyAtag = $playerWrap.find('a');
    var $footer = $('.footer');
    var playerW = $playerWrap.innerWidth();
    var playerH = $playerWrap.innerHeight();
    var movW = $movWrap.innerWidth();
    var movH = $movWrap.innerHeight();
    var mouseX = playerW / 2, mouseY = playerH / 2;
    var video = $playerWrap.find('video').get(0);
    // var xp = 0, yp = 0;
    var xp = 50 + '%', yp = 50 + '%';
    var topBtn = '.top_btn';
    var closeBtn = '.close_btn button';
    var openBtn = '.nav_btn button';
    var target = '.mo_nav_wrap';
    // 클릭이벤트
    function clickHandler () {
        $(closeBtn).on('click', function(){
            $(target).removeClass('active');
            $('.dim').remove();
            $body.css({
                overflow: 'auto'
            })
        })
        $(openBtn).on('click', function(){
            $(target).addClass('active');
            $body.prepend('<div class="dim"><div>');
            $body.css({
                overflow: 'hidden'
            })
        })
        // topbtn
        $(topBtn).on('click', function(){
           $('body').animate({
               scrollTop:0
           }, 500)
        })
    }
    function videoHandle() {
        $playerWrap.mousemove(function(e){
        mousePosition.move(e);
    });
        $playerWrap.mouseleave(function(e){
        mousePosition.leave(e);
    });
    // mouse cusor follow speed
    setInterval(function(){
        xp += ((mouseX - xp)/10);
        yp += ((mouseY - yp)/10);
        $playerWrap.find("button").css({left: xp +'px', top: yp +'px'});
    }, 20);
        // handlePlay();
    };
    var mousePosition = {
    move : function(e) {
        var videoWidth = movW - playerW;
        var videoHeight = movH - playerH;
        var positionX = parseInt(e.clientX - (videoWidth / 2) - 10);
        var positionY = parseInt(e.clientY - (videoHeight / 2));
        playerW = $playerWrap.innerWidth();
        playerH = $playerWrap.innerHeight();
        movW = $movWrap.innerWidth();
        movH = $movWrap.innerHeight();
    if (positionX > 0 && positionY > 0 && positionX < playerW && positionY < playerH) {
            mouseX = positionX;
            mouseY = positionY;
            $playBtn.css({opacity: 1});
        } 
    },
    leave : function() {
        mouseX = playerW / 2;
        mouseY = playerH / 2;
        $playBtn.css({opacity: .3});
    }
    };
    $('.main_top').addClass('on');
    function handlePageUp (inx){
        var scrollEventEl = '.page_up, .keyword_wrap, .main_top, .bot_area, .left_right, .right_left, .page_down';
        var activePage = $('.slick-slide').eq(inx);
        var activePageEvent = activePage.find(scrollEventEl);
        $(scrollEventEl).removeClass('on');
        activePageEvent.addClass('on');
        activePageEvent.closest('div').css({
            overflow: 'hidden'
        });
        activePageEvent.each(function(i){
            var delay = activePageEvent.eq(i).data().delay;
            activePageEvent.eq(i).css({
                transition : "transform " + delay + "s ease-in-out",
            });
        })
    };
    $sectionWrap
    .slick({
        speed: 800,
        vertical: true,
        verticalSwiping:true,
        arrows: false,
        dots: true, 
        infinite: false,
        adaptiveHeight: true,
        cssEase: 'ease-in-out'
    })
    .on('beforeChange', function(event, slick, current, nextSlide){
        if (nextSlide == 2) {
            $(".slick-dots, .header").addClass('revers');
        } else {
            $(".slick-dots, .header").removeClass('revers');
        }
    })
    .on('afterChange', function(event, slick, currentSlide, nextSlide){
        // $playerWrap.removeClass('play');
        // video.pause();
        // var lastPage = slick.$slides.length == currentSlide + slick.options.slidesToScroll;
        handlePageUp(currentSlide);
    })
    // 마우스휠 이벤트
    function weelHandler() {
        $(window).on('mousewheel', function(e){
            // e.preventDefault();
            var firstPage = $slickSlide.eq(0).hasClass('slick-active');
            var slideLength = $slickSlide.length;
            var lastPage = $slickSlide.eq(slideLength - 1).hasClass('slick-active');
            var delta = e.originalEvent.wheelDelta;
            
            if (delta > 0 && firstPage) {
                return false;
            }
            else if (delta < 0 && lastPage) {
                $footer.addClass('on');
                return false;
            }
            else if (delta > 0 && lastPage){
                if($footer.hasClass('on')){
                    $footer.removeClass('on');
                    return false;
                }else {
                    $sectionWrap.slick('slickPrev'); 
                }
            }
            else if (delta > 0) {               
                $sectionWrap.slick('slickPrev'); 
                if($footer.hasClass('on')){
                    $footer.removeClass('on');
                }
            }
            else {
                $sectionWrap.slick('slickNext');
            }
           
        });   
    };

    // 모바일일 경우 슬릭제거
    if (mobileCheck()){
        $('body').css({
            overflow: 'auto'
        })
        // $footer.addClass('on')
        // video play, pause
        function handlePlay(){
            $palyAtag.click(function(){
                video.play();
            });
        };
        $palyAtag.attr('id','');
        $sectionWrap.slick('unslick');
        $(window).scroll(function(e){
            var $section = $('.section');
            var scrollY = parseInt($(document).scrollTop());
            var scrollEv = '.page_up, .keyword_wrap, .main_top, .bot_area, .left_right, .right_left, .page_down';
            if(scrollY > 100) {
                $(topBtn).css({
                    opacity: 1,
                    transition: '.2s ease-in-out'
                }, 100)
                $('.header').addClass('scroll_on')
            } else {
                $(topBtn).css({opacity: 0})
                $('.header').removeClass('scroll_on')
            }
            $section.each(function(i){
                var elTop = parseInt($section.eq(i).offset().top);
                if(scrollY > elTop - 200) {
                    var activePageEvent = $section.eq(i).find(scrollEv);
                    activePageEvent.addClass('on');
                    activePageEvent.each(function(i){
                        var delay = activePageEvent.eq(i).data().delay;
                        activePageEvent.eq(i).css({
                            transition : "transform " + delay + "s ease-in-out",
                        });
                    })
                    activePageEvent.closest('div').css({
                        overflow: 'hidden'
                    });
                }
            });
        })
        handlePlay();
    } 
    setInterval(function(){
    if($(".mov_sbb").prop("ended")){
      alert('end')
    }
  },200);

    $("#fancy").fancybox();
    videoHandle();
    weelHandler();
    clickHandler();
    

    // main page vertical swiper
    // var swiper = new Swiper('.sdi_main.swiper', {
    //     // Optional parameters
    //     slidesPerView: 1,
    //     direction: 'vertical',
    //     mousewheel: {
    //     invert: false,
    //     },
    //     pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     },
    //     loop: false,
    //     speed: 1000,
    //     on: {
    //     slideChangeTransitionEnd: function() {
    //         var Index = this.activeIndex;
    //         video.pause();
    //         handlePageUp(Index);
    //         playerWrap.removeClass('play');
    //         }
    //     },
    // });
}
ui();