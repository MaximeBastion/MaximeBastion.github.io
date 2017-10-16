
window.onload = launchFirstAnimations();





/* Apparition animation */
$(window).scroll(function() {   // only for bottom to top entrance
    $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

$(window).scroll(function() { // Slides in animated elements according to their position
    $(".animated").each(function(){
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        var winMid = $(window).width()/2;
        if (($(this).hasClass('now')) || (pos < winTop + 600)) {
            $(this).css('visibility', 'visible');
            if ($(this).offset().left < winMid) {
                $(this).addClass("fadeInLeft");
            } else {
                $(this).addClass("fadeInRight");
            }

        }
    });
});

function launchFirstAnimations() {
    $(".now").each(function(){
        var winMid = $(window).width()/2;
        $(this).css('visibility', 'visible');
        if ($(this).offset().left < winMid) {
            $(this).addClass("fadeInLeft");
        } else {
            $(this).addClass("fadeInRight");
        }
    });
}