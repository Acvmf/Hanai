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


$('.btn').mouseenter(function(){
    $(this).animate({
        top:"-3"
    }, 150)
})
.mouseleave(function(){
    $(this).animate({
        top:"0"
    }, 150)
});