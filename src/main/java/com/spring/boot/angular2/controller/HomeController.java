package com.spring.boot.angular2.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class HomeController extends BaseController {

	@GetMapping
	public ModelAndView home(Model model) {
		return new ModelAndView("index");
	}

	@RequestMapping(value = { "/home" })
	public ModelAndView home2(Model model) {
		return new ModelAndView("index");
	}

	/*
	 * http://websystique.com/spring-security/spring-security-4-logout-example/
	 */
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}
		return "redirect:/login?logout";// You can redirect wherever you want,
										// but generally it's a good practice to
										// show login screen again.
	}

}
