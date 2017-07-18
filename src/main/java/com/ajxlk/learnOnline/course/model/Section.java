package com.ajxlk.learnOnline.course.model;

public class Section {
    private Integer sectionid;

    private Integer chapterid;

    private String sectionname;

    private Integer sectionduration;

    public Integer getSectionid() {
        return sectionid;
    }

    public void setSectionid(Integer sectionid) {
        this.sectionid = sectionid;
    }

    public Integer getChapterid() {
        return chapterid;
    }

    public void setChapterid(Integer chapterid) {
        this.chapterid = chapterid;
    }

    public String getSectionname() {
        return sectionname;
    }

    public void setSectionname(String sectionname) {
        this.sectionname = sectionname == null ? null : sectionname.trim();
    }

    public Integer getSectionduration() {
        return sectionduration;
    }

    public void setSectionduration(Integer sectionduration) {
        this.sectionduration = sectionduration;
    }
}