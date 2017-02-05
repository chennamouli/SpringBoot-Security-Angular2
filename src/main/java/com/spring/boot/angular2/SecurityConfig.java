/**
 * 
 */
package com.spring.boot.angular2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * 
 * @author cgajam01
 */
@Configuration
@EnableWebSecurity
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http		
			.authorizeRequests()
	        .antMatchers("/resources/**").permitAll()	        	       
			//.antMatchers("/home/**", "/ptinquiry/**").fullyAuthenticated()			
			.antMatchers("/dashboard/**").hasRole("ADMIN")
			//.antMatchers("POST", "/add").hasRole("ADMIN")
			.anyRequest().fullyAuthenticated()
			//.anyRequest().permitAll()	//testing only
			.and()
		.formLogin()
			.loginPage("/login")//.successForwardUrl("/home")
			.failureUrl("/login?error")
			.permitAll()
			.and()
		.logout().logoutSuccessUrl("/login?logout").permitAll();
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
			.withUser("admin").password("admin").roles("ADMIN", "USER")
			.and()
			.withUser("user").password("user").roles("USER");
	}
/*
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
			.withUser("admin").password("admin").roles("ADMIN", "USER")
			.and()
			.withUser("user").password("user").roles("USER");
	}*/

}