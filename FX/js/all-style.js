$(document).ready(function () {

    $(".faqorder").show();
    $(".faqpayment").hide();

    // For Mobile Menu
    $("#mobilemenu").click(function () {
        $("header .custnav ul.menus").slideToggle();
    });

    function nav() {
        if ($(window).width() > 1199) {
            $("header .custnav ul.menus").css({
                "display": "block"
            });
        } else {
            $("header .custnav ul.menus").css({
                "display": "none"
            });
        }
    }
    $(window).resize(function () {
        setTimeout(function () {
            nav();
        }, 0);
    });

    $(".openmodel-register").click(function () {
        $("body").toggleClass("modal-open2");
    });
    $("#Modal-signup .close").click(function () {
        $("body").removeClass("modal-open2");
    });

    $(".paymentstep .pickdelivery .deliveryinfo .info h3").click(function () {
        $(".paymentstep .pickdelivery .deliveryinfo .details").toggle();
    });

    $(".orderstep .myorder .summary .subtitle").click(function () {
        $(".orderstep .myorder .summaryinner").toggle();
    });
    $(".nextbtn").click(function () {
        $(".orderconts .orderstep .custtab > li").removeClass("active");
        $(".orderconts .orderstep .custtab > li:nth-child(2)").addClass("active");
        $(".faqorder").hide();
        $(".faqpayment").show();
    });
    $(".prvsbtn").click(function () {
        $(".orderconts .orderstep .custtab > li").removeClass("active");
        $(".orderconts .orderstep .custtab > li:nth-child(1)").addClass("active");
        $(".faqorder").show();
        $(".faqpayment").hide();
    });
    $(".paymentstep .rbttn").click(function () {
        $(".orderconts .orderstep .custtab > li").removeClass("active");
        $(".orderconts .orderstep .custtab > li:nth-child(3)").addClass("active");
    });
    $(".declare").click(function () {
        $(".reviewdrop").toggle();
    });
    $('.faqs .question .title').click(function () {
        var trig = $(this);
        if (trig.hasClass('title_active')) {
            trig.next('.faqdesc').slideToggle('slow');
            trig.removeClass('title_active');
        } else {
            $('.title_active').next('.faqdesc').slideToggle('slow');
            $('.title_active').removeClass('title_active');
            trig.next('.faqdesc').slideToggle('slow');
            trig.addClass('title_active');
        }
        ;
        return false;
    });
});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctione() {
    document.getElementById("myDropdowne").classList.toggle("show");
}
function myFunctione1() {
    document.getElementById("myDropdowne1").classList.toggle("show");
}
function curFunction() {
    document.getElementById("curDropdown").classList.toggle("show");
}
/*
 $(document).ready(function(){
 $(window).on("load scroll resize", function(){
 $('.bounce-InLeft').scrollzip({showFunction:function() { $(this).addClass('animated bounceInLeft'); }});
 $('.bounce-InDown').scrollzip({showFunction:function() { $(this).addClass('animated bounceInDown'); }});
 $('.bounce-InUp').scrollzip({showFunction:function() { $(this).addClass('animated bounceInUp'); }});
 $('.bounce-InRight').scrollzip({showFunction:function() { $(this).addClass('animated bounceInRight'); }});
 $('.zoom-in').scrollzip({showFunction:function() { $(this).addClass('animated zoomIn'); }});
 $('.zoom-InDown').scrollzip({showFunction:function() { $(this).addClass('animated zoomInDown'); }});
 $('.fade-In').scrollzip({showFunction:function() { $(this).addClass('animated fadeIn'); }});
 $('.fade-InDown').scrollzip({showFunction:function() { $(this).addClass('animated fadeInDown'); }});
 $('.fade-InUp').scrollzip({showFunction:function() { $(this).addClass('animated fadeInUp'); }});  
 $('.fade-InRight').scrollzip({showFunction:function() { $(this).addClass('animated fadeInRight'); }});  
 });
 });
 */