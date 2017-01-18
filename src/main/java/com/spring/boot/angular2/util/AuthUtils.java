package com.spring.boot.angular2.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

public final class AuthUtils {

	private AuthUtils() {
	}

	public static boolean hasAnyAuthority(Authentication auth, String... roles) {
		if (auth == null)
			return false;

		for (GrantedAuthority grant : auth.getAuthorities()) {
			System.out.println("Grant: "+grant.getAuthority().toString());
			for (String role : roles) {
				if (grant.getAuthority().equals(role))
					return true;
			}
		}
		return false;
	}
}
