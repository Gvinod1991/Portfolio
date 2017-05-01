

$(document).ready(function () {
    //******======scroll to top=======************
        $("#top").click(function () {
               $("html, body").animate({scrollTop: 0}, 1000);
            });
    //******======scroll to top fadeout=======************
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });
    //******======Smooth scroll=======************
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 300, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
//******======active class change on scroll =======************
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#bs-example-navbar-collapse-1 a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar li ').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}