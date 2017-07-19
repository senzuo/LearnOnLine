package com.ajxlk.learnOnline.course.model;

import java.util.List;

public class Chapter {
    private Integer chapterid;

    private Integer courseid;

    private String chaptername;

    private Integer chapterduration;

    private List<Section> sections;

    public List<Section> getSections() {
        return sections;
    }

    public void setSections(List<Section> sections) {
        this.sections = sections;
    }

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