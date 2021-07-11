/*--------------preloader------------*/
window.onload = function () {

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
}
/*--------------mobile-menu----------*/
$(function () {
    $('.btn-mobile-menu').click(function (e) {
        e.preventDefault();

        $('.collapsemenu').slideToggle();
    });
});
/*-------------slideShow-----------------*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var slideIndex = 0;
showSlidesAuto();

function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlidesAuto, 10000);
}
/*--------------------fixed-header---------------- */
$(document).ready(function () {
    $(document).scroll(function () {
        const $this = $(this);
        const header = $('#header');
        let st = $this.scrollTop();
        if (st > 100 && window.matchMedia('screen and (min-width: 992px)').matches) header.addClass('sticky').removeClass('py-3');
        else header.removeClass('sticky').addClass('py-3');


    });
});
/*----------------------slide-testimonial-------------*/
var tabIndex = 1;
showTabs(tabIndex);

function currentTab(n) {
    showTabs(tabIndex = n);
}

function showTabs(n) {
    var i;
    var tabs = document.getElementsByClassName("testimon");
    var bullets = document.getElementsByClassName("bullet");
    if (n > tabs.length) {
        tabIndex = 1
    }
    if (n < 1) {
        tabIndex = tabs.length
    }
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    for (i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }
    tabs[tabIndex - 1].style.display = "block";
    bullets[tabIndex - 1].className += " active";
}

var tabIndex = 0;
showTabsAuto();

function showTabsAuto() {
    var i;
    var tabs = document.getElementsByClassName("testimon");
    var bullets = document.getElementsByClassName("bullet");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabIndex++;
    if (tabIndex > tabs.length) {
        tabIndex = 1
    }
    for (i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }
    tabs[tabIndex - 1].style.display = "block";
    bullets[tabIndex - 1].className += " active";
    setTimeout(showTabsAuto, 10000);
};
/*-------------------------submit-form---------- */
$(document).ready(function () {


    $('.btn-submit').click(function () {
        if (validateForm() == true) {
            $("#form").submit();
        }
    })

    function validateForm() {
        var name = $('#name').val();
        var email = $('#email').val();
        var send = false;
        if (name.length === 0) {
            $('#alert-message').html('لطفا نام و نام خانوادگی خود را وارد نمایید').css(
                'display', 'block');

            send = false;
        } else {
            $('#alert-message').css('display', 'none');
            send = true;
        }
        if (send == true) {
            if (IsEmail(email) == false) {
                $('#alert-message').html(
                    'آدرس پست الکترونیک شما معتبر نمی باشد لطفا آن را بررسی نموده و دوباره امتحان کنید'
                ).css("display", "block");

                send = false;
            } else {
                $('#alert-message').css('display', 'none');
                send = true;
            }

        }
        return send;
    }

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            return false;
        } else {
            return true;
        }
    }
});
/*-------------------------------------carousel-3thumbnail----------------- */
$(function () {
    $('.recent-products').slider({
        speed: 1000,
        loop: true,
    });
});