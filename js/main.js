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


// BIOGRAGY SUN ANIMATE

const sun = $('.biografy1__sun')
$(window).scroll(function() {
    windowBottom = $(window).scrollTop() + $(window).height()
    sectionOffset = $('.biografy1').offset().top
    sectionHeinght = $('.biografy1').height()
    // console.log(windowBottom)

    if(windowBottom >= sectionOffset) {
        
        ratio = 80 - (windowBottom - sectionOffset) / sectionHeinght * 100;
        // console.log(ratio);


        // console.log(ratio)
        sun.css('transform', 'translateX('+ -ratio+'vw)');
        
    }
    // Math.sin(ratio*1.8)*10
    // Когда скролл равен оффсету секции - 0%
    // Когда превышение скролла будет равно высоте секции - 100%
});


// BIOFRAGY SPACEMAN ANIMATE

const item = $('#biografy2__animate');
// const itemInner = $('#biografy2__animate span');
x = item.offset().top;
x1 = x
y = item.offset().left;



setInterval(function(){
        y = y + 1
        x = x + Math.sin(y/30) * 2
        if(y > $(window).width()) {
            y = 0;
            x = x1;
        }
        
        item.offset({ top: x, left: y });
        item.css('transform', 'rotate( -60deg)')



        // itemInner.css('transform', 'rotate(' + (1 + Math.sin(y/30) * 30)    +'deg)')
        // console.log(x, y)

},10);

// Biografy3 ANIMATE


const bg = $('.biografy3__bg')
$(window).scroll(function() {
    windowBottom = $(window).scrollTop() + $(window).height()
    sectionOffset = $('.biografy__3').offset().top
    sectionHeinght = $('.biografy__3').height()
    // console.log(windowBottom)

    if(windowBottom >= sectionOffset) {
        
        ratio = (windowBottom - sectionOffset) / sectionHeinght;
        // console.log(ratio);


        bg.css('background-color', 'rgba(0,0,0,'+ratio+')');
        
    }
    // Math.sin(ratio*1.8)*10
    // Когда скролл равен оффсету секции - 0%
    // Когда превышение скролла будет равно высоте секции - 100%
});


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
        // console.log(ratio);
        leftDoor.css('transform', 'translateX('+ -ratio+'%)');
        rightDoor.css('transform' , 'translateX('+ ratio+'%)');
        
    }
    // Когда скролл равен оффсету секции - 0%
    // Когда превышение скролла будет равно высоте секции - 100%
});



ownerX = $('.forbes-owner').offset().top
ownerY = $('.forbes-owner').offset().left
$('body').prepend('<div class="forbes-owner_fixed"></div>')
// $('#forbes-owner_fixed').offset({left: ownerY});
$('.forbes-owner_fixed').text($('.forbes-owner').text())

$(window).scroll(function() {
    if(ownerX < $(window).scrollTop() + $(window).height()/2) {
        $('.forbes-owner').addClass('forbes-owner_active');
        $('.forbes-owner_fixed').addClass('forbes-owner__fixed_active');
        
    } else {
        $('.forbes-owner').removeClass('forbes-owner_active');
        $('.forbes-owner_fixed').removeClass('forbes-owner__fixed_active');
    }
});

