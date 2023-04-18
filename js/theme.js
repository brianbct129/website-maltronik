(function($) {
    'use strict';
    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };


    if ($('.contact-form-vaidated').length) {
        $('.contact-form-vaidated').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                },
                booking_date: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).parent().find('.result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }

    if ($('.brand-carousel-one').length) {
        $('.brand-carousel-one').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-long-arrow-left"></i>',
                '<i class="fa fa-long-arrow-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                600: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        });
    }


    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    };

    function thmbxSlider() {
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').bxSlider({
                // adaptiveHeight: true,
                auto: true,
                controls: true,
                nextText: '<i class="opins-icon-right"></i>',
                prevText: '<i class="opins-icon-left"></i>',
                pause: 5000,
                speed: 500,
                pager: true,
                pagerCustom: '.testimonials-slider-pager-one, .testimonials-slider-pager-two'
            });
        }
    }

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }

    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 250, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

// with submenu
    // if ($('.main-navigation .navigation-box .sub-menu').length) {
    //     var subMenu = $('.main-navigation .sub-menu');
    //     subMenu.parent('li').children('a').append(function() {
    //         return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
    //     });
    //     var mainNavToggler = $('.header-navigation .menu-toggler');
    //     var subNavToggler = $('.main-navigation .sub-nav-toggler');
    //     mainNavToggler.on('click', function() {
    //         var Self = $(this);
    //         var menu = Self.data('target');
    //         $(menu).slideToggle();
    //         $(menu).toggleClass('showen');
    //         return false;
    //     });
    //     subNavToggler.on('click', function() {
    //         var Self = $(this);
    //         Self.parent().parent().children('.sub-menu').slideToggle();
    //         return false;
    //     });
    // }

// without sub menu
     if ($('.main-navigation .navigation-box').length) {
        var mainNavToggler = $('.header-navigation .menu-toggler');
        mainNavToggler.on('click', function() {
            var Self = $(this);
            var menu = Self.data('target');
            $(menu).slideToggle();
            $(menu).toggleClass('showen');
            return false;
        });
    }
    


    function SmoothMenuScroll() {
        var anchor = $('.scrollToLink');
        if (anchor.length) {
            anchor.children('a').bind('click', function(event) {
                if ($(window).scrollTop() > 10) {
                    var headerH = '80';
                } else {
                    var headerH = '120';
                }
                var target = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
                }, 1200, 'easeInOutExpo');
                anchor.removeClass('current');
                target.parent().addClass('current');
                event.preventDefault();
            });
        }
    }
    SmoothMenuScroll();

    function OnePageMenuScroll() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            var menuAnchor = $('.one-page-scroll-menu .scrollToLink').children('a');
            menuAnchor.each(function() {
                // grabing section id dynamically
                var sections = $(this).attr('href');
                $(sections).each(function() {
                    // checking is scroll bar are in section
                    if ($(this).offset().top <= windscroll + 100) {
                        // grabing the dynamic id of section
                        var Sectionid = $(sections).attr('id');
                        // removing current class from others
                        $('.one-page-scroll-menu').find('li').removeClass('current');
                        // adding current class to related navigation
                        $('.one-page-scroll-menu').find('a[href*=\\#' + Sectionid + ']').parent().addClass('current');
                    }
                });
            });
        } else {
            $('.one-page-scroll-menu li.current').removeClass('current');
            $('.one-page-scroll-menu li:first').addClass('current');
        }
    }

    $(window).on('scroll', function() {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        };
        if ($('.stricky').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricky');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.removeClass('slideIn animated');
                stricky.addClass('stricky-fixed slideInDown animated');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed slideInDown animated');
                stricky.addClass('slideIn animated');
            }
        };
        OnePageMenuScroll();
    });

    $(window).on('load', function() {
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
        }
        thmbxSlider();
    });

// pagination
document.onreadystatechange = function(){
    if (document.readyState === "complete") {
    var model_1 = new purePajinate({ 
        containerSelector: '.model_1 .row', 
        itemSelector: '.model_1 .row > div', 
        navigationSelector: '.model_1 .blog-post-pagination',
        itemsPerPage: 3 
        })
    }
};

// Whatsapp Tenant

$(document).on('click','.send_formTenant', function(){
    /* Inputan Formulir */
    var input_name          = $("#wa_tenantName").val(),
        input_email         = $("#wa_tenantEmail").val(),
        input_phone         = $("#wa_tenantPhone").val(),
        input_gender       = $("#wa_Tenantgender :selected").text(),
        input_DOB           = $("#wa_TenantDOB").val(),
        input_address       = $("#wa_TenantAlmt").val();
 
    /* Pengaturan Whatsapp */
    var walink      = 'https://web.whatsapp.com/send',
        phone       = '628114151188',
        text        = 'Halo saya ingin mendaftar jadi Tenant ';
 
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }
 
    if(input_name != "" && input_phone != "" && input_address != ""){
        /* Whatsapp URL */
        var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
            '*Nama* : ' + input_name + '%0A' +
            '*Alamat Email* : ' + input_email + '%0A' +
            '*Nomor Kontak / Wha    tsapp* : ' + input_phone + '%0A' +
            '*Gender* : ' + input_gender + '%0A' +
            '*DOB* : ' + input_DOB + '%0A' +
            '*Alamat* : ' + input_address + '%0A';
 
        /* Whatsapp Window Open */
        window.open(checkout_whatsapp,'_blank');
        document.getElementById("text-info").innerHTML = '<div class="alert alert-success">'+text_yes+'</div>';
    } else {
        document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">'+text_no+'</div>';
    }
});

// Whatsapp Agent

$(document).on('click','.send_formAgent', function(){
    /* Inputan Formulir */
    var input_2name          = $("#wa_AgentName").val(),
        input_2email         = $("#wa_AgentEmail").val(),
        input_2phone         = $("#wa_AgentPhone").val(),
        input_2gender       = $("#PricePlan :selected").text(),
        input_2prov           = $("#wa_Prov").val(),
        input_2CAB          = $("#wa_CAB").val(),
        input_2kel          = $("#wa_Kel").val(),
        input_2kec         = $("#wa_KEC").val(),
        input_2address       = $("#wa_AgentAlmt").val();
 
    /* Pengaturan Whatsapp */
    var walink      = 'https://web.whatsapp.com/send',
        phone       = '628114151188',
        text        = 'Halo saya ingin mendaftar jadi OnePreneur ';
 
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }
 
    if(input_2name != "" && input_2phone != "" && input_2address != ""){
        /* Whatsapp URL */
        var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
            '*Investasi* : ' + input_2gender + '%0A' +
            '*Nama* : ' + input_2name + '%0A' +
            '*Alamat Email* : ' + input_2email + '%0A' +
            '*Nomor Kontak / Whatsapp* : ' + input_2phone + '%0A' +
            '*Prov* : ' + input_2prov + '%0A' +
            '*Kabupaten* : ' + input_2CAB + '%0A' +
            '*Kelurahan* : ' + input_2kel + '%0A' +
            '*Kecamatan* : ' + input_2kec + '%0A' +
            '*Alamat* : ' + input_2address + '%0A';
 
        /* Whatsapp Window Open */
        window.open(checkout_whatsapp,'_blank');
        document.getElementById("text-info").innerHTML = '<div class="alert alert-success">'+text_yes+'</div>';
    } else {
        document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">'+text_no+'</div>';
    }
});

})(jQuery);

const today = new Date();
document.getElementById("date").innerHTML = today.getFullYear();