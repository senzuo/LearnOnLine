package com.ajxlk.learnOnline.course.model;

import java.util.Date;

public class Comment {
    private Integer id;

    private Integer pid;

    private Integer reviewerid;

    private Date createtime;

    private Integer zan;

    private Integer sectionid;

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

    public Date getCreatetime() {
        return createtime;
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

    public Integer getSectionid() {
        return sectionid;
    }

    public void setSectionid(Integer sectionid) {
        this.sectionid = sectionid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}