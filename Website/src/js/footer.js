var done = false;

$(window).resize(function(){
    $(window).scroll();
});
$(window).scroll(function(){
    
    var windowHeight = $(window).height();
    
    var docHeight = $(document).height();
    
    var breakPoint = docHeight * 0.25;
    
    
    
    if ($(window).scrollTop() > breakPoint && done == false)
    {
        $(".footer").animate({height: "64px"},150);

        done = true;
    }
    else if($(window).scrollTop() <= breakPoint && done == true){
        $(".footer").animate({height: 0},150);

        done = false;
    }
});