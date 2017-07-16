package com.ajxlk.learnOnline.course.model;

import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class Comment {
    private Integer id;

    private Integer pid;

    private Integer reviewerid;

    private Date createtime;

    private Integer zan;

    private Integer index;

    private Integer courseid;

    private String content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public Integer getReviewerid() {
        return reviewerid;
    }

    public void setReviewerid(Integer reviewerid) {
        this.reviewerid = reviewerid;
    }

    public String getCreatetime() {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateString = formatter.format(createtime);
        return dateString;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Integer getZan() {
        return zan;
    }

    public void setZan(Integer zan) {
        this.zan = zan;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public Integer getCourseid() {
        return courseid;
    }

    public void setCourseid(Integer courseid) {
        this.courseid = courseid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", pid=" + pid +
                ", reviewerid=" + reviewerid +
                ", createtime=" + createtime +
                ", zan=" + zan +
                ", index=" + index +
                ", courseid=" + courseid +
                ", content='" + content + '\'' +
                '}';
    }
}