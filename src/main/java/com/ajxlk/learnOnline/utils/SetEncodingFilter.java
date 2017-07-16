package com.ajxlk.learnOnline.utils;

/**
 * Created by Administrator on 7/16/2017.
 */
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
/**
 * 请求中中文字符串过滤类
 */
public class SetEncodingFilter implements Filter {
    public void init(FilterConfig filterConfig) throws ServletException {
    }
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        System.out.println("请求转码过滤器===================");
        request.setCharacterEncoding("utf-8");
        chain.doFilter(request, response);
    }
    public void destroy() {
    }
}