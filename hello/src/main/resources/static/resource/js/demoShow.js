$(document).ready(function (){
function zz(){
	
//�����������
var mainContent_w = ($(window).width()-$(".mainContent").width())/2;
$(".mainContent").css("left",mainContent_w);
	var mainContent_H = ($(window).height()-$(".mainContent").height())/2;
$(".mainContent").css("top",mainContent_H);
	
//�б����߶�
var boxMaxHeight = $(window).height()-290;
$(".boxMaxHeight").css("max-height",boxMaxHeight);
	
var searchMaxHeight = $(window).height()-290;
$(".searchMaxHeight").css("max-height",searchMaxHeight);
	
var searchMaxHeight02 = $(window).height()-330;
$(".searchMaxHeight02").css("max-height",searchMaxHeight02);

//�������־���
var Search_Top = ($(".WCtitle").height()-$(".searchTxt").height())/2;
$(".searchTxt").css("top",Search_Top);

//�ײ�������ť����
var bottomArea = ($(window).width()-$(".bottomArea").width())/2;
$(".bottomArea").css("left",bottomArea);

//��ѡ����ʾDEMO
$(".radioStyle").click(function() {
		 $(this).toggleClass("radioStyle_on"); 				   
 }); 
//��ѡ����ʾDEMO
$(".checkbox01").click(function() {
		 $(this).toggleClass("checkbox01_on"); 				   
 }); 	

//������������DEMO��ʼ01
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

//������������DEMO��ʼ02
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

//�м�ײ�������ť��ʼ
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

//�Ҳ��б�������ť����
var screen_off_H = ($(".screenArea").height()-$(".screen_btn_off").height())/2;
$(".screen_btn_off").css("top",screen_off_H);
var screen_on_H = ($(window).height()-$(".screen_btn_on").height())/2;
$(".screen_btn_on").css("top",screen_on_H);
//�Ҳ��б���������
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

	
//��¼�������
var loginArea_w = ($(window).width()-$(".loginArea").width())/2;
$(".loginArea").css("left",loginArea_w);
	var loginArea_h = ($(window).height()-$(".loginArea").height())/2;
$(".loginArea").css("top",loginArea_h);

//�Ż��ھ�
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