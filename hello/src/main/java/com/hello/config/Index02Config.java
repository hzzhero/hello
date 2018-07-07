package com.hello.config;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component  
@ConfigurationProperties(prefix="demodata.index02")
public class Index02Config {
	
	 private Map<String, List<Object>> chart1 = new HashMap();
	 
	 private Map<String, List<Object>> chart2 = new HashMap();
	 
	 private Map<String, List<Object>> chart3 = new HashMap();
	 
	 private Map<String, String> region = new HashMap();
	 
	 private List<String> r1Data = new ArrayList();
	 
	 private List<String> r2Data = new ArrayList();

	public Map<String, List<Object>> getChart1() {
		return chart1;
	}

	public void setChart1(Map<String, List<Object>> chart1) {
		this.chart1 = chart1;
	}

	public Map<String, List<Object>> getChart3() {
		return chart3;
	}

	public void setChart3(Map<String, List<Object>> chart3) {
		this.chart3 = chart3;
	}

	public Map<String, List<Object>> getChart2() {
		return chart2;
	}

	public void setChart2(Map<String, List<Object>> chart2) {
		this.chart2 = chart2;
	}

	public Map<String, String> getRegion() {
		return region;
	}

	public void setRegion(Map<String, String> region) {
		this.region = region;
	}

	public List<String> getR1Data() {
		return r1Data;
	}

	public void setR1Data(List<String> r1Data) {
		this.r1Data = r1Data;
	}

	public List<String> getR2Data() {
		return r2Data;
	}

	public void setR2Data(List<String> r2Data) {
		this.r2Data = r2Data;
	}
	

}
