package com.ajxlk.learnOnline.course.controller;

import com.ajxlk.learnOnline.course.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 申卓 on 2017/7/21.
 */

@Controller
public class AdminCourseManage {
    @Autowired
    private CourseService courseService;

    @RequestMapping("/courseManage")
    public String courseManage() {
        return "admin/courseManage";
    }
}
