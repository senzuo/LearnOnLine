package com.ajxlk.learnOnline.course.model;

import com.ajxlk.learnOnline.user.model.Stu;


/**
 * Created by 申卓 on 2017/7/20.
 */
public class CommentDTO {
   private Stu stu;
   private Comment comment;

    public Stu getStu() {
        return stu;
    }

    public void setStu(Stu stu) {
        this.stu = stu;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }
}
