package com.ajxlk.learnOnline.course.model;

public class Video {
    private Integer videoId;

    private Integer sectionId;

    private String videoName;

    private String url;

    private Integer durition;

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public String getVideoName() {
        return videoName;
    }

    public void setVideoName(String videoName) {
        this.videoName = videoName == null ? null : videoName.trim();
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