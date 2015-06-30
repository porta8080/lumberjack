$(function(){
   var sliders = $('.slider');
    var slider;
    
    var findNextSlider = function(slider){
        var slides = slider.find('.item');
        var total = slides.length;
        var last = total - 1;
        var _this;
        var next_slide=false;
        slides.each(function(i){
            _this = $(this);
            if(_this.hasClass('active')){
                if(i < last){
                    next_slide = slides.get(i+1);
                    return true;
                }else{
                    next_slide = slides.get(0);
                    return true;
                }
                
            }
        });
        return next_slide;
    };
    
     var startSliding = function(slider,width,time,interval,easing){
        var next_slide = findNextSlider(slider);
        if(next_slide){
            next_slide = $(next_slide);
            next_slide.css({'display':'inline-block','left':width+'px'});
            current_slide = slider.find('.active');
            setTimeout(function(){
                current_slide.animate({'left':-1*width},time,function(){
                    current_slide.css({'display': 'none'});
                    current_slide.removeClass('active');
                });
                
                next_slide.animate({'left':0},time,function(){
                     next_slide.addClass('active');
                     startSliding(slider,width,time,interval,easing);
                });
            }, interval);   
        }
    };
    
    sliders.each(function(){
        slider = $(this);
        var sh = slider.outerHeight();
        var sw = slider.outerWidth();
        var active_item = slider.find('.item.active');
        var c;
        
        if(!active_item.length){
            active_item = slider.find('.item').first();
            active_item.addClass('active');  
        }
        
        /*slider.find('.item').each(function(){
           $(this).css({width: sw,height: sw});
        });*
        /*slider.find('.item').each(function(i){
            _this = $(this);
            if(!i) _this.addClass('active');
        }); */
        
       // var wrapper = $('<div class="wrapper"></div>');
        //slider.append(wrapper);
       // wrapper.append(slider.find('.item'));
        startSliding(slider,slider.outerWidth(),200,3000,'swing');
    });
    
    var dropdowns = $('.dropdown'), submenus, link;
    dropdowns.each(function(){
        _this = $(this);
        //link = _this.find('a');
        link = _this.find(">:first-child");
        submenu = _this.find('ul');
        _this.attr('data-height',submenu.outerHeight());
        submenu.css({'height':0});
        link.click(function(e){
            /*if($(this).is('a')) alert('oii')
            e.stopPropagation();
            e.preventDefault();*/
           _dropdown = $(this).parents('.dropdown');
           if(_dropdown.hasClass('open')){
                _dropdown.removeClass('open');
                _dropdown.find('ul').css({'height':0});
           }else{
                _dropdown.addClass('open');  
                _dropdown.find('ul').css({'height':_dropdown.attr('data-height')});
           } 
        });
    });
    
    var queue_columns = $('.queue .c');
    queue_columns.each(function(){
    //dá pontos 
    });
    
    queue_columns.each(function(){
    //atribui larguras
    });
});