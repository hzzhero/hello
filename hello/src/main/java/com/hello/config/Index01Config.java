package com.hello.config;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component  
@ConfigurationProperties(prefix="demodata.index01")
public class Index01Config {
	
	private  Map<String,List<Object>>  chart1=new HashMap<>();
	
	private  Map<String,List<Object>>  chart2=new HashMap<>();
	
	private  Map<String,List<Object>>  chart3=new HashMap<>();
	
	private Map<String, String> region = new HashMap();
	
	private  Map<String,List<Object>>  rect=new HashMap<>();

	public Map<String, List<Object>> getChart1() {
		return chart1;
	}

	public Map<String, List<Object>> getChart2() {
		return chart2;
	}

	public void setChart2(Map<String, List<Object>> chart2) {
		this.chart2 = chart2;
	}

	public Map<String, List<Object>> getChart3() {
		return chart3;
	}

	public void setChart3(Map<String, List<Object>> chart3) {
		this.chart3 = chart3;
	}

	public void setChart1(Map<String, List<Object>> chart1) {
		this.chart1 = chart1;
	}

	public Map<String, String> getRegion() {
		return region;
	}

	public void setRegion(Map<String, String> region) {
		this.region = region;
	}

	public Map<String, List<Object>> getRect() {
		return rect;
	}

	public void setRect(Map<String, List<Object>> rect) {
		this.rect = rect;
	}

}
