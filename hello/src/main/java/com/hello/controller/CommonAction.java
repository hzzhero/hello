package com.hello.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hello.common.Constant;


/**
 * 只处理单纯的跳转
 * @author hzz
 *
 */
@Controller
public class CommonAction {
	
	public static Logger logger=LoggerFactory.getLogger(CommonAction.class);
	
	@RequestMapping("/jobHome")
	public String  jobHome() {
		return "job/jobHome";
	}
	
	@RequestMapping("/index01")
	public String  index01() {
		return "index01";
	}
	
	@RequestMapping("/index02")
	public String  index02() {
		return "index02";
	}
	
	@RequestMapping("/index03")
	public String  index03() {
		return "index03";
	}
	
	@RequestMapping("/welcome")
	public String  welcome(HttpServletRequest request,HttpServletResponse response,ModelMap map) {
		String welcome = request.getParameter("welcome");
		if(StringUtils.isEmpty(welcome)) {
			welcome=Constant.welcome;
			logger.info("请输入welcome参数，表示欢迎谁来参观");
		}else {
			Constant.welcome=welcome;
		}
		logger.info(welcome+"来参观指导！");
		map.put("welcome", welcome);
		return "welcome";
	}

}
