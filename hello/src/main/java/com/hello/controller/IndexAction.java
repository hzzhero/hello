package com.hello.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hello.config.Index01Config;
import com.hello.config.Index02Config;

@RestController
public class IndexAction {
	
	@Autowired
	private Index01Config index01Config;
	@Autowired
	private Index02Config index02Config;
	
	@RequestMapping("/index01Config")
	public Object index01Config() {
		return index01Config;
	}
	
	@RequestMapping("/index02Config")
	public Object index02Config() {
		return index02Config;
	}

}
