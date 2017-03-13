/*
* @Author: hyx
* @Date:   2017-03-11 10:17:35
* @Last Modified by:   hyx
* @Last Modified time: 2017-03-13 12:36:21
*/

window.onload = function(){
	if(document.body.clientWidth < 768){
		$(".hyx_banner ul").css("width","49%");
		$(".hyx_container").css("width","0%");

		$(".hyx_banner li").css("padding","5px");
		console.log(1);
	}else{
		$(".hyx_banner li").css("padding","18px");
	}
	window.onresize = function(){
		if(document.body.clientWidth < 768){
			$(".hyx_banner ul").css("width","49%");
			$(".hyx_container").css("width","0%");
			$(".hyx_banner li").css("padding","5px");
			console.log(1);
		}else{
			$(".hyx_banner ul").css("width","25%");
			$(".hyx_container").css("width","50%");
			$(".hyx_banner li").css("padding","18px");
		}
	}
	//Swiper
		var mySwiper = new Swiper ('.swiper-container', {
			    // direction: 'vertical',
			    
			   effect : 'flip',
				flip: {
				            slideShadows : true,
				            limitRotation : true,
				        },
				autoplay : 5000,
			    loop: true,
			     autoHeight: true,
			    
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    
			    // 如果需要滚动条
			    // scrollbar: '.swiper-scrollbar',
			  })   
}

// console.log($(".hyx_banner li").css("padding"));
// $(".hyx_banner li").css("padding","10px");
// console.log($(".hyx_banner li").css("padding"));