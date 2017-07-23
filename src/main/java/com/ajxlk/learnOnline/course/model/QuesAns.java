package com.ajxlk.learnOnline.course.model;

import com.ajxlk.learnOnline.user.model.Stu;

import java.util.Date;
import java.util.List;

public class QuesAns {
    private Integer quesAnsId;

    private Integer pid;

    private Integer sectionId;

    private Integer reviewerId;

    private Integer zan;

    private Date createTime;

    private String content;

    private List<QuesAns> subQuesAnss;

    private Stu stu;

    public Stu getStu() {
        return stu;
    }

    public void setStu(Stu stu) {
        this.stu = stu;
    }

    public Integer getQuesAnsId() {
        return quesAnsId;
    }

    public void setQuesAnsId(Integer quesAnsId) {
        this.quesAnsId = quesAnsId;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public Integer getReviewerId() {
        return reviewerId;
    }

    public void setReviewerId(Integer reviewerId) {
        this.reviewerId = reviewerId;
    }

    public Integer getZan() {
        return zan;
    }

    public void setZan(Integer zan) {
        this.zan = zan;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public List<QuesAns> getSubQuesAnss() {
        return subQuesAnss;
    }

    public void setSubQuesAnss(List<QuesAns> subQuesAnss) {
        this.subQuesAnss = subQuesAnss;
    }
}