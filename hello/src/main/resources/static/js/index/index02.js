$(function() {
	ajaxCharts();
	
	// 10s刷新一次
	setInterval(function() {
		ajaxCharts();
	}, 10 * 1000);
});

function initEvent(data){
	$('body').unbind('click').bind('click',function(){
		$('#popo').hide(500);
	});
	$('.gisBtn').unbind('mouseenter').bind('mouseenter',function(){
		var region=$(this).attr('region');
		$('#popo').hide();
		switch(region){
		case '1'://汉口
			$('#popo').css('left','8px');
			$('#popo').css('top','193px');
			$('#popo').text(data.region.hankou);
			$('#popo').show(500);
			break;
		case '2'://汉阳
			$('#popo').css('left','-100px');
			$('#popo').css('top','623px');
			$('#popo').text(data.region.hanyang);
			$('#popo').show(500);
			break;
		case '3'://沌口
			$('#popo').css('left','-100px');
			$('#popo').css('top','1607px');
			$('#popo').text(data.region.zhuankou);
			$('#popo').show(500);
			break;
		case '4'://武昌
			$('#popo').css('left','1350px');
			$('#popo').css('top','156px');
			$('#popo').text(data.region.wuchang);
			$('#popo').show(500);
			break;
		case '5'://东新
			$('#popo').css('left','1100px');
			$('#popo').css('top','1607px');
			$('#popo').text(data.region.dongxin);
			$('#popo').show(500);
			break;
		default:
			
			break;
		}
	});
}

//换成柱状图
/*********
function chart2() {
	var myChart = echarts.init(document.getElementById('chart2'));
	myChart.clear();
	var total = 50;// 最大温度数据单独出来定义，方便环形总数的修改
	placeHolderStyle = {
		normal : {
			label : {
				show : false,
			},
			labelLine : {
				show : false,
			}
		}
	};
	var option = {
		title : {
			text : '用户用电情况',// 主标题
			//subtext : '26℃',// 副标题
			textStyle : {// 主标题样式
				color : '#fff',
				fontWeight : 'bold',
				fontSize : 30
			},
			subtextStyle : {// 副标题样式
				color : '#fff',
				fontSize : 20,
				fontWeight : 'bold',
				color : '#0f0'
			},
			left : 'center',
			top : 'middle'
		},
		tooltip : {
			show : true,
			trigger : 'item',// 提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
			formatter : function(params, ticket, callback) {// 第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
				return params.seriesName + ": " + params.value + "℃";// 系列名称：数据值
			}
		},
		color : [ '#dc1439', '#e6b600', '#053afe' ,'#A020F0'],// 调色盘颜色列表，默认情况下图例和饼形环图颜色使用
		legend : {
			top : "15px",
			left : "50%",
			itemHeight : 40,// 图例的高度

			itemGap : 40,// 图例之间的间距

			data : [ '武昌', '汉口', '东湖高新', '沌口' ],// 图例的数据数组
			textStyle : {
				color : '#fff',
				fontSize:40
			},
			selectedMode : true,// 图例选择模式
			orient : "vertical"// 图例布局方式
		},
		series : [ {
			name : '武昌',
			type : 'pie',
			clockWise : false, // 顺时加载
			hoverAnimation : false, // 鼠标移入变大
			radius : [ 440, 480 ],
			itemStyle : placeHolderStyle,
			label : {
				normal : {
					show : false,
				}
			},
			data : [ {
				value : 28,
				itemStyle : {
					normal : {
						color : '#dc1439'
					}
				}
			}, {
				value : total - 28,
				itemStyle : {
					normal : {
						color : 'transparent'
					}
				}
			} ]
		}, {
			name : '汉口',
			type : 'pie',
			clockWise : false, // 顺时加载
			hoverAnimation : false, // 鼠标移入变大
			radius : [ 360, 400 ],
			itemStyle : placeHolderStyle,
			data : [ {
				value : 26,
				itemStyle : {
					normal : {
						color : '#e6b600'
					}
				}
			}, {
				value : total - 26,
				itemStyle : {
					normal : {
						color : 'transparent'
					}
				}
			} ]
		}, {
			name : '东湖高新',
			type : 'pie',
			clockWise : false, // 顺时加载
			hoverAnimation : false, // 鼠标移入变大
			radius : [ 280, 320 ],
			itemStyle : placeHolderStyle,
			data : [ {
				value : 26,
				itemStyle : {
					normal : {
						color : '#053afe'
					}
				}
			}, {
				value : total - 26,
				itemStyle : {
					normal : {
						color : 'transparent'
					}
				}
			} ]
		},{
			name : '沌口',
			type : 'pie',
			clockWise : false, // 顺时加载
			hoverAnimation : false, // 鼠标移入变大
			radius : [ 200, 240 ],
			itemStyle : placeHolderStyle,
			data : [ {
				value : 26,
				itemStyle : {
					normal : {
						color : '#9400D3'
					}
				}
			}, {
				value : total - 26,
				itemStyle : {
					normal : {
						color : 'transparent'
					}
				}
			} ]
		}
		
		]
	};

	myChart.setOption(option);

}
****/

function chart2(data){
	var colorList = [
		
         '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
         '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
  ];
	
	if(data!=null){
		colorList = data.chart2.colorList;
		for(var i=0;i<colorList.length;i++){
			colorList[i]="#"+colorList[i];
		}
	}
	
	var myChart = echarts.init(document.getElementById('chart2'));
	myChart.clear();
	var option = {
//		    title : {
//		    	 text: '单位 ：平方公里',
//			        x:'right',
//			        textStyle:{
//	                    color:'#003399',
//	                    fontSize:45
//	                }
//		    },
		    tooltip : {
		        trigger: 'axis'
		    },
//		    legend: {
//		        data:['配网规模']
//		    },
		    xAxis : [
		        {

		            data : ['武昌','汉口','东湖高新','沌口','汉阳'],
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
		            	show:false,
                        lineStyle:{  
                            color:'#0087ED',  
                            width:5,//这里是为了突出显示加上的  
                        }  
                    } , 
		            axisLabel: {
                        show: false,
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
		            barWidth : 80,//柱图宽度
		            barMaxWidth:80,//最大宽度
		            data:[ 31, 34, 17, 10, 8],
		        itemStyle: {
		        	 normal: {
		                    barBorderRadius: 20,
		                    color: function(params){
		                    	 
		                    	return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                        offset: 0,
			                        color: colorList[params.dataIndex*2]
			                    }, {
			                        offset: 1,
			                        color: colorList[params.dataIndex*2+1]
			                    }]);
		                    },
//		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//		                        offset: 0,
//		                        color: '#99d9ea'
//		                    }, {
//		                        offset: 1,
//		                        color: '#000066'
//		                    }]),
//		                    color: function(params) {
//		                        // build a color map as your need.
//		                        var colorList = [
//		                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
//		                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
//		                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
//		                        ];
//		                        return colorList[params.dataIndex]
//		                    },
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
		            formatter: function(params){
		            	return params.dataIndex;
		            } ,
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
	option.label.normal.formatter=function(params){
		return  option.series[0].data[params.dataIndex]+'%';
	}
	myChart.setOption(option); 
}

function chart1(data){
	var myChart = echarts.init(document.getElementById('chart1'));
	myChart.clear();
	var option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid:{
		    	left:180,
		    },
		    legend: {
		        data:['16年', '17年','18年'],
		       // left:20,
		       // align:'left',
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
		            type : 'value',
		            axisLine:{  
		            	show: false,
                        lineStyle:{  
                            color:'#0087ED',  
                            width:5,//这里是为了突出显示加上的  
                        }  
                    } , 
		            axisLabel: {
                        show: false,
                        margin :15,
                        textStyle: {
                            color: '#99d9ea',
                            fontSize:40
                        }
                   },
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            data : ['武昌','汉口','东湖高新','沌口','汉阳'],
		            axisLine:{  
		            	show: false,
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
                            fontSize:40
                        }
                   },
		        }
		    ],
		    series : [
		        {
		            name:'16年',
		            type:'bar',
		            barWidth : 80,//柱图宽度
		            barMaxWidth:80,//最大宽度
		            stack: '总量',
		            itemStyle: {
		            	//柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
		            	emphasis: {
		            		barBorderRadius: 30
		            	},
		            	normal: {
		            		//柱形图圆角，初始化效果
		            		barBorderRadius: [10,10,10,10],
		            		color:'#663399',
		            		label: {
		            			show: false,
		            			//是否展示textStyle: {
		            				fontWeight: 'bolder',
		            				fontSize: '40',
		            				fontFamily: '微软雅黑',
		            				
		            			}
		            		}
		            },
		            data:[120, 132, 101, 134, 90]
		        },
		        {
		            name:'17年',
		            type:'bar',
		            barWidth : 80,//柱图宽度
		            barMaxWidth:80,//最大宽度
		            stack: '总量',
		            itemStyle: {
		            	//柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
		            	emphasis: {
		            		barBorderRadius: 30
		            	},
		            	normal: {
		            		//柱形图圆角，初始化效果
		            		barBorderRadius: [10,10,10,10],
		            		color:'#339999',
		            		label: {
		            			show: false,
		            			//是否展示textStyle: {
		            				fontWeight: 'bolder',
		            				fontSize: '40',
		            				fontFamily: '微软雅黑',
		            				
		            			}
		            		}
		            },
		            data:[320, 302, 301, 334, 390]
		        },
		        
		        {
		            name:'18年',
		            type:'bar',
		            barWidth : 80,//柱图宽度
		            barMaxWidth:80,//最大宽度
		            stack: '总量',
		            itemStyle: {
		            	//柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
		            	emphasis: {
		            		barBorderRadius: 30
		            	},
		            	normal: {
		            		//柱形图圆角，初始化效果
		            		barBorderRadius: [10,10,10,10],
		            		color:'#0099cc',
		            		label: {
		            			show: false,
		            			//是否展示textStyle: {
		            				fontWeight: 'bolder',
		            				fontSize: '40',
		            				fontFamily: '微软雅黑',
		            				position:'right'
		            			}
		            		}
		            },
		            data:[820, 832, 901, 934, 1290]
		        }
		    ]
		};
	if(data!=null){
		option.yAxis[0].data=data.chart1.ycol;
		option.series[0].data=data.chart1.year16;
		option.series[1].data=data.chart1.year17;
		option.series[2].data=data.chart1.year18;
	}	                    
	myChart.setOption(option);
}

function chart3(data) {
	var myChart = echarts.init(document.getElementById('chart3'));
	myChart.clear();

	var option = {
			color:['#cc00cc','#ffff33','#80FF80','#FF8096','#800080'],
		    title : {
		        text: '',
		       
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['全网最大负荷','配网最大负荷'],
		        // left:20,
			    // align:'left',
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
//		            magicType : {show: true, type: ['line', 'bar']},
//		            restore : {show: true},
//		            saveAsImage : {show: true}
//		        }
//		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
		            axisLine:{  
                        lineStyle:{  
                            color:'#0087ED',  
                            width:5,//这里是为了突出显示加上的  
                        }  
                    } , 
		            axisLabel: {
                        show: true,
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
		            axisLabel : {
		            	show: true,
                        textStyle: {
                            color: '#99d9ea',
                            fontSize:45
                        },
		                formatter: '{value} 万千瓦'
		            }
		        }
		    ],
		    series : [
		        {
		            name:'全网最大负荷',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		            symbol:'none',  //这句就是去掉点的  
		            smooth:false,  //这句就是让曲线变平滑的 
		            itemStyle : {
	                    normal : {
	                        lineStyle:{
	                            width:5,//折线宽度
	                            color:"#cc00cc"//折线颜色
	                        }
	                    }
	                },
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'配网最大负荷',
		            type:'line',
		            data:[1, 4, 2, 5, 3, 2, 0],
		            symbol:'none',  //这句就是去掉点的  
		            smooth:false,  //这句就是让曲线变平滑的 
		            itemStyle : {
	                    normal : {
	                        lineStyle:{
	                            width:5,//折线宽度
	                            color:"#ffff33"//折线颜色
	                        }
	                    }
	                },
	                markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        }
		    ]
		};
		                    
	if(data!=null){
		option.xAxis[0].data=data.chart3.xcol;
		option.series[0].data=data.chart3.ywhole;
		option.series[1].data=data.chart3.yassist;
	}	  
	myChart.setOption(option);

}

/**
 * 右边第一个板块数据填充
 * @param data
 * @returns
 */
function r1Data(data){
	var arr=data.r1Data;
	var html='';
	var qiuyu=arr.length%4;
	var hang=0;
	if(qiuyu==0){
		hang=arr.length/4;
	}else{
		hang=arr.length/4+1;
	}
	for(var i=0;i<4;i++){
		var start=i*4;
		html+=r1DataHang(arr[start],arr[start+1],arr[start+2],arr[start+3]);
	}
	$("#r1DataDiv").html(html);
}

function r1DataHang(row0,row1,row2,row3){
	var row0s=row0.split(",");
	var row1s=row1.split(",");
	var row2s=row2.split(",");
	var row3s=row3.split(",");
	var html='';
	html+='<ul class="dataRow">'+
	'										<li>'+
	'												<p class="fl groupBtn_l tnp"><span class="numberStyle02 numSize02" style="">'+row0s[0]+'</span>万千瓦</p>'+
	'												<p class="groupBtn_r fl tnp">'+row0s[1]+'</p>'+
	'												<div class="clear"></div>'+
	'										</li>'+
	'										<li>'+
	'												<p class="fl groupBtn_l tnp"><span class="numberStyle02 numSize02" style="">'+row1s[0]+'</span>万千瓦</p>'+
	'												<p class="groupBtn_r fl tnp">'+row1s[1]+'</p>'+
	'												<div class="clear"></div>'+
	'										</li>'+
	'										<li>'+
	'												<p class="fl groupBtn_l tnp"><span class="numberStyle02 numSize02" style="">'+row2s[0]+'</span>万千瓦</p>'+
	'												<p class="groupBtn_r fl tnp">'+row2s[1]+'</p>'+
	'												<div class="clear"></div>'+
	'										</li>'+
	'										<li>'+
	'												<p class="fl groupBtn_l tnp"><span class="numberStyle02 numSize02" style="">'+row3s[0]+'</span>万千瓦</p>'+
	'												<p class="groupBtn_r fl tnp">'+row3s[1]+'</p>'+
	'												<div class="clear"></div>'+
	'										</li>'+
	'										<div class="clear"></div>'+
	'								</ul>';
	return html;
}

/**
 * 右边第二个板块数据填充
 * @param data
 * @returns
 */
function r2Data(data){
	var  arr=data.r2Data;
	var html='';
	html+='<div>'+
	'										<table width="100%" border="0" cellspacing="10" cellpadding="0" class="module03_table">'+
	'												<tr>'+
	'														<th width="400">编号</th>'+
	'														<th width="500">主送单位</th>'+
	'														<th width="500">风险等级</th>'+
	'														<th width="400">预警事由</th>'+
	'														<th>检修时段</th>'+
	'														<th width="200">风险状态</th>'+
	'												</tr>'+
	'										</table>'+
	'								</div>';
	for(var i=0;i<4;i++){
		var num=Math.floor(Math.random()*arr.length);//随机0----9
		html+= r2DataRow(arr[num]);
	}
	$("#r2DataDiv").html(html);
}

function r2DataRow(row){
	var objs=row.split(",");
	var html='<div class="decorate_tr">'+
	'										<table width="100%" border="0" cellspacing="10" cellpadding="0" class="table_layout">'+
	'												<tbody><tr>'+
	'														<td class="textColor03 td_nowrap" width="400">'+objs[0]+'</td>'+
	'														<td width="500" class="td_nowrap">'+objs[1]+'</td>'+
	'														<td width="500" class="td_nowrap">'+objs[2]+'</td>'+
	'														<td width="400" class="td_nowrap">'+objs[3]+'</td>'+
	'														<td>'+objs[4]+'</td>'+
	'														<td width="200">'+objs[5]+'</td>'+
	'												</tr>'+
	'										</tbody></table>'+
	'								</div>';
	return html;
}

function ajaxCharts(){
	$.get('/index02Config',function(data){
		chart1(data);
		chart2(data);
		chart3(data);
		r1Data(data);
		r2Data(data);
		initEvent(data);
	},'json');
}
