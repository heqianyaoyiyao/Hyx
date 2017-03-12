/*
* @Author: hyx
* @Date:   2017-03-11 10:17:35
* @Last Modified by:   hyx
* @Last Modified time: 2017-03-12 10:42:05
*/

window.onresize = function(){
	if(document.body.clientWidth < 900){
		$(".hyx_banner li").css("padding","10px");
		console.log(1);
		
	}
}
// console.log($(".hyx_banner li").css("padding"));
// $(".hyx_banner li").css("padding","10px");
// console.log($(".hyx_banner li").css("padding"));