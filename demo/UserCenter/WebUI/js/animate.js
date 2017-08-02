$(function () {
    /*头部*/
    $(".smallscream .searchs").click(function () {
        if (!$(this).parent().hasClass("clicks")) {
            $(".smallscream .logo").hide();
            $(".smallscream .shezhi").hide();
            $(this).siblings("input").show().parent().removeClass("col-xs-2").addClass("col-xs-12 clicks");
        }
        else {
            $(".smallscream .logo").show();
            $(".smallscream .shezhi").show();
            $(this).siblings("input").hide().parent().removeClass("col-xs-12 clicks").addClass("col-xs-2");
        }
    })
    
    /*左侧菜单*/
    /*点击当前栏目，显示当前状态，其余隐藏*/
    $(".lev").click(function () {
        $(this).addClass("e").siblings("li").removeClass("e");
        $(this).parent("ul").siblings("ul").find("li").removeClass("e");
    })
    var showTime = 500;
    $(".lev_more").click(function () {
        var sc = $("#scroll");
        var hs = sc.height();
        if (sc.hasClass("ks")) {
            //console.log(hs);
            sc.stop().animate({
                height: sc.find("li").height() * sc.find("li").length
            }, function () {
                $("#scroll").mCustomScrollbar("update");
            });
            $(this).html("展开");
            sc.removeClass("ks");
        }
        else {
            sc.stop().animate({
                height: 204
            }, function () {
                $("#scroll").mCustomScrollbar("update");
            })
            $(this).html("收起");
            sc.addClass("ks");
        }
    })
    var Lefts = document.getElementById("content").offsetLeft;
    $(".left>ul").css("left", Lefts);
    $(".left>ul").width($(".left").width()+15);
    /*中间区域*/
    /*全部分类，资源，文章...处切换*/
    $(".tab_ul li").click(function () {
        $(this).addClass("all").siblings("li").removeClass("all");
    })
    /*批量管理*/
    $(".btn_first").click(function () {
        $(".btn_first").hide();
        $(".btn_link").show();
        $(".member_ul").addClass("has-choose");
        $(".member_ul li").click(function () {
            $(this).addClass("e");
        })
        $(".exit").click(function () {
            $(".btn_link").hide();
            $(".btn_first").show();
            $(".member_ul").removeClass("has-choose");
            $(".member_ul li").removeClass("e");
        })
    })
    /*新闻公告中图片收起展开左右切换处*/
    $(".img-view").each(function () {
        var ths = $(this);
        var closed = ths.find(".closed");
        var img = ths.find(".img");
        img.click(function () {
            ths.addClass("bgray");
            img.addClass("hide");
            ths.find(".rslides-box").removeClass("hide");
            $('.ad-gallery').adGallery({
                width: 380,
                slideshow: {
                    autostart: false
                }
            });
            var wl = $(".ad-image").height();
            console.log(wl);
        })
        closed.click(function () {
            ths.removeClass("bgray")
            ths.find(".rslides-box").addClass("hide");
            img.removeClass("hide");
        });
    }) 

    /*右边区域*/
    /*在小分辨率下点击红色箭头展开收缩右边浮层*/
    var flo = true;
    $("#slideHand").click(function () {
        if (flo) {
            $("#right").stop().animate({
                "right":"0"
            }, 200);
            $("#slideHand").stop().animate({
                 right: 292
            })
            flo = false;
            $("#slideHand i").eq(0).hide();
            $("#slideHand i").eq(1).show();
        } else {
            $("#right").stop().animate({
                "right": "-292px"
            });
            $("#slideHand").stop().animate({
                right: 0
            },200)
            flo = true;
            $("#slideHand i").eq(0).show();
            $("#slideHand i").eq(1).hide();
        }
    });
    $("#content").css("min-height",$(window).height())
})

window.onresize = function () {
    var Lefts = document.getElementById("content").offsetLeft;
    $(".left>ul").css("left", Lefts);
    $(".left>ul").width($(".left").width() + 15);
}