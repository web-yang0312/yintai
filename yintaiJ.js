$(document).ready(function(){
    var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,3000);
	function move(){
		if(flag==false){
			return;
		}
		flag=false;
		next=n+1;
		if(next>=$(".banner-pic").length){
			next=0;
		}
	    $(".banner-pic").eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
			flag=true;
		})
		$(".rectangle-li").eq(n).css("background","#211616").end().eq(next).css("background","#E5004F");
		 $(".back-1").eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
			flag=true;
		})
        n=next;
	}
    $(".banner").eq(0).mouseover(function(){
		  clearInterval(t);
		  $(".banner-left").css("display","block");
		  $(".banner-right").css("display","block");
		});
	$(".banner").eq(0).mouseout(function(){
		  t=setInterval(move,3000);
		  $(".banner-left").css("display","none");
		  $(".banner-right").css("display","none");
		});
	$(".banner-left").eq(0).click(function(){
		if(flag==false){
			return;
		}
		flag=false;
		next=n-1;
	 	if(next<0){
	 		next=$(".banner-pic").length-1;
	 	}
		$(".banner-pic").eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
			flag=true;
		})
		$(".rectangle-li").eq(n).css("background","#211616").end().eq(next).css("background","#E5004F");
		 $(".back-1").eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
			flag=true;
		})
        n=next;
	})
	$(".banner-right").eq(0).click(function(){
        move();
	})
	$(".rectangle-li").click(function(){
		var index=$(this).index();
        $(".banner-pic").eq(n).animate({opacity:0},600).end().eq(index).animate({opacity:1},600,function(){
			flag=true;
		})
	    $(".rectangle-li").eq(n).css("background","#211616").end().eq(index).css("background","#E5004F");
		 $(".back-1").eq(n).animate({opacity:0},600).end().eq(index).animate({opacity:1},600,function(){
			flag=true;
		})
		 n=index;
		 next=index;
	})
	$(".select").each(function(index){
		    $(this).hover(
			  function () {
			    $(".select-lis").eq(index).css({"display":"block","background":"#fff"});
			  },
			  function () {
			    $(".select-lis").eq(index).css({"display":"none","background":""});
			  }
			);
		});
	$(".chang").each(function(index){
		    $(this).hover(
			  function () {
			    $(".banner-more").eq(index).css("display","block");
			  },
			  function () {
			    $(".banner-more").eq(index).css("display","none");
			  }
			);
		});
	$('.right-banner').hover(
		function(){
			$(this).animate({left:980},600)
		},function(){
			$(this).animate({left:1000},600)
		})
    $(".recommend-lis").mouseover(function(){
		var index=$(this).index();
        $(".recommend-pic").removeClass("recommend-first").eq(index).addClass("recommend-first");
	    $(".recommend-lis").removeClass("recommend-lis-first").eq(index).addClass("recommend-lis-first");
        $(".sanjiao1").removeClass("sanjiao5").eq(index).addClass("sanjiao5");
	})
	// function change(obj2){
 //    	    var obj2=obj2;
	// 	    var cirs=$(".cir1",obj2);
	// 	    var imgss=$(".accessories-image",obj2);
	// 	    var leftss=$(".accessories-left",obj2)[0];
	// 	    var rightss=$(".accessories-right",obj2)[0];
	// 	    var imgsss=$(".accessories-pic-middle",obj2)[0];
	// 	    var n1=0;
	// 	    var next1=0;
	// 	    var flag=true;
	// 		 for(var i=0;i<cirs.length;i++){
	// 		 	cirs[i].index=i;
	// 		 	cirs[i].onclick=function(){
	// 		 		if (this.index<n1) {
	// 		 			imgss[this.index].style.left=-"390px";
	// 				 	animate(imgss[n1],{left:390},600);
	// 				 	imgss.eq(this.index).css("left",-390).end().eq(n).animate({left:390},600).end().eq(this.index).animate({left:0},600,function(){
	// 						flag=true;
	// 					})
	// 				 }else if(this.index>n1){
	// 				 	imgss[this.index].style.left="390px";
	// 				 	animate(imgss[n1],{left:-390},600);
	// 				 }
	// 			        animate(imgss[this.index],{left:0},600);
	// 			        cirs[n1].style.background="#D2D1CF";
	// 			        cirs[this.index].style.background="#E40077";	 
	// 				    n1=this.index;
	// 		 	}
	// 		 }
	// 		 rightss.onclick=function(){
	// 		 	next1=n1-1;
	// 			if(next1<0){
	// 				next1=imgss.length-1;
	// 			}
	// 			if(flag==false){
	// 				return;
	// 			}
	// 			flag==false;
	// 			imgss[next1].style.left="390px";
	// 			animate(imgss[n1],{left:-390},600);
	// 			animate(imgss[next1],{left:0},600,function(){
	// 				flag==true;
	// 			});
	// 			imgss.eq(naxt).css("left",-390).end().eq(n).animate({left:390},600).end().eq(next).animate({left:0},600,function(){
	// 						flag=true;
	// 					})
	// 			n1=next1;
	// 		 }
	// 		 leftss.onclick=function(){
	// 		 	next1=n1+1;
	// 			if(next1>=imgss.length){
	// 				next1=0;
	// 			}
	// 			if(flag==false){
	// 				return;
	// 			}
	// 			flag==false;
	// 		 	imgss[next1].style.left="-390px";
	// 			animate(imgss[n1],{left:390},600);
	// 			animate(imgss[next1],{left:0},600,function(){
	// 				flag==true;
	// 			});
	// 			n1=next1;
	// 		 }
	// 		 imgsss.onmouseover=function(){
	// 		 	leftss.style.display="block";
	// 		 	rightss.style.display="block";
 //             }
 //              imgsss.onmouseout=function(){
	// 		 	leftss.style.display="none";
	// 		 	rightss.style.display="none";
 //             }
			 
	//     }
	// change($(".accessories").eq(0));
	// change($(".outdoor").eq(0));
	// change($(".beauty").eq(0));
	// change($(".bags").eq(0));
	// change($(".shoes").eq(0));
	// change($(".mingpin").eq(0));
	// console.log($(".mingpin")[0]);
	// change($(".mingpin")[0])
});