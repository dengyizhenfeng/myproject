/**
 * Created by xibotao on 2018/6/7.
 */
$(function () {
    /*首页导航*/
    $("#side-menu li").click(function(){
        $(this).siblings().removeClass("choose");
        $(this).addClass("choose");
        //if($(this).find("ul")){
        //    //$(".sidebar").animate({width:'toggle'});
        //    alert("you")
        //}else{
        //    alert("mei");
        //}
    });
    $("#side-menu>li:not(:first)").click(function () {
        $(".in").removeClass("in");
        $(".active").removeClass("active");
    });
    $(".u-mpnav").click(function () {
        $(".sidebar").animate({width:'toggle'});
    });
    $(".u-hide").click(function () {
        $(window.parent.document).find(".in").removeClass("in");
        $(window.parent.document).find(".active").removeClass("active");
    });
    /*分类*/
    $("#father").focus(function(){
        if($("#father").val().length){
            $("#close1").css("display","inline-block");
        }else{
            $("#close1").css("display","none");
        }
    });
    $("#father").blur(function(){
        if($("#father").val().length){
            $("#close1").css("display","inline-block");
        }else{
            $("#close1").css("display","none");
        }
    });
    $("#father").keyup(function(){
        if($("#father").val().length){
            $("#close1").css("display","inline-block");
        }else{
            $("#close1").css("display","none");
        }
    });
    $("#close1").click(function(){
        $("#father").val("");
        $("#close1").css("display","none");
    });
});