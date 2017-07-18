package com.ajxlk.learnOnline.course.model;

public class Chapter {
    private Integer chapterid;

    private Integer courseid;

    private String chaptername;

    private Integer chapterduration;

    public Integer getChapterid() {
        return chapterid;
    }

    public void setChapterid(Integer chapterid) {
        this.chapterid = chapterid;
    }

    public Integer getCourseid() {
        return courseid;
    }

    public void setCourseid(Integer courseid) {
        this.courseid = courseid;
    }

    public String getChaptername() {
        return chaptername;
    }

    public void setChaptername(String chaptername) {
        this.chaptername = chaptername == null ? null : chaptername.trim();
    }

    public Integer getChapterduration() {
        return chapterduration;
    }

    public void setChapterduration(Integer chapterduration) {
        this.chapterduration = chapterduration;
    }
}