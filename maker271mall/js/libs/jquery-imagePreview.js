/**
 * Created by sunzhiyong on 2017/12/22.
 */

(function($){
    var imagePreview=(function(){
        function imagePreview(element,options){
            this.settings= $.extend({}, $.fn.imagePreview.defaults,options);
            this.element=element;
            this.init();
        }

        imagePreview.prototype={
            init:function(){
                var me=this;
                me.selectors=me.settings.selectors;
                me.localImg =me.element.find(me.selectors.localImg);
                me.prev     =me.localImg.find(me.selectors.prev);
                me.upload   =me.element.find(me.selectors.upload);
                me.$clearImg=me.element.find(me.selectors.clearImg);
                me.width    =me.localImg.width();
                me.height   =me.localImg.height();

                me.upload.change(function(){
                    me._prevImg();
                });

                me.$clearImg.click(function() {
                    me._clearImg();
                })
            },
            _prevImg:function(){
                var me=this,
                    imgSrc;
                if(me.upload[0].files && me.upload[0].files[0]){
                    //火狐下，直接设img属性
                    if(window.navigator.userAgent.indexOf('Chrome')>=1 || window.navigator.userAgent.indexOf('Safari')>=1){
                        imgSrc=window.webkitURL.createObjectURL(me.upload[0].files[0]);
                    }else{
                        imgSrc=window.URL.createObjectURL(me.upload[0].files[0]);
                    }

                    me.prev.css({
                        'display':'block',
                        'width':me.width,
                        'height':me.height
                    }).attr('src',imgSrc);
                }else{
                    //IE下，使用滤镜
                    me.upload.select();
                    me.upload.blur();
                    imgSrc=document.selection.createRange().text;

                    //必须设置初始大小
                    me.localImg.css({
                        'width':me.width,
                        'height':me.height
                    })

                    //图片异常的捕捉，防止用户修改后缀来伪造图片
                    try{
                        me.localImg[0].style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';
                        me.localImg[0].filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = imgSrc;
                    }catch(e){
                        alert("您上传的图片格式不正确，请重新选择！");
                        return false;
                    }

                    me.prev.css('display','none');
                    document.selection.empty();
                }

                return true;
            },
            _clearImg:function(){
                var me = this;
                var imgSrc = 'images/noPic.jpg';
                me.upload.val('');

                try{
                    me.prev.attr('src',imgSrc);
                    me.localImg[0].style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';
                    me.localImg[0].filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = imgSrc;
                }catch(e){

                }
                return true;
            }
        };

        return imagePreview;
    })();

    $.fn.imagePreview=function(options){
        return this.each(function(){    //返回当前对象，维护链式调用
            var $this=$(this),
                instance=$this.data('imagePreview');
            if(!instance){
                instance=new imagePreview($this,options);
                $this.data('imagePreview',instance);
            }
            if($.type(options)==='string') return instance[options]();  //通过配置变量实现方法的调用
        });
    };

    $.fn.imagePreview.defaults={
        selectors:{
            localImg:'.local-img',
            prev:'.prev',
            upload:'.upload',
            clearImg:'.clear-img'
        }
    };

    $('[data-ride="imagePrev"]').imagePreview();
})(jQuery);