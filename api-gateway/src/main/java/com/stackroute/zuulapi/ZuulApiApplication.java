package com.stackroute.zuulapi;

import com.stackroute.zuulapi.pre.SimpleFilter;
import org.apache.catalina.Context;
import org.apache.catalina.connector.Connector;
import org.apache.tomcat.util.descriptor.web.SecurityCollection;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.cloud.netflix.zuul.EnableZuulServer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableZuulProxy
public class ZuulApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZuulApiApplication.class, args);
	}

//	@Bean
//	public SimpleFilter simpleFilter(){
//		return new SimpleFilter();
//	}
//
//	private final static String SECURITY_USER_CONSTRAINT = "CONFIDENTIAL";
//	private final static String REDIRECT_PATTERN = "/*";
//	private final static String CONNECTOR_PROTOCOL = "org.apache.coyote.http11.Http11NioProtocol";
//	private final static String CONNECTOR_SCHEME = "http";
//
//	@Bean
//	public ServletWebServerFactory createServletContainer(){
//		TomcatServletWebServerFactory tomcat =
//				new TomcatServletWebServerFactory() {
//
//					@Override
//					protected void postProcessContext(Context context) {
//						SecurityConstraint securityConstraint = new SecurityConstraint();
//						securityConstraint.setUserConstraint(SECURITY_USER_CONSTRAINT);
//						SecurityCollection collection = new SecurityCollection();
//						collection.addPattern(REDIRECT_PATTERN);
//						securityConstraint.addCollection(collection);
//						context.addConstraint(securityConstraint);
//					}
//				};
//		tomcat.addAdditionalTomcatConnectors(createHttpConnector());
//		return tomcat;
//	}
//
//	private Connector createHttpConnector() {
//		Connector connector =
//				new Connector(CONNECTOR_PROTOCOL);
//		connector.setScheme(CONNECTOR_SCHEME);
//		connector.setSecure(false);
//		connector.setPort(8080);
//		connector.setRedirectPort(8443);
//		return connector;
//	}
}
