$(function(){
    $("#topNav > ul").children().eq(0).addClass("current");
    $("#topNav > ul").on("mouseenter","li",function(){
        $(this).addClass("current").siblings().removeClass("current");
    });
    $("#topNav > ul").mouseleave(function(){
        $(this).children("li:eq(0)").addClass("current").siblings().removeClass("current");
        //$(this).children().removeClass();
    });
});
