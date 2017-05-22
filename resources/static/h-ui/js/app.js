var endCurrPage = false;
//后续页面移动完毕
var endNextPage = false;


var animEndEventNames = {
		'WebkitAnimation' : 'webkitAnimationEnd',
		'OAnimation' : 'oAnimationEnd',
		'msAnimation' : 'MSAnimationEnd',
		'animation' : 'animationend'
	},
// animation end event name
animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ]

$(function(){
	bgimg();
	setInterval("Times()",1000);
	$(".pt-page").each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );
	$(".pt-page").eq(0).addClass( 'pt-page-current' );
	var artnumber = $("#v1").children(".art-info-box").length;
	$("#viewsWrapper").css({"height":(artnumber*200)+"px"});
	$(".article-list-body").css({"height":((artnumber*200)+110)+"px"});
	$(".btn-down").off().on("click",function(){
		$mc.scrollbottom();
	});
	var $container = $('#masonry');
    $container.imagesLoaded(function() {
        $container.masonry({
                itemSelector: '.box-w',
                gutter: 20,
                isAnimated: true,
            });
     });
     $mc.boxHover();
})
function bgimg(){
	var h = document.documentElement.clientHeight;
	$(".banner-box").slide({
		mainCell:".bd ul",
		interTime:10000,
		delayTime:500,
		autoPlay:true,
		mouseOverStop:false
	})
	$(".banner-box>.bd,.banner-box>.bd>ul,.banner-box>.bd>ul>li,.banner-box>.bd>ul>li>img").css({"width":"100%","height":(h-20)+"px"});
    $(".content-body").css({"top":(h-200)+"px"});
    $(".content-box").css({"margin-top":"80px"});
    $mc.hoverTitle();
    $mc.hoverArtTitle();
}

var $mc ={
	hoverTitle:function(){
		$(".article-list-box>.title>ul>li").hover(function(){
			$(this).find("a").animate({
				width:"100%",
				marginLeft:"0%"
			},200)
		},function(){
			$(this).find("a").animate({
				width:"0%",
				marginLeft:"50%"
			},200)
		}).click(function(){
			var page = $(this).data("page");
			changeView(page);
		})
	},
	hoverArtTitle:function(){
		$(".art-info-box>.title").hover(function(){
			$(this).find("a").animate({
				width:"100%"
			},200)
		},function(){
			$(this).find("a").animate({
				width:"0%"
			},200)
		})
	},
	scrollbottom:function(){
		
        $("html,body").animate({scrollTop:$(document).height()},30000);
        $("html,body").click(function(){
        	 $("html,body").shop(true);
        });
	},
	boxHover:function(){
		$(".box-w").hover(function(){
			 var obj = $(this);
			 var h = obj.height();
			 var w = obj.width();
			 obj.find(".sub-box-w").css({"width":"100%"}).animate({
                  height:h+"px"
			 })
		},function(){
			 var obj = $(this);
			 obj.find(".sub-box-w").animate({
                  height:"0px"
			 })
		})
	}
}
function Times(){
	 var t1 = new Date("2017-05-01 11:00:00");
	 var t2 = new Date();
	 var interval = (t2.getTime()- t1.getTime())/1000;
	 
	 var day_1 = interval/(60*60*24);
	 var day = Math.floor(day_1);
	 var day_2 = day_1-day;
	 
	 var hour_1 = day_2*24;
	 var hour = Math.floor(hour_1);
	 var hour_2 = hour_1 - hour;
	 
	 var minute_1 = hour_2 * 60;
	 var minute = Math.floor(minute_1);
	 var minute_2 = minute_1 - minute;
	 
	 var second_1 = minute_2*60;
	 var second = Math.floor(second_1);
	 
	 $(".days").html(day+"天 "+setstr(hour)+"时 "+setstr(minute)+"分 "+setstr(second)+"秒");
	 
	 function setstr(str){
	 	if(str>9) return str;
	 	else return "0"+str;
	 }
}
