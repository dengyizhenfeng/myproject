/**
 * Created by xibotao on 2018/5/25.
 */
function showPreview(source) {
    var file = source.files[0];
    if(window.FileReader) {
        var fr = new FileReader();
        fr.onloadend = function(e) {
            $("#uImg").attr("src",e.target.result);
        };
        fr.readAsDataURL(file);
        $("#uImg").css("display","block");
    }
}
$(function(){
    var windowWidth = $(window).width();
    if (windowWidth < 628) {
       $('form').validator({
           formClass: 'n-yellow',
           msgClass: "n-top"
       });
   }else{
       $('form').validator({
           formClass: 'n-yellow',
           msgClass: "n-right"
       });
   }

});