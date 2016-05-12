$(function () {
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }

    function animate(obj, attrs, liIndex) {
        $(obj).children().eq(liIndex).addClass("current").siblings().removeClass("current");
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var attr in attrs) {
                var target = attrs[attr];
                var leader = parseInt(getStyle(obj, attr));
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[attr] = leader + "px";
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
            }
        }, 5);
    }

    var ul = document.getElementById("fullpage");
    var circle = document.getElementById("circle");
    var ulLis = ul.children;
    var imgWidth = ulLis[0].offsetWidth;
    var circleLis = circle.children;
    circleLis[0].className = "current";
    $(ul).children().eq(0).addClass("current");

    for (var i = 0; i < circleLis.length; i++) {
        circleLis[i].index = i;
        circleLis[i].index = i;
        circleLis[i].onmouseover = function () {
            for (var j = 0; j < circleLis.length; j++) {
                circleLis[j].className = "";
            }
            this.className = "current";
            var leftSize = -this.index * imgWidth;
            var attrs = {
                "left": leftSize
            };
            animate(ul, attrs, this.index);
            pic = this.index;
            square = this.index;
        }
    }
    ul.appendChild(ulLis[0].cloneNode(true));
    var timer = null;
    timer = setInterval(autoplay, 3000);
    var pic = 0;
    var square = 0;

    function autoplay() {
        pic++;
        if (pic > ulLis.length - 1) {
            pic = 1;
            ul.style.left = 0;
        }
        var leftSize = -pic * imgWidth;
        var attrs = {
            "left": leftSize
        };
        animate(ul, attrs, pic);

        square++;
        if (square > circleLis.length - 1) {
            square = 0;
        }
        for (var i = 0; i < circleLis.length; i++) {
            circleLis[i].className = "";
        }
        circleLis[square].className = "current";
    }

    ul.onmouseover = function () {
        clearInterval(timer);
    }
    circle.onmouseover = function () {
        clearInterval(timer);
    }
    ul.onmouseout = function () {
        timer = setInterval(autoplay, 3000);
    }
});
