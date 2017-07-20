package com.ajxlk.learnOnline.course.model;

import java.util.Date;
import java.util.List;

public class Course {
    private Integer courseid;

    private String coursename;

    private String description;

    private Date createtime;

    private Integer duration;

    private String difficulty;

    private String coursecoverurl;

    private Integer teacherid;

    private Integer hits;

    private Integer scorenumber;

    private Integer totalscore;

    private List<Chapter> chapters;

    public List<Chapter> getChapters() {
        return chapters;
    }

    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
    }

    public Integer getCourseid() {
        return courseid;
    }

    public void setCourseid(Integer courseid) {
        this.courseid = courseid;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename == null ? null : coursename.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty == null ? null : difficulty.trim();
    }

    public String getCoursecoverurl() {
        return coursecoverurl;
    }

    public void setCoursecoverurl(String coursecoverurl) {
        this.coursecoverurl = coursecoverurl == null ? null : coursecoverurl.trim();
    }

    public Integer getTeacherid() {
        return teacherid;
    }

    public void setTeacherid(Integer teacherid) {
        this.teacherid = teacherid;
    }

    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
    }

    public Integer getScorenumber() {
        return scorenumber;
    }

    public void setScorenumber(Integer scorenumber) {
        this.scorenumber = scorenumber;
    }

    public Integer getTotalscore() {
        return totalscore;
    }

    public void setTotalscore(Integer totalscore) {
        this.totalscore = totalscore;
    }
}