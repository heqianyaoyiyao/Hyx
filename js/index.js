/*
* @Author: hyx
* @Date:   2017-03-11 10:17:35
* @Last Modified by:   hyx
* @Last Modified time: 2017-03-12 11:02:21
*/

window.onload = function(){
	if(document.body.clientWidth < 900){
		$(".hyx_banner ul").css("width","49%");
		$(".hyx_container").css("width","0%");

		$(".hyx_banner li").css("padding","5px");
		console.log(1);
	}else{
		$(".hyx_banner li").css("padding","18px");
	}
}
window.onresize = function(){
	if(document.body.clientWidth < 900){
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
// console.log($(".hyx_banner li").css("padding"));
// $(".hyx_banner li").css("padding","10px");
// console.log($(".hyx_banner li").css("padding"));