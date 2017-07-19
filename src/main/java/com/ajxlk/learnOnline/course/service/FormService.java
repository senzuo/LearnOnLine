package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.CommentMapper;
import com.ajxlk.learnOnline.course.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 7/15/2017.
 */
@Service
public class FormService {


    @Autowired
    private CommentMapper commentMapper;

    public void addComment(Comment comment) {
        commentMapper.insertSelective(comment);
    }

    public List<Comment> getCommentByCourse(int CourseId) {
        return commentMapper.getCommentByCourse(CourseId);
    }
}
