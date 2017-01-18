package com.spring.boot.angular2.controller;

import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.angular2.beans.Authorization;
import com.spring.boot.angular2.util.AuthUtils;
import com.spring.boot.angular2.util.Constants;

@RestController
public class AuthController extends BaseController {

	/*
	 * http://www.baeldung.com/get-user-in-spring-security
	 * https://paulcwarren.wordpress.com/2015/04/03/role-based-spas-with-
	 * angularjs-and-spring-hateoas/
	 */
	@RequestMapping("/auth")
	public Authorization auth(Authentication auth) {

		Authorization authorization = new Authorization();
		authorization.setAuthenticated(auth.isAuthenticated());
		authorization.setUserId(auth.getName());
		authorization.setDate(new Date());

		if (auth.isAuthenticated()) {
			// default/user access
			authorization.setHasHomePage(true);
			authorization.setHasHeroesPage(true);

			// admin access
			if (AuthUtils.hasAnyAuthority(auth, Constants.ROLE_ADMIN)) {
				authorization.setHasDashboardPage(true);
			}
		}

		return authorization;
	}
}
