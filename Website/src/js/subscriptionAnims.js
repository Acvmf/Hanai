$('.newsletterInput').on({
    focusin: function(){
        
        $(".newsletterInput, .newsletterInputAddon")
            //.removeClass("box-shadow-low")
            //.addClass("box-shadow-med")
            .animate({
                top:"-3"
            }, 150)
    },
    
    focusout: function(){
        
        $(".newsletterInput, .newsletterInputAddon")
            //.removeClass("box-shadow-med")
            //.addClass("box-shadow-low")
            .animate({
            top:"0"
        }, 150)
    }
});


$('.btn').mousedown(function(){
    $(this).animate({
        top:"3"
    }, 150)
})
.mouseenter(function(){
    if($(this).is(":focus")){
        
    }
    else{
        $(this).animate({
            top:"-3"
        }, 150)
    }
})
.mouseleave(function(){
    if($(this).is(":focus")){
        
    }
    else{
        $(this).animate({
            top:"0"
        }, 150)
    }
});

$(window).mouseup(function(){
    $('.btn').animate({
        top:"0"
    }, 150).blur()
});