$(document).ready(function (){
function zz(){
	
//智搜详情居中
var mainContent_w = ($(window).width()-$(".mainContent").width())/2;
$(".mainContent").css("left",mainContent_w);
	var mainContent_H = ($(window).height()-$(".mainContent").height())/2;
$(".mainContent").css("top",mainContent_H);
	
//列表最大高度
var boxMaxHeight = $(window).height()-290;
$(".boxMaxHeight").css("max-height",boxMaxHeight);
	
var searchMaxHeight = $(window).height()-290;
$(".searchMaxHeight").css("max-height",searchMaxHeight);
	
var searchMaxHeight02 = $(window).height()-330;
$(".searchMaxHeight02").css("max-height",searchMaxHeight02);

//搜索文字居中
var Search_Top = ($(".WCtitle").height()-$(".searchTxt").height())/2;
$(".searchTxt").css("top",Search_Top);

//底部伸缩按钮居中
var bottomArea = ($(window).width()-$(".bottomArea").width())/2;
$(".bottomArea").css("left",bottomArea);

//单选框演示DEMO
$(".radioStyle").click(function() {
		 $(this).toggleClass("radioStyle_on"); 				   
 }); 
//复选框演示DEMO
$(".checkbox01").click(function() {
		 $(this).toggleClass("checkbox01_on"); 				   
 }); 	

//搜索区域伸缩DEMO开始01
			$(".search_up").click(function() {
				$(".fanning").fadeOut("fast");
				
				$(".search_down").css("display","block");
				$(".search_up").css("display","none");			   
		 }); 
		$(".search_down").click(function() {
			$(".fanning").fadeIn("fast");
			
			$(".search_up").css("display","block");
			$(".search_down").css("display","none");			   
		 }); 

//搜索区域伸缩DEMO开始02
			$(".arrows_down").click(function() {
				$(".subListStyle01").fadeIn("fast");
				
				$(".arrows_up").css("display","block");
				$(".arrows_down").css("display","none");			   
		 }); 
		$(".arrows_up").click(function() {
			$(".subListStyle01").fadeOut("fast");
			
			$(".arrows_down").css("display","block");
			$(".arrows_up").css("display","none");			   
		 }); 

//中间底部伸缩按钮开始
			$(".flexibleBtn_down").click(function() {
				 $(".bottomArea").animate({
					 bottom:-75,
					 },"fast");
				$(".SubFlexible").fadeOut("fast");
				
					  $(".flexibleBtn_up").css("display","block");
					 $(".flexibleBtn_down").css("display","none");			   
		 }); 
		$(".flexibleBtn_up").click(function() {
				 $(".bottomArea").animate({
					 bottom:0,
					 },"fast");
			$(".SubFlexible").fadeIn("fast");
					  $(".flexibleBtn_down").css("display","block");
					 $(".flexibleBtn_up").css("display","none");			   
		 }); 

//右侧列表伸缩按钮居中
var screen_off_H = ($(".screenArea").height()-$(".screen_btn_off").height())/2;
$(".screen_btn_off").css("top",screen_off_H);
var screen_on_H = ($(window).height()-$(".screen_btn_on").height())/2;
$(".screen_btn_on").css("top",screen_on_H);
//右侧列表伸缩区域
	 $(".screen_btn_on").click(function(){
	  $(".screenArea").animate({
		opacity:1,
		right:'30',
		top:'106',
},"fast");	 
		 $(".screen_btn_on").css("display","none");
 });
 $(".screen_btn_off").click(function(){
	  $(".screenArea").animate({
		right:'-343',
		top:'106',
		opacity:0,
},"fast");
	 	$(".screen_btn_on").fadeIn("slow");
});

	
//登录区域居中
var loginArea_w = ($(window).width()-$(".loginArea").width())/2;
$(".loginArea").css("left",loginArea_w);
	var loginArea_h = ($(window).height()-$(".loginArea").height())/2;
$(".loginArea").css("top",loginArea_h);

//团伙挖掘
$(".cardModule01").click(function(){
	  $(".unfoldCard01").css("display","none");
	  $(".unfoldCard02").fadeIn("slow");


	
	 $(".cardModule02").css("display","block");
	$(".cardModule01").css("display","none");
 });
 $(".cardModule02").click(function(){
	  $(".unfoldCard02").css("display","none");
	  $(".unfoldCard01").fadeIn("slow");
	
	 $(".cardModule02").css("display","none");
	$(".cardModule01").css("display","block");	
});

}	

window.onload = function(){ 	
	zz();						
}
window.onresize = function(){
  	zz();							
}
});