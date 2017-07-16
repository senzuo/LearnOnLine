package com.ajxlk.learnOnline.user.admin;

import com.ajxlk.learnOnline.user.service.AdminService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by Administrator on 7/14/2017.
 */
public class Test {
    public static void main(String[] args) {
        String[] locations = {"spring.xml"};
        ApplicationContext ctx =
                new ClassPathXmlApplicationContext(locations);
        AdminService adminService = (AdminService) ctx.getBean("service");
        System.out.println(adminService);
    }
}
