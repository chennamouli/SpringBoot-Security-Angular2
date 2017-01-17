package com.spring.boot.angular2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class HomeController extends BaseController{

@GetMapping
	public ModelAndView home(Model model) {
		return new ModelAndView("index");
	}

	@RequestMapping(value = { "/home" })
	public ModelAndView home2(Model model) {
		return new ModelAndView("index");
	}

}
