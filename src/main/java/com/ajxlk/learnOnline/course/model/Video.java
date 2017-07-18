package com.ajxlk.learnOnline.course.model;

public class Video {
    private Integer videoid;

    private Integer sectionid;

    private Integer index;

    private String url;

    private Integer durition;

    public Integer getVideoid() {
        return videoid;
    }

    public void setVideoid(Integer videoid) {
        this.videoid = videoid;
    }

    public Integer getSectionid() {
        return sectionid;
    }

    public void setSectionid(Integer sectionid) {
        this.sectionid = sectionid;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }

    public Integer getDurition() {
        return durition;
    }

    public void setDurition(Integer durition) {
        this.durition = durition;
    }
}