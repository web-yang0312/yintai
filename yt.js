window.onload=function(){
	var nav_fl=$(".chang");
	for(var i=0;i<nav_fl.length;i++){
		hover(nav_fl[i],function(){
			var ul=$(".banner-more",this);
			for(var i=0;i<ul.length;i++){
				ul[i].style.display="block";
			}
		},function(){
			var ul=$(".banner-more",this);
			for(var i=0;i<ul.length;i++){
				ul[i].style.display="none";
			}
		})
	}
}
//    var floor=$(".floor");
	// var floorLis=$(".guding");
	// var floorNav=$(".guding-nav")[0];
	// var back=$(".back")[0];
	// var now;
	// var cHeight=document.documentElement.clientHeight;
	// for(var i=0;i<floor.length;i++){
	// 	    floor[i].h=floor[i].offsetTop;
	//     window.onscroll=function(){
 //        var obj=document.body.scrollTop?document.body:document.documentElement;
 //        var top=obj.scrollTop;
	//         if (top>=floor[0].h-1300) {
 //                floorNav.style.display="block";              
 //                var navHeight=floorNav.offsetHeight;
 //                floorNav.style.top=(cHeight-navHeight)/2+"px";
	//         }else if(top<floor[0].h-1300){
	//         	floorNav.style.display="none";
	//         }
	//         for(var i=0;i<floor.length;i++){
	//         	if(top>=floor[i].h-1200){
	//         		for(var j=0;j<floorLis.length;j++){
	//         			var gudingpic=$(".guding-pic");
	//         			gudingPic[j].style.display="block";
	//         		}
	//         		var gudingZi=$(".guding-zi");
	//         		gudingZi[i].style.display=".block"
	//         		now=i;
	//         	}
	//         }
	//         for(var i=0;i<floorLis.length;i++){
	// 			floorLis[i].index=i
	// 			floorLis[i].onclick=function(){
	// 				animate(document.body,{scrollTop:floor[this.index].h},1);
	// 				animate(document.documentElement,{scrollTop:floor[this.index].h},1);
	// 				now=this.index;
	// 			}
	// 			  floorLis[i].onmouseover=function(){
	// 			   floorLis[this.index].style.background="red";
				   
	// 		   }
	// 		     floorLis[i].onmouseout=function(){
	// 		     	if(this.index==now){
	// 		     		return;
	// 		     	}
	// 			   this.style.background="#ededed";
	// 		   }
	// 		}				
	// 		back.onclick=function(){
	// 			animate(document.body,{scrollTop:0},1);
	// 			animate(document.documentElement,{scrollTop:0},1)
	// 		}
	// 	}
	// }