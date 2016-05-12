/**
 * Created by neild on 2016/1/12.
 */
$(function () {
    $(".top-search").find("input").focus(function () {
        $(this).animate({width:"160px"}).val("").css("color","black");
    })
    $(".top-search").find("input").blur(function () {
        $(this).animate({width:"60px"}).val("Search").css("color","");
    })

    $(".main-bottom-li").mouseover(function () {
        $(this).find("img")
            .stop(true,false)
            .animate({opacity:1,width:"360px","margin-left":"-10px"},"fast")
            .siblings(".bg-font-bottom")
            .stop(true,false)
            .animate({bottom:0},"fast")
            .siblings(".text1")
            .stop(true,false)
            .animate({top:"-40px"},"fast")
            .siblings(".text2")
            .stop(true,false)
            .animate({top:"-80px"},"fast")
    });
    $(".main-bottom-li").mouseleave(function () {
        $(this).find("img")
            .stop(true,false)
            .animate({opacity:0.6,width:"340px","margin-left":"0"},"fast")
            .siblings(".bg-font-bottom")
            .stop(true,false)
            .animate({bottom:"-120px"},"fast")
            .siblings(".text1")
            .stop(true,false)
            .animate({top:0},"fast")
            .siblings(".text2")
            .stop(true,false)
            .animate({top:"-150px"},"fast")
    });

    $(".main-bottom-container").on("click", ".change",function () {
        if($(this).siblings(".current").next().length!=0){
            $(this).siblings(".current")
                .stop()
                .hide()
                .removeClass("current")
                .next()
                .stop()
                .fadeIn(800)
                .addClass("current");
        }else{
            console.log($(".main-bottom-container").children("ul"))
            $(".main-bottom-container")
                .children("ul:last")
                .stop()
                .hide()
                .removeClass("current")
                .end()
                .children("ul:eq(0)")
                .stop()
                .fadeIn(800)
                .addClass("current")
        }
    })

})