/*global $, console */

$(function () {
    "use strict";
    var winHeight = $(window).innerHeight(),
        headHeight = $(".head-sections").innerHeight(),
        headCartHeight = $(".end-pay .head").innerHeight(),
        mobNav = $(".list-navs ").innerHeight(),
        btnCartHeight = $(".cart-content-body .buts").innerHeight();
    $(".cart-content-body").css("top", headHeight);
    $(".cart-content-body").css("height", winHeight - headHeight);
    $(".content-items").css("top", headHeight);
    $(".end-pay .items").css("paddingBottom", btnCartHeight);
    $("body").css("paddingTop", headHeight);
    $("body").css("paddingBottom", mobNav);
    $(".end-pay .items").css(
        "height",
        winHeight - (headCartHeight + headHeight)
    );
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (this.innerWidth < 992) {
          console.log(headHeight);
          
            $(".end-pay .items").css(
                "height",
                winHeight - (headCartHeight + headHeight + mobNav)
            );
            if (scroll > 1) {
                $("body").css("paddingTop", 0);
                $(".upper-nav .logo img").slideUp();
                $("nav .control i").css("top", headHeight / 8);
                $(".cart-content-body").css("top", 110);
                $(".content-items").css("top", 110);
                $(".cart-content-body").css("height", winHeight - headHeight);
                $(".cart-content-body").css("height", winHeight - headHeight);
                $(".items-content-body").css("paddingTop", headHeight);
            } else {
                $(".upper-nav .logo img").slideDown();
                $("nav .control i").css("top", headHeight / 2);
                $(".cart-content-body").css("top", 195);
                $(".content-items").css("top", 195);
            }
        }
    });

    // Open cart
    $("nav .control .cart").click(function () {
        $(".cart-content-body").slideToggle();
        $(".content-items").hide();
    });

    $(" .list-nav .cart").click(function () {
        $(".cart-content-body").slideToggle();
    });

    // Open list
    $("nav .control .bar, .list-navs .bull").click(function (e) {
        e.preventDefault();
        $(".content-items").slideToggle();
        $(".cart-content-body").hide();
    });

    // Open list
    $(".list-nav .list-items-nav").click(function () {
        $(".content-items").slideToggle();
    });

    //Open Popup
    $("nav .user").click(function () {
        $(".pernt-pop").fadeIn();
    });

    // Toggel Add To count
    $(".overlay .count a").click(function (e) {
        e.preventDefault();
        $(this).parent().parent(".box-add").siblings(".box-count").fadeIn();
        $(this).parent().parent(".box-add").fadeOut();
    });

    // Popup Control
    $(".content-pop .link-form ").click(function (e) {
        e.preventDefault();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".content-pop .title-log .title").text($(this).text());
        if ($(this).hasClass("log")) {
            $(".log").addClass("show");
            $(".log").siblings().removeClass("show");
        }
        if ($(this).hasClass("new")) {
            $(".new").addClass("show");
            $(".new").siblings().removeClass("show");
        }
    });

    // Close Popup
    $(".popUp .fa-times").click(function () {
        $(".pernt-pop").fadeOut();
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $(".pernt-pop").fadeOut();
        }
    });

    $('.plus-conut').click(function(e) {
        e.preventDefault();
        this.nextSibling.nextSibling.textContent = parseInt(this.nextSibling.nextSibling.textContent) + 1
        console.log(this.nextSibling.nextSibling.textContent)
    })
     $('.minus-conut').click(function(e) {
        e.preventDefault();
         if (this.previousSibling.previousSibling.textContent > 0) {
            this.previousSibling.previousSibling.textContent = parseInt(this.previousSibling.previousSibling.textContent) - 1
        }
    })
});
