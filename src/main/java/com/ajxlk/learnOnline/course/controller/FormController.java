package com.ajxlk.learnOnline.course.controller;

import com.ajxlk.learnOnline.course.model.Comment;
import com.ajxlk.learnOnline.course.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 7/15/2017.
 */

@Controller
@RequestMapping("/course")
public class FormController {

    @Autowired
    private FormService formService;

    @RequestMapping(value = "/form", method = RequestMethod.GET)
    @ResponseBody
    public List<Comment> form(int CourseId) {

        return formService.getCommentByCourse(CourseId);
    }

    @RequestMapping("/form/add")
    public String addComment(@RequestParam String content){
        Comment comment =new Comment();
        comment.setReviewerid(1);
        comment.setContent(content);
        comment.setCreatetime(new Date());
        comment.setCourseid(1);
        comment.setPid(-1);

        System.out.println(comment);

        formService.addComment(comment);
        return "redirect:/course/form";
    }
}
