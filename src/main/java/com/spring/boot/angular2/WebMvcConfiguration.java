/**
 * 
 */
package com.spring.boot.angular2;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 
 * @author cgajam01
 */
@Configuration
public class WebMvcConfiguration extends WebMvcConfigurerAdapter {

//	@Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/index.html").addResourceLocations("classpath:/static/index.html");
//        super.addResourceHandlers(registry);
//    }
//
//    @Bean
//    public ViewResolver viewResolver() {
//        UrlBasedViewResolver viewResolver = new UrlBasedViewResolver();
//        viewResolver.setViewClass(InternalResourceView.class);
//        return viewResolver;
//    }
	
	
	/**
	 * http://stackoverflow.com/questions/39331929/spring-catch-all-route-for-index-html
	 * http://stackoverflow.com/questions/28585913/spring-mvc-catch-all-route-but-only-unknown-routes#answer-28633189
	 * @return
	 */
	@Bean
    public EmbeddedServletContainerCustomizer notFoundCustomizer(){
        return new NotFoundIndexTemplate();
    }

    private static class NotFoundIndexTemplate implements EmbeddedServletContainerCustomizer {
        @Override
        public void customize(ConfigurableEmbeddedServletContainer container) {
        	System.out.println("Inside NotFoundIndexTemplate.customize ########################################");
            container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/"));
        }
    }
    
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		//https://github.com/spring-guides/tut-spring-security-and-angular-js/issues/68
		//registry.addViewController("/{[path:[^\\.]*}").setViewName("index");
		//registry.addViewController("/{[path:[^\\.]*}").setViewName("index");
		registry.addViewController("/login").setViewName("login");
		//registry.addViewController("/logout").setViewName("logout");
		registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
	}
}