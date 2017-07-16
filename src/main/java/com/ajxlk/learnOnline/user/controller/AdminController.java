package com.ajxlk.learnOnline.user.controller;

import com.ajxlk.learnOnline.user.model.Admin;
import com.ajxlk.learnOnline.user.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Administrator on 7/14/2017.
 */
@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    /**
     * 测试 mybatis 读取 一个 admin
     * @return
     */
    @RequestMapping("/test")
    @ResponseBody
    public Admin selectByPrimaryKey(){
        Admin admin = adminService.selectByPrimaryKey(1);
        System.out.println(admin);
        return admin;
    }

}
