/**
 * Created by xibotao on 2018/5/17.
 */
$(function () {
    var windowWidth = $(window).width();
    //iframe动画
    function ianimate(){
        $(window).bind("load", function () {
            $(".g-bd").css("opacity", "0");
            setTimeout(function () {
                $(".g-bd").animate({opacity: "1"});
            }, 200);
        });
        $(".m-menu a").click(function () {
            $(".g-bd").css("opacity", "0");
            setTimeout(function () {
                $(".g-bd").animate({opacity: "1"});
            }, 200);
        });
    }
    //不带滚动条
    function animatenoS(){
        $(".u-btn-del").click(function () {
            $(".m-mask").css("display", "block");
            $("body").css("overflow-y", "hidden");
        });
        $(".u-sure").click(maskOutmp);
        $(".u-cancel").click(maskOutmp);
        $(".fa-close").click(maskOutmp);
    }
    /*遮罩消失*/
    function maskOutpc() {
        $(".m-mask").css("display", "none");
        $("body").css("overflow-y", "scroll");
        $("html").css("padding-right", "0");
    }
    function maskOutmp() {
        $(".m-mask").css("display", "none");
        $("body").css("overflow-y", "scroll");
    }
    if (windowWidth > 884) {
        ianimate();
        $(".u-btn-del").click(function () {
            $(".m-mask").css("display", "block");
            $("body").css("overflow-y", "hidden");
            $("html").css("padding-right", "17px");
        });
        $(".u-sure").click(maskOutpc);
        $(".u-cancel").click(maskOutpc);
        $(".fa-close").click(maskOutpc);
    } else if(windowWidth>=628){
        ianimate();
        animatenoS();
    } else {
        animatenoS();
        $(".u-mpnav").click(function(){
            $('.g-sd').animate({width:'toggle'},200);
        });
        $(".m-menu a").click(function(){
            $(".g-sd").hide();
        })
    }
});