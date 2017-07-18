package com.ajxlk.learnOnline.course.model;

public class PPT {
    private Integer pptid;

    private Integer sectionid;

    private String url;

    private Integer index;

    public Integer getPptid() {
        return pptid;
    }

    public void setPptid(Integer pptid) {
        this.pptid = pptid;
    }

    public Integer getSectionid() {
        return sectionid;
    }

    public void setSectionid(Integer sectionid) {
        this.sectionid = sectionid;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }
}