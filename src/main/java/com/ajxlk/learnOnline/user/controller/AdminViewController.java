package com.ajxlk.learnOnline.user.controller;


import com.ajxlk.learnOnline.user.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

/**
 * Created by Administrator on 2016/3/2.
 */
@Controller
@RequestMapping("/admin/view")
public class AdminViewController {

    @Autowired
    private AdminService adminService;

//    @RequestMapping("/login")
//    public String toLogin(HttpSession session, Model model) {
//        Admin admin = (Admin)session.getAttribute(Constant.SESSION_ADMIN);
//        if(admin != null){
//            model.addAttribute("adminName",admin.getName());
//            model.addAttribute("adminId",admin.getId());
//            return "admin/index";
//        }
//        return "admin/login";
//    }

    @RequestMapping("/index")
//    @AdminAuth
    public String toIndex(HttpSession session, Model model) {
//        Admin admin = (Admin)session.getAttribute(Constant.SESSION_ADMIN);
//        if(admin != null){
//            model.addAttribute("adminName",admin.getName());
//            model.addAttribute("adminId",admin.getId());
//        }
        return "admin/index";
    }

    @RequestMapping("/userManager")
//    @AdminAuth
    public String toUserManager(HttpSession session, Model model) {
//        Admin admin = (Admin)session.getAttribute(Constant.SESSION_ADMIN);
//        if(admin != null){
//            model.addAttribute("adminName",admin.getName());
//            model.addAttribute("adminId",admin.getId());
//        }
        return "admin/userManager";
    }
//
//    @RequestMapping("/houseManager")
//    @AdminAuth
//    public String toHouseManager(HttpSession session, Model model) {
//        Admin admin = (Admin)session.getAttribute(Constant.SESSION_ADMIN);
//        if(admin != null){
//            model.addAttribute("adminName",admin.getName());
//            model.addAttribute("adminId",admin.getId());
//        }
//        return "admin/houseManager";
//    }
//
//    @RequestMapping("/houseUserManager")
//    @AdminAuth
//    public String toHouseUserManager(HttpSession session, Model model) {
//        Admin admin = (Admin)session.getAttribute(Constant.SESSION_ADMIN);
//        if(admin != null){
//            model.addAttribute("adminName",admin.getName());
//            model.addAttribute("adminId",admin.getId());
//        }
//        return "admin/houseUserManager";
//    }
//
//    @RequestMapping("/progressManager")
//    @AdminAuth
//    public String toPrograsManager(HttpSession session, Model model) {
//        Admin admin = (Admin)session.getAttribute(Constant.SESSION_ADMIN);
//        if(admin != null){
//            model.addAttribute("adminName",admin.getName());
//            model.addAttribute("adminId",admin.getId());
//        }
//        return "admin/progressManager";
//    }
//
//    @RequestMapping("/nodeManager")
//    @AdminAuth
//    public String toNodeManager(HttpSession session, Model model) {
//        Admin admin = (Admin)session.getAttribute(Constant.SESSION_ADMIN);
//        if(admin != null){
//            model.addAttribute("adminName",admin.getName());
//            model.addAttribute("adminId",admin.getId());
//        }
//        return "admin/nodeManager";
//    }
//
//    @RequestMapping("/adminManager")
//    @AdminAuth
//    public String toAdminManager(HttpSession session, Model model) {
//        Admin admin = (Admin)session.getAttribute(Constant.SESSION_ADMIN);
//        if(admin != null){
//            model.addAttribute("adminName",admin.getName());
//            model.addAttribute("adminId",admin.getId());
//        }
//        return "admin/adminManager";
//    }
}
