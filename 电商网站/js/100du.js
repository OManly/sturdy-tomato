/**
 * Created by 包租婆 on 2016/4/4.
 */

$(function () {
    //搜索切换
    (function () {
        var aLi=$("#menu li");
        var oTxet=$("#search").find(".form").find(".text");
        var iNow=0;
        var arrText = [
            '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
            '例如：万达影院双人情侣券',
            '例如：东莞出事了，大老虎是谁？',
            '例如：北京初春降雪，天气变幻莫测'
        ];

        oTxet.val(arrText[iNow]);
       aLi.each(function (index) {
           $(this).click(function () {
               iNow=index;
                aLi.attr("class","gradient");
                $(this).attr("class","active");
                oTxet.val(arrText[iNow]);
           })
       })
        oTxet.focus(function () {
            if(oTxet.val()==arrText[iNow])
            {
                $(this).val("")
            }
        })
        oTxet.blur(function () {
            if(oTxet.val()=="")
            {
                $(this).val(arrText[iNow])
            }
        })
    })();//搜索切换结束
    //update文字滚动
    (function () {
        var arrData=[
            { 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
            { 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
        ];

        var oDiv=$(".update")
        var oUl=oDiv.find("ul");
        var iH=0;
        var str="";
        var oBtnUp=$("#updateUpBtn");
        var oBtnDown=$("#updateDownBtn");
        var iNow=0;
        var timer=null;

        for(var i=0;i<arrData.length;i++)
        {
            str+="<li><a href='"+arrData[i].url+"'><strong>"+arrData[i].name+"</strong> <span>"+arrData[i].time+"</span>"+arrData[i].title+"</a></li>";
            //console.log(str)
        }
        oUl.html(str);

        iH=oUl.find("li").height();
        oBtnUp.click(
            function () {
                clearInterval(timer);
                doMove(-1)
            }
        )
        oBtnDown.click(function () {
            clearInterval(timer);
            doMove(1)
        })

        oDiv.hover(function () {
            clearInterval(timer)
        }, function () {
            autoPlay();
        })

        function autoPlay() {
            timer=setInterval(function () {
                doMove(-1);
            },2000)
        }
        autoPlay();
        //console.log(iH)
        function doMove(num) {
            iNow+=num;
            if(Math.abs(iNow)>arrData.length-1)
            {
             iNow=0;
            }
            if(iNow>0)
            {
                iNow=-(arrData.length-1);
            }
            oUl.stop().animate({"top":iH*iNow},3000,"elasticOut");
        }

    })();//update文字滚动结束
    //options选项卡切换
    (function () {
        fnTab($(".tabNav1"),$(".tabCon1"))
        fnTab($(".tabNav2"),$(".tabCon2"))
        fnTab($(".tabNav3"),$(".tabCon3"))
        fnTab($(".tabNav4"),$(".tabCon4"))
        function fnTab(oNav,aCon) {
            var aElem=oNav.children();
            aCon.hide().eq(0).show();
            aElem.each(function (index) {
                $(this).click(function () {
                    aElem.removeClass("active").addClass("gradient");
                    $(this).removeClass("gradient").addClass("active");
                    aElem.find("a").attr("class","triangle-down-gray");
                    $(this).find("a").attr("class","triangle-down-red");

                    aCon.hide().eq(index).show();
                })
            })
        }
    })();//选项卡切换结束
    //焦点图切换
    (function () {
        var oDiv=$("#fade");
        var aUlLi=oDiv.find("ul li");
        var aOlLi=oDiv.find("ol li");
        var oP=oDiv.find("p");
        var arr=['爸爸去哪了','人像摄影中的光杆','美艳大方'];
        var iNow=0;
        var timer=null;

        fnFade();

        aOlLi.click(function () {
            iNow=$(this).index();
            fnFade();
        })
        oDiv.hover(function () {
            clearInterval(timer)
        }, function () {
            autoPlay();
        })

        function autoPlay() {
            clearInterval(timer);
            timer=setInterval(function () {
                iNow++;
                iNow%=arr.length;
                fnFade()
            },1000)
        }
        autoPlay();

        function fnFade() {
            aUlLi.each(function (i) {
                if(i!=iNow)
                {
                    aUlLi.eq(i).fadeOut().css("zIndex",1);
                    aOlLi.eq(i).removeClass("active");
                }
                else
                {
                    aUlLi.eq(i).fadeIn().css("zIndex",2);
                    aOlLi.eq(i).addClass("active");
                }
            })
            oP.text(arr[iNow]);
        }
    })();//焦点图切换结束
    //日历提示
    (function () {
        var aSpan=$(".calendar h3 span");
        var aImg=$(".calendar .img");
        var oPrompt=$(".today-info");
        var oImg=oPrompt.find("img");
        var oStrong=oPrompt.find("strong");
        var oP=oPrompt.find("p");

        aImg.hover(function () {
            var iTop=$(this).parent().position().top-30;
            var iLeft=$(this).parent().position().left+55;

            oPrompt.show().css({"left":iLeft,"top":iTop});
            oP.text($(this).attr("info"));
            oImg.attr("src",$(this).attr("src"));
            oStrong.text(aSpan.eq($(this).parent().index()%aSpan.size()).text())

        }, function () {
            oPrompt.hide();
        })

    })();//日历提示结束
    //bbs论坛高亮
    (function () {
        $(".bbs ol li").mouseover(function () {
            $(".bbs ol li").removeClass("active").eq($(this).index()).addClass("active")
        })
    })();//bbs论坛高亮结束
    //HOT鼠标提示效果
    (function () {

        var arr = [
            '',
            '用户1<br />人气1',
            '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
            '用户3<br />人气3',
            '用户4<br />人气4',
            '用户5<br />人气5',
            '用户6<br />人气6',
            '用户7<br />人气7',
            '用户8<br />人气8',
            '用户9<br />人气9',
            '用户10<br />人气10'
        ];

        $(".hot-area li").hover(function () {

            if($(this).index()==0)
            {
                return
            }

            $(".hot-area li p").remove();
            $(this).append("<p style='width:"+($(this).width()-12)+"px;height:"+($(this).height()-12)+"px'>"+arr[$(this).index()]+"</p>")
        }, function () {
            $(".hot-area li p").remove();
        })
    })();//HOT鼠标提示效果
     


})//$()结束



/*

$(function(){
    //搜索切换
    (function(){
        var aLi=$("#menu li");
        var oText=$("#search").find('.form .text');
        var arrText = [
            '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
            '例如：万达影院双人情侣券',
            '例如：东莞出事了，大老虎是谁？',
            '例如：北京初春降雪，天气变幻莫测'
        ];
        var  iNow=0;

        oText.val(arrText[iNow]);
        aLi.each(function(index){
            $(this).click(function(){
                //console.log(index);
                aLi.attr('class','gradient');
                $(this).attr('class','active');

                iNow=index;

                oText.val(arrText[iNow]);

            })
        })

        oText.focus(function(){
            if($(this).val()==arrText[iNow]){
                $(this).val('');
            }
        })
        oText.blur(function(){
            if($(this).val()==''){
                oText.val(arrText[iNow]);
            }
        })
    })();
    //文字滚动
    (function(){
        var oDiv=$('.update');
        var oUl=oDiv.find('ul');

        var arrData=[
            { 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
            { 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
        ];
        //console.log(iH);
        var str='';
        var oBtnUp=$('#updateUpBtn');
        var oBtnDown=$('#updateDownBtn');
        var iNow=0;
        var timer=null;

        for(var i=0;i<arrData.length;i++){
            str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong> <span>'+arrData[i].time+'分钟前</span> 写了一篇新文章：'+arrData[i].title+'…</a></li>';
        }
        //console.log(str);
        oUl.html(str);
        var iH=oUl.find('li').height();

        oBtnUp.click(function(){
            doMove(-1);
        })
        oBtnDown.click(function(){
            doMove(1);
        })

        oDiv.hover(function(){
            clearInterval(timer);
        },autoPlay);


        function autoPlay(){
            timer=setInterval(function(){
                doMove(-1);
            },2500);
        }
        autoPlay();
        function doMove(num){
            iNow+=num;
            if(Math.abs(iNow)>arrData.length-1){
                iNow=0;
            }
            if(iNow>0){
                iNow=-(arrData.length-1);
            }
            oUl.stop().animate({'top':iH*iNow},2000,'elasticOut')
        }
    })();
    //选项卡替换
    (function(){
        fnTab($('.tabNav1'),$('.tabCon1'));
        fnTab($('.tabNav2'),$('.tabCon2'));
        fnTab($('.tabNav3'),$('.tabCon3'));
        fnTab($('.tabNav4'),$('.tabCon4'));

        function fnTab(oNav,aCon){
            var aElem=oNav.children();
            aCon.hide().eq(0).show();
            aElem.each(function(index){
                $(this).click(function(){
                    aElem.removeClass('active').addClass('gradient');
                    $(this).removeClass('gradient').addClass('active');
                    aElem.find('a').attr('class','triangle-down-gray');
                    $(this).find('a').attr('class','triangle-down-red');

                    aCon.hide().eq(index).show();
                })
            })
        }
    })();
    //自动播放焦点图
    (function(){
        var oDiv=$('#fade');
        var aUlLi=oDiv.find('ul li');
        var aOlLi=oDiv.find('ol li');
        var  oP=oDiv.find('p');
        var arr=['爸爸去哪了','人像摄影中的光杆','美艳大方'];
        var iNow=0;
        var timer=null;

        fnFade();

        aOlLi.click(function(){
            iNow=$(this).index();
            fnFade();
        })

        oDiv.hover(function(){
            clearInterval(timer);
        },autoPlay);
        function autoPlay(){
            timer=setInterval(function(){
                iNow++;
                iNow%=arr.length;
                fnFade();
            },1000)
        }
        autoPlay();

        function fnFade(){
            aUlLi.each(function(i){
                if(i!=iNow){
                    aUlLi.eq(i).fadeOut().css('zIndex',1);
                    aOlLi.eq(i).removeClass('active');
                }else {
                    aUlLi.eq(i).fadeIn().css('zIndex',2);
                    aOlLi.eq(i).addClass('active');
                }
            })
            oP.text(arr[iNow]);
        }
    })();
    //日历提示
    (function(){
        var aSpan=$('.calendar h3 span');
        var aImg=$('.calendar .img');
        var oPrompt=$('.today-info');
        var oImg=oPrompt.find('img');
        var oStrong=oPrompt.find('strong');
        var oP=oPrompt.find('p');

        aImg.hover(function(){
            var iTop=$(this).parent().position().top-30;
            var iLeft=$(this).parent().position().left+55;
            var index=$(this).parent().index()%aSpan.size();

            oPrompt.show().css({'left':iLeft,'top':iTop});
            oP.text($(this).attr('info'));
            oImg.attr('src',$(this).attr('src'));
            oStrong.text(aSpan.eq(index).text());

        },function(){
            oPrompt.hide();
        })
    })();
    //高亮显示
    (function(){
        $('.bbs ol li').mouseover(function(){
            $('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active')
        })
    })();
    //HOT鼠标提示
    (function(){
        var arr = [
            '',
            '用户1<br />人气1',
            '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
            '用户3<br />人气3',
            '用户4<br />人气4',
            '用户5<br />人气5',
            '用户6<br />人气6',
            '用户7<br />人气7',
            '用户8<br />人气8',
            '用户9<br />人气9',
            '用户10<br />人气10'
        ];
        $(".hot-area li").mouseover(function(){

            if($(this).index()==0) return;

            $(".hot-area li p").remove();

            $('this').width()

            $(this).append('<p style="width:'+($(this).width()-12)+'px;height:'+($(this).height()-12)+'px;">'+arr[$(this).index()]+'</p>');
        })
    })()

});
*/
