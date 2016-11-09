$(function(){
	var banner=$(".banner")[0];
	var imgs=$(".banner-pic");
	var back=$(".back-1");
	var left=$(".banner-left")[0];
	var right=$(".banner-right")[0];
	var rec=$(".rectangle-li");
	var rightbanner=$(".right-banner")[0];
	var t=setInterval(move,3000);
	var n=0;
	var next=0;
	var flag=true;
	function move(){
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		    animate(imgs[n],{opacity:0},600);
            rec[n].style.background="#211616";
			animate(back[n],{opacity:0},600);
		  animate(imgs[next],{opacity:1},600);
		  rec[next].style.background="#E5004F";
		  animate(back[next],{opacity:1},600);
		 n=next;
	}
	banner.onmouseover=function(){
		clearInterval(t)
		left.style.display="block";
		right.style.display="block";
	}
	banner.onmouseout=function(){
		t=setInterval(move,3000);
		left.style.display="none";
		right.style.display="none";
	}
	rightbanner.onmouseover=function(){
		animate(rightbanner,{left:980},1000)
	}
	rightbanner.onmouseout=function(){
		animate(rightbanner,{left:1000},1000)
	}
	left.onclick=function(){
		next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		if(flag==false){
		return;
		}
		flag==false;
		    animate(imgs[n],{opacity:0},600);
            rec[n].style.background="#211616";
			animate(back[n],{opacity:0},600);
		  animate(imgs[next],{opacity:1},600);
		  rec[next].style.background="#E5004F";
		  animate(back[next],{opacity:1},600,function(){
		  	flag==true;
		  });
		 n=next;
	}
	right.onclick=function(){
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		if(flag==false){
		return;
		}
		flag==false;
		    animate(imgs[n],{opacity:0},600);
            rec[n].style.background="#211616";
			animate(back[n],{opacity:0},600);
		  animate(imgs[next],{opacity:1},600);
		  rec[next].style.background="#E5004F";
		  animate(back[next],{opacity:1},600,function(){
		  	flag==true;
		  });
		 n=next;
	}
	for(var i=0;i<rec.length;i++){
				rec[i].onclick=function(){
			for(var i=0;i<rec.length;i++){
			    rec[i].index=i;
				animate(imgs[i],{opacity:0},600);
	            rec[i].style.background="#211616";
				animate(back[i],{opacity:0},600);
			}
			  animate(imgs[this.index],{opacity:1},600);
			  rec[this.index].style.background="#E5004F";
			  animate(back[this.index],{opacity:1},600);
		}
	}
	 	var select=$(".select");
	for(var i=0;i<select.length;i++){
		hover(select[i],function(){
			var selectLis=$(".select-lis",this);
			for(var i=0;i<selectLis.length;i++){
				selectLis[i].style.display="block";
			}
		},function(){
			var selectLis=$(".select-lis",this);
			for(var i=0;i<selectLis.length;i++){
				selectLis[i].style.display="none";
			}
		})
	}
	var lefts=$(".chang");
	var rights=$(".banner-more");
	for(var i=0;i<lefts.length;i++){
		lefts[i].index=i;
		hover(lefts[i],function(){
			that=this;
			for(var i=0;i<rights.length;i++){
				rights[that.index].style.display="block";
			}
		},function(){
			that=this;
			for(var i=0;i<rights.length;i++){
				rights[that.index].style.display="none";
			}
		})
		that=this;
		hover(rights[i],function(){
			for(var i=0;i<rights.length;i++){
				rights[that.index].style.display="block";
			}
		},function(){
			for(var i=0;i<rights.length;i++){
				rights[that.index].style.display="none";
			}
		})
	}
	    
	    function change(obj2){
    	    var obj2=obj2;
		    var cirs=$(".cir1",obj2);
		    var imgss=$(".accessories-image",obj2);
		    var leftss=$(".accessories-left",obj2)[0];
		    var rightss=$(".accessories-right",obj2)[0];
		    var imgsss=$(".accessories-pic-middle",obj2)[0];
		    var n1=0;
		    var next1=0;
		    var flag=true;
			 for(var i=0;i<cirs.length;i++){
			 	cirs[i].index=i;
			 	cirs[i].onclick=function(){
			 		if (this.index<n1) {
			 			imgss[this.index].style.left=-"390px";
					 	animate(imgss[n1],{left:390},600);
					 }else if(this.index>n1){
					 	imgss[this.index].style.left="390px";
					 	animate(imgss[n1],{left:-390},600);
					 }
				        animate(imgss[this.index],{left:0},600);
				        cirs[n1].style.background="#D2D1CF";
				        cirs[this.index].style.background="#E40077";	 
					    n1=this.index;
			 	}
			 }
			 rightss.onclick=function(){
			 	next1=n1-1;
				if(next1<0){
					next1=imgss.length-1;
				}
				if(flag==false){
					return;
				}
				flag==false;
				cirs[n1].style.background="#D2D1CF";
				 cirs[next1].style.background="#E40077";
				imgss[next1].style.left="390px";
				animate(imgss[n1],{left:-390},600);
				animate(imgss[next1],{left:0},600,function(){
					flag==true;
				});
				n1=next1;
			 }
			 leftss.onclick=function(){
			 	next1=n1+1;
				if(next1>=imgss.length){
					next1=0;
				}
				if(flag==false){
					return;
				}
				flag==false;
				cirs[n1].style.background="#D2D1CF";
				 cirs[next1].style.background="#E40077";
			 	imgss[next1].style.left="-390px";
				animate(imgss[n1],{left:390},600);
				animate(imgss[next1],{left:0},600,function(){
					flag==true;
				});
				n1=next1;
			 }
			 imgsss.onmouseover=function(){
			 	leftss.style.display="block";
			 	rightss.style.display="block";
             }
              imgsss.onmouseout=function(){
			 	leftss.style.display="none";
			 	rightss.style.display="none";
             }
			 
	    }
	   
	change($(".accessories")[0]);
	change($(".outdoor")[0]);
	change($(".beauty")[0]);
	change($(".bags")[0]);
	change($(".shoes")[0]);
	change($(".mingpin")[0]);
// }	
// 左下面轮播
    function leftTurn(obj){
    	var turn=obj;
       	var floor_Nav=$(".floor-nav-left",turn);
	 	var left2=$(".floor-nav-anLeft",turn)[0];
	 	var right2=$(".floor-nav-anRight",turn)[0];
	  	var next2=0;
	 	var n2=0;
	 	var flag=true;
	 	left2.onclick=function(){
			 	if(flag=false){
	                return;
			 	}
			 	flag=false;
			 	next2=n2-1;			 		
		 		if(next2<0){
		 		next2=floor_Nav.length-1;
		 	    }
		 		floor_Nav[next2].style.left=-200+"px";
			 	animate(floor_Nav[n2],{left:200},600);
		        animate(floor_Nav[next2],{left:16},600,function(){
		        	flag=true;
		        });
			 	n2=next2; 	
		}
		right2.onclick=function(){
		 	if(flag=false){
		 		return;
		 	}
		 	flag=false;
		 	next2=n2+1;
		 	if(next2>=floor_Nav.length){
		 		next2=0;
		 	}	
		 		floor_Nav[next2].style.left=200+"px";
			 	animate(floor_Nav[n2],{left:-200},600);
		        animate(floor_Nav[next2],{left:16},600,function(){
		        	flag=true;
		        });
			 	n2=next2;	
		 }

    }
    leftTurn($(".min-pic-bottom")[0]);
    leftTurn($(".nvzhuang-pic-bottom")[0]);
    leftTurn($(".nanzhuang-pic-bottom")[0]);
    leftTurn($(".shoes-pic-bottom")[0]);
    leftTurn($(".bags-pic-bottom")[0]);
    leftTurn($(".beauty-pic-bottom")[0]);
    leftTurn($(".outdoor-pic-bottom")[0]);
    leftTurn($(".accessories-pic-bottom")[0]);
    leftTurn($(".kid-pic-bottom")[0]);
    // 楼层跳转
    var floor=$(".floor");
	var floorLis=$(".guding-nav");
	var gudingPic=$(".guding-pic");
	var gudingZi=$(".guding-zi");
	var floorNav=$(".guding")[0]; 
	var back1=$(".backding")[0];
	var flag=true;
	var now;
	var cHeight=document.documentElement.clientHeight;
	for(var i=0;i<floor.length;i++){
		    floor[i].h=floor[i].offsetTop;
	    window.onscroll=function(){
        var obj=document.body.scrollTop?document.body:document.documentElement;
        var top=obj.scrollTop;
	        if (top>=floor[0].h) {
                floorNav.style.display="block";              
	        }else if(top<floor[0].h){
	        	floorNav.style.display="none";	
	        }
	        for(var i=0;i<floor.length;i++){
	        	if(top>=floor[i].h-200){
	        		for(var j=0;j<floorLis.length;j++){
	                    gudingZi[j].style.display="none";
	                    gudingPic[j].style.display="block";
	        		}
	        		gudingPic[i].style.display="none";
	        		gudingZi[i].style.display="block";
	        		now=i;
	        	}
	        }
	        for(var i=0;i<floorLis.length;i++){
				floorLis[i].index=i
				floorLis[i].onclick=function(){
					animate(document.body,{scrollTop:floor[this.index].h},100);
					animate(document.documentElement,{scrollTop:floor[this.index].h},100);
					now=this.index;
				}
				  floorLis[i].onmouseover=function(){
				  gudingPic[this.index].style.display="none";
	        	  gudingZi[this.index].style.display="block";
				   
			   }
			     floorLis[i].onmouseout=function(){
			     	if(this.index==now){
			     		return;
			     	}
				     gudingZi[this.index].style.display="none";
	                 gudingPic[this.index].style.display="block";
			   }
			}				
			back1.onclick=function(){
				animate(document.body,{scrollTop:0},100);
				animate(document.documentElement,{scrollTop:0},100)
			}
		}
	}
 	var recommend_lis=$('.recommend-lis');
	var recommend_pic=$(".recommend-pic");
	var sanjiao1=$(".sanjiao1");
	var sanjiao2=$(".sanjiao2");
	recommend_lis[2].style.cssText="border-bottom:5px solid #E5004F";
	for(var i=0;i<recommend_lis.length;i++){
		recommend_lis[i].index=i;
		recommend_lis[i].onmouseover=function(){
			for(var i=0;i<recommend_lis.length;i++){
				recommend_lis[i].style.cssText="border-color:#333333";
                sanjiao1[i].style.display="none";
			}	
			this.style.cssText="font-weight: bold;border-color: #E5004F";
            sanjiao2[this.index].style.cssText="display:none";
			for(var i=0;i<recommend_pic.length;i++){
				sanjiao1[this.index].style.display="block";
				recommend_pic[i].style.cssText="display:none;"
			}recommend_pic[this.index].style.cssText="display:block;"
		}
	}
	var shoppe_pic=$(".shoppe-pic-opacity");

	for(var i=0;i<shoppe_pic.length;i++){
		shoppe_pic[i].index=i;
		shoppe_pic[i].onmouseover=function(){
			shoppe_pic[this.index].style.opacity="0.8";
		}
		shoppe_pic[i].onmouseout=function(){
			shoppe_pic[this.index].style.opacity="1";
		}
	}
	var shoppe_lis=$('.shoppe-lis');
	var shoppe_bottom=$(".shoppe-bottom");
	shoppe_lis[0].style.cssText="border-bottom:3px solid #E5004F";
	var sanjiao3=$(".sanjiao3");
	var sanjiao4=$(".sanjiao4");
	sanjiao4[0].style.display="none";
	for(var i=0;i<shoppe_lis.length;i++){
		shoppe_lis[i].index=i;
		shoppe_lis[i].onmouseover=function(){
			for(var i=0;i<shoppe_lis.length;i++){
				shoppe_lis[i].style.cssText="border-color:#333333";
	            sanjiao4[i].style.cssText="display:block";
			}	
			this.style.cssText="font-weight: bold;border-color: #E5004F";
			sanjiao4[this.index].style.cssText="display:none";
			for(var i=0;i<shoppe_bottom.length;i++){
				shoppe_bottom[i].style.cssText="display:none;"
			}shoppe_bottom[this.index].style.cssText="display:block;"
		}
	}
     function bianKuang(obj,border_animation){
		var obj=obj;
		var border_animation=border_animation;
		var border_top=$(".border-top",obj);
		var border_right=$(".border-right",obj);
		var border_bottom=$(".border-bottom",obj);
		var border_left=$(".border-left",obj);
		var bz_H=border_animation[0].offsetHeight;
		var bz_W=border_animation[0].offsetWidth;
		for(var i=0;i<border_animation.length;i++){
			border_animation[i].index=i;
			hover(border_animation[i],function(){
				animate(border_top[this.index],{width:220},500)
				animate(border_right[this.index],{height:260},500)
				animate(border_bottom[this.index],{width:220},500)
				animate(border_left[this.index],{height:260},500)
			},function(){
				animate(border_top[this.index],{width:0},500)
				animate(border_right[this.index],{height:0},500)
				animate(border_bottom[this.index],{width:0},500)
				animate(border_left[this.index],{height:0},500)
			})
		}
	}
    bianKuang($(".recommend-turn")[0],$(".border_recommend"))
    function bianKuang2(obj,border_animation){
		var obj=obj;
		var border_animation=border_animation;
		var border_top=$(".border-top",obj);
		var border_right=$(".border-right",obj);
		var border_bottom=$(".border-bottom",obj);
		var border_left=$(".border-left",obj);
		var bz_H=border_animation[0].offsetHeight;
		var bz_W=border_animation[0].offsetWidth;
		for(var i=0;i<border_animation.length;i++){
			border_animation[i].index=i;
			hover(border_animation[i],function(){
				animate(border_top[this.index],{width:200},500)
				animate(border_right[this.index],{height:250},500)
				animate(border_bottom[this.index],{width:200},500)
				animate(border_left[this.index],{height:250},500)
			},function(){
				animate(border_top[this.index],{width:0},500)
				animate(border_right[this.index],{height:0},500)
				animate(border_bottom[this.index],{width:0},500)
				animate(border_left[this.index],{height:0},500)
			})
		}
	}
    bianKuang($(".shoppe-turn")[0],$(".shoppe-two"))
    function bianKuang3(obj){
		var obj=obj;
		var border_animation=$(".border-picture",obj);
		var border_top=$(".border-top",obj);
		var border_right=$(".border-right",obj);
		var border_bottom=$(".border-bottom",obj);
		var border_left=$(".border-left",obj);
		// var bz_H=border_animation[0].offsetHeight;
		// var bz_W=border_animation[0].offsetWidth;
		for(var i=0;i<border_animation.length;i++){
			border_animation[i].index=i;
			hover(border_animation[i],function(){
				animate(border_top[this.index],{width:272},500)
				animate(border_right[this.index],{height:182},500)
				animate(border_bottom[this.index],{width:272},500)
				animate(border_left[this.index],{height:182},500)
			},function(){
				animate(border_top[this.index],{width:0},500)
				animate(border_right[this.index],{height:0},500)
				animate(border_bottom[this.index],{width:0},500)
				animate(border_left[this.index],{height:0},500)
			})
		}
	}
    bianKuang3($(".mingpin-pic-right")[0]);
    bianKuang3($(".nvzhuang-pic-right")[0]);
    bianKuang3($(".nanzhuang-pic-right")[0]);
    bianKuang3($(".kid-pic-right")[0]);
    bianKuang3($(".shoes-pic-right")[0]);
    bianKuang3($(".bags-pic-right")[0]);
    bianKuang3($(".beauty-pic-right")[0]);
    bianKuang3($(".outdoor-pic-right")[0]);
    bianKuang3($(".accessories-pic-right")[0]);

})
