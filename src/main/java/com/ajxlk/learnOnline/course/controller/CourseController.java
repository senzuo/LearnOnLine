package com.ajxlk.learnOnline.course.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Administrator on 7/17/2017.
 */
@Controller
@RequestMapping("/course")
public class CourseController {
    @RequestMapping("/t")
    public String test(){
        return "course/courseDetail";
    }
}
