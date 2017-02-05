package com.spring.boot.angular2.controller;


import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/rest")
public class SampleRestController {
	@RequestMapping(value="/info", method=RequestMethod.GET, produces={MediaType.APPLICATION_JSON_VALUE} )
	public Object info(Authentication auth) {
		return auth.getPrincipal();
	}

}
