/**
 * Created by HJ on 2016/1/12.
 */
$(document).ready(function () {
    //console.log($(".main-middle-top-C li a"))
    //$(".main-middle-top-C li a").mouseleave(function(){
    //    console.log($(this).index())
    //})


    //$(".main-middle-lined").mouseenter(function () {
    //    var lineX = $(this).position().left;
    //    var lineW = $(this).width();
    //    $(".main-middle-line").stop().animate({"left": lineX, "width": lineW})
    //})

    //绑定index   原因：上面的 不知为啥$(this).index()  获取不到  获取值都是0
    var lineB = document.getElementsByClassName("main-middle-lined");
    for (var i = 0; i < lineB.length; i++) {
        lineB[i].index = i;
        $(lineB[i]).mouseenter(function () {
            var lineX = $(this).position().left;
            var lineW = $(this).width();
            $(".main-middle-line").stop().animate({"left": lineX, "width": lineW})
            var index = $(this)[0].index;
            $(".main-middle-bottom ul").css("display", "none").eq(index).css("display", "block")
        })
    }

    //配件
    $(".main-middle-bottom1 li:lt(3)").mouseenter(function () {
        var imgH = $(this).children().height()
        var This = $(this);
        clearTimeout(This[0].timer)
        This[0].timer = setTimeout(function () {
            This.stop().animate({"height": imgH}, function () {
                //This.css("overflow", "hidden")
            }).css("zIndex", 15)
        }, 400)
    })
    $(".main-middle-bottom1 li:lt(3)").mouseleave(function () {
        var This = $(this);
        clearTimeout(This[0].timer)
        This.stop().animate({"height": 275}, function () {
            This.css("overflow", "hidden")
        })
        This[0].timer = setTimeout(function () {
            This.css("zIndex", 1)
        }, 400)
    })
    $(".main-middle-bottom1 li:gt(2)").mouseenter(function () {
        var imgH = $(this).children().height()
        var This = $(this);
        clearTimeout(This[0].timer)
        This[0].timer = setTimeout(function () {
            This.stop().animate({"height": imgH, "top": 550 - imgH}, function () {
                This.css("overflow", "hidden")
            }).css("zIndex", 15)
        }, 400)
    })
    $(".main-middle-bottom1 li:gt(2)").mouseleave(function () {
        var This = $(this);
        clearTimeout(This[0].timer)
        This.stop().animate({"height": 275, "top": 275}, function () {
            This.css("overflow", "hidden")
        })
        This[0].timer = setTimeout(function () {
            This.css("zIndex", 1)
        }, 400)
    })
});