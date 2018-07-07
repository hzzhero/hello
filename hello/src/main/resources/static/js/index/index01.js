$(function(){
	//双击配网介绍下载注册表文件
	$('.logo_txt').dblclick(function(){
		window.open('/link.reg');
	});
	ajaxCharts();
	
	//10s刷新一次
	setInterval(function(){
		ajaxCharts();
	},10*1000);
});

function initEvent(data){
	
	$('body').unbind('click').bind('click',function(){
		$('#popo').hide(500);
	});
	
	$('.map_area').unbind('mousemove').bind('mousemove',function(){
		var region=$(this).attr('region');
		region='shiqu';
		//$('#popo').hide();
		$('#popo').text(data.region[region]);
		switch(region){
		case 'huangpi'://黄陂
			$('#popo').css('left','3836px');
			$('#popo').css('top','235px');
			$('#popo').show(500);
			break;
		case 'xinzhou'://新洲
			$('#popo').css('left','5636px');
			$('#popo').css('top','435px');
			$('#popo').show(500);
			break;
		case 'dongxihu'://东西湖
			$('#popo').css('left','3636px');
			$('#popo').css('top','835px');
			$('#popo').show(500);
			break;
		case 'jiangxia'://市区
			$('#popo').css('left','5636px');
			$('#popo').css('top','1435px');
			$('#popo').show(500);
			break;
		case 'caidian'://蔡甸 3236px;top: 1435px;
			$('#popo').css('left','3236px');
			$('#popo').css('top','1435px');
			$('#popo').show(500);
			break;
		case 'hannan'://汉南3436px;top: 2135px;
			$('#popo').css('left','3436px');
			$('#popo').css('top','2135px');
			$('#popo').show(500);
			break;
		case 'shiqu'://江夏 5436px;top: 2135px;
			$('#popo').css('left','5436px');
			$('#popo').css('top','2135px');
			$('#popo').show(500);
			break;
		default:
			
			break;
		}
	});
}

function  chart1(data){
	var myChart = echarts.init(document.getElementById('chart1'));
	myChart.clear();
	var option = {
		    title : {
		    	 text: '单位 ：平方公里',
			        x:'right',
			        textStyle:{
	                    color:'#003399',
	                    fontSize:45
	                }
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
//		    legend: {
//		        data:['配网规模']
//		    },
		    xAxis : [
		        {

		            data : ['黄陂','汉南','东西湖','新洲','江夏','中心城区'],
		            axisLabel: {
                        show: true,
                        margin :15,
                        textStyle: {
                            color: '#99d9ea',
                            fontSize:45
                        }
                   },
		            axisLine:{       //y轴
		                show:false
		              },
		              axisTick:{       //y轴刻度线
		                show:false
		              },
		              splitLine: {     //网格线
		                show: false
		              },
		              lineStyle:{  
                          color:'#0087ED',  
                          width:5,//这里是为了突出显示加上的  
                      }  
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine:{  
                        lineStyle:{  
                            color:'#0087ED',  
                            width:5,//这里是为了突出显示加上的  
                        }  
                    } , 
		            axisLabel: {
                        show: true,
                        margin :15,
                        textStyle: {
                            color: '#99d9ea',
                            fontSize:45
                        }
                   }
		        }
		    ],
		    series : [
		        {
		            name:'配网规模',
		            type:'bar',
		            data:[ 23.2, 25.6, 76.7, 135.6, 162.2, 43.3],
		        itemStyle: {
		        	 normal: {
		                    barBorderRadius: 20,
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: '#99d9ea'
		                    }, {
		                        offset: 1,
		                        color: '#000066'
		                    }]),
		                    shadowColor: 'rgba(0, 0, 0, 0.4)',
		                    shadowBlur: 20
		                }
                },
		          
		        }
		    ],
		    label: {
		        normal: {
		            show: true,
		            position: 'top',
		            fontWeight:'bolder',
		            fontSize:45,
		            padding: 30,
		            color: '#99d9ea',
		            textStyle: {
		              color: '#99d9ea'
		            }
		        }
		     }
		};
	if(data!=null){
		option.xAxis[0].data=data.chart1.xcol;
		option.series[0].data=data.chart1.yval;
	}
	myChart.setOption(option);                     
	
}

function  chart2(data){
	var myChart = echarts.init(document.getElementById('chart2'));
	myChart.clear();
	option = {
		    title : {
		        text: '单位 ：条',
		        x:'right',
		        textStyle:{
                    color:'#003399',
                    fontSize:45
                }
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
//		    legend: {
//		        data:['配网规模']
//		    },
		  
		    xAxis : [
		        {

		            data : ['汉口','汉阳','沌口','武昌','东湖高新','蔡甸'],
		            axisLine:{  
                        lineStyle:{  
                            color:'#0087ED',  
                            width:5,//这里是为了突出显示加上的  
                        }  
                    } , 
		            axisLabel: {
                        show: true,
                        margin :15,
                        textStyle: {
                            color: '#99d9ea',
                            fontSize:45
                        }
                   },
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine:{  
                        lineStyle:{  
                            color:'#0087ED',  
                            width:5,//这里是为了突出显示加上的  
                        }  
                    } , 
		            axisLabel: {
                        show: true,
                        margin :15,
                        textStyle: {
                            color: '#99d9ea',
                            fontSize:45
                        }
                   },
		        }
		    ],
		    series : [
		        {
		            name:'配网规模',
		            type:'bar',
		            data:[ 23.2, 25.6, 76.7, 135.6, 162.2, 20.3],
		        itemStyle: {
		        	 normal: {
		                    barBorderRadius: 20,
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: '#99d9ea'
		                    }, {
		                        offset: 1,
		                        color: '#66cc99'
		                    }]),
		                    shadowColor: 'rgba(0, 0, 0, 0.4)',
		                    shadowBlur: 20
		                }
               },
		          
		        }
		    ],
		    label: {
		        normal: {
		            show: true,
		            position: 'top',
		            fontWeight:'bolder',
		            fontSize:45,
		            padding: 30,
		            color: '#99d9ea',
		            textStyle: {
		              color: '#99d9ea'
		            }
		        }
		     }
		};
	if(data!=null){
		option.xAxis[0].data=data.chart2.xcol;
		option.series[0].data=data.chart2.yval;
	}
	myChart.setOption(option);                     
	
}

function chart3(data){
	var myChart = echarts.init(document.getElementById('chart3'));
	myChart.clear();
	var option = {
//		    title : {
//		        text: '年度供电情况',
//		        textStyle:{
//                    color:'#FFFFFF',
//                    fontSize:14
//                }
//		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['15年供电','16年供电','17年供电'],
		        itemWidth:60,
		        itemHeight:50,
		        itemGap:40,
		        textStyle:{
		        	fontSize:35,
		        	color:'#FAFAFA'
		        }
		    },
//		    toolbox: {
//		        show : true,
//		        feature : {
//		            mark : {show: true},
//		            dataView : {show: true, readOnly: false},
//		            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
//		            restore : {show: true},
//		            saveAsImage : {show: true}
//		        }
//		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
		            axisLine:{  
                        lineStyle:{  
                            color:'#0087ED',  
                            width:5,//这里是为了突出显示加上的  
                        }  
                    } , 
		            axisLabel: {
                        show: true,
                        margin :15,
                        textStyle: {
                            color: '#99d9ea',
                            fontSize:45
                        }
                   }
		        	
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine:{  
                        lineStyle:{  
                            color:'#0087ED',  
                            width:5,//这里是为了突出显示加上的  
                        }  
                    } , 
		            axisLabel: {
                        show: true,
                        margin :15,
                        textStyle: {
                            color: '#99d9ea',
                            fontSize:45
                        }
                   },
		        }
		    ],
		    series : [
		        {
		            name:'17年供电',
		            type:'line',
		            smooth:true,
		            symbol:'none',  //这句就是去掉点的  
		            itemStyle: {normal: {areaStyle: {type: 'default'}}},
		            data:[7, 10, 15, 20, 22, 21.5, 20, 18, 18.5, 19, 21, 20]
		        },
		        {
		            name:'16年供电',
		            type:'line',
		            smooth:true,
		            symbol:'none',  //这句就是去掉点的  
		            itemStyle: {normal: {areaStyle: {type: 'default'}}},
		            data:[10.6, 12, 15, 14.8, 13.2, 12, 10.2, 10, 12, 16, 22, 23]
		        },
		        {
		            name:'15年供电',
		            type:'line',
		            smooth:true,
		            symbol:'none',  //这句就是去掉点的  
		            itemStyle: {normal: {areaStyle: {type: 'default'}}},
		            data:[4, 6, 8, 11, 12, 11.5, 11, 11, 11.1, 11.2, 13, 15]
		        }
		    ]
		    
		};
	if(data!=null){
		option.series[0].data=data.chart3.year17;
		option.series[1].data=data.chart3.year16;
		option.series[2].data=data.chart3.year15;
	}
	myChart.setOption(option);    	                    
}

function setRect(data){
	if(data!= null){
		var rect1=data.rect.rect1;
		$("#rect1 span[class='numberStyle01 numSize']").each(function(i,e){
			$(e).text(rect1[i]);
		});
	}
	$(".numSize").countUp();
}

function ajaxCharts(){
	$.get('/index01Config',function(data){
		chart1(data);
		chart2(data);
		chart3(data);
		setRect(data);
		initEvent(data);
	},'json');
}


