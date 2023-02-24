// SLIDER

$('.slider').slick({
    dots: true,
    prevArrow: "<button class='icon-slick-arrow prev'><i class='icon-arrow-right'></i></button>",
    nextArrow: "<button class='icon-slick-arrow next'><i class='icon-arrow-right'></i></button>",
    slidesToShow: 1,
    adaptiveHeight: true,	
    draggable: false,
});


// POPUP --------------------------------

$('.slider img').click(function() {
    img = $(this).clone()
    $('.contacts-list').append(img);
    $('.popup-wrapper').addClass('_popup-show');
    $('body').addClass('_scroll-lock')
});

$('.popup__btn').click(function() {
    $('.popup-wrapper').removeClass('_popup-show');
    $('body').removeClass('_scroll-lock');
    $('.contacts-list > *').fadeOut(200, function(){$(this).remove()});
});

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if ((e.keyCode == 27) && ($('.popup-wrapper').hasClass('_popup-show'))) {
        $('.popup__btn').click()
    }
});


// HEADER  --------------------------------

$(window).on("scroll", function(){
    if($(this).scrollTop() > 0) {
        $('header').addClass('_scroll')
    } else {
        $('header').removeClass('_scroll')
    }


    // HEADER on MOBILE  --------------------------------
    if($(window).width() < 768) {
        var prevScrollpos = window.pageYOffset;
        $(window).on("scroll", function(){
            var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    $('header').removeClass('_scroll_mobile');
                } else {
                    $('header').addClass('_scroll_mobile');
                }
            prevScrollpos = currentScrollPos;
        });
    }
});


// SIDEBAR BTN  --------------------------------

$('.sidebar__btn').click(function(){
    $('.sidebar').toggleClass('slidebar_active')
    $('main').toggleClass('main_shifted')
    $('.sidebar__btn').toggleClass('slidebar-btn_active')
});



// ANIMATE  --------------------------------

const animItems = document.querySelectorAll("._animate");
$(window).scrollTop(1);
$(window).on("scroll", function(){
    for (let index = 0; index < animItems.length; index++){
        if($(window).scrollTop() + $(window).height() > $(animItems[index]).offset().top + $(animItems[index]).height() / 2 
            & $(window).scrollTop() < $(animItems[index]).offset().top + $(animItems[index]).height() / 2){
            $(animItems[index]).addClass("_animate-Active");
        } else {
            if($(animItems[index]).hasClass("_anim-no-hide") !== true){$(animItems[index]).removeClass("_animate-Active");}
        };
    };
});





// BIOFRAGY SPACEMAN ANIMATE

const item = $('#biografy2__animate');
x = item.offset().top;
y = item.offset().left;



setInterval(function(){
        y = y + 1
        x = x + Math.sin(y/30) * 2
        if(y > $(window).width()) {
            y = 0;
        }
        item.offset({ top: x, left: y });
        // item.css('transform', 'rotate('+y/2+'deg)')
        console.log(x, y)

},10);


// ENDING DOORS CLOSE


const leftDoor = $('.ending__left');
const rightDoor = $('.ending__right');
// leftDoor.css('transform', 'translateX(0)');
$(window).scroll(function() {
    windowBottom = $(window).scrollTop() + $(window).height()
    sectionOffset = $('.ending').offset().top
    sectionHeinght = $('.ending').height()
    // console.log(windowBottom)

    if(windowBottom >= sectionOffset) {
        
        ratio = 100 - (windowBottom - sectionOffset) / sectionHeinght * 100;
        console.log(ratio);
        leftDoor.css('transform', 'translateX('+ -ratio+'%)');
        rightDoor.css('transform' , 'translateX('+ ratio+'%)');
        
    }
    // Когда скролл равен оффсету секции - 0%
    // Когда превышение скролла будет равно высоте секции - 100%
});
