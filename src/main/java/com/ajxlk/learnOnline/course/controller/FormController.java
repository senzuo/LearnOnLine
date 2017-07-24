package com.ajxlk.learnOnline.course.controller;

import com.ajxlk.learnOnline.course.model.Comment;
import com.ajxlk.learnOnline.course.model.CommentDTO;
import com.ajxlk.learnOnline.course.service.FormService;
import com.ajxlk.learnOnline.user.model.Stu;
import com.ajxlk.learnOnline.user.service.StuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
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

    @Autowired
    private StuService stuService;

    @RequestMapping(value = "/form", method = RequestMethod.GET)
    @ResponseBody
    public List<CommentDTO> form(@RequestParam int sectionId) {

        List<Comment> comments = formService.getCommentBySectionId(sectionId);

        List<CommentDTO> commentDTOs = new ArrayList<>(comments.size());

        CommentDTO commentDTO = null;
        Stu stu = null;
        for (Comment comment : comments) {
            commentDTO = new CommentDTO();
            commentDTO.setComment(comment);
            stu = stuService.findByID(comment.getReviewerid());
            commentDTO.setStu(stu);
            commentDTOs.add(commentDTO);
        }

        return commentDTOs;
    }

    /**
     * @param content
     * @param stuid
     * @return
     */
    @RequestMapping("/{courseId}/form/add")
    @ResponseBody
    public void addComment(@RequestParam String content, @RequestParam int stuid) {
        Comment comment = new Comment();
        comment.setReviewerid(stuid);
        comment.setContent(content);
        comment.setCreatetime(new Date());
        comment.setSectionid(1);
        comment.setPid(-1);

        System.out.println(comment);
        System.out.println(comment);
        System.out.println(comment);
        System.out.println(comment);
        System.out.println(comment);
        System.out.println(comment);

        formService.addComment(comment);
//        return "redirect:/course/form";
    }
}
