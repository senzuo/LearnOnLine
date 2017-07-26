package com.ajxlk.learnOnline.record.model;

import java.util.Date;

public class StuLearnRecord {
    private Integer stuLearnRecordId;

    private Integer stuId;

    private Integer sectionId;

    private Integer currentTime;

    private Date startTime;

    private Date endTime;

    private Integer learnTimeLength;

    private Integer duration;

    public Integer getStuLearnRecordId() {
        return stuLearnRecordId;
    }

    public void setStuLearnRecordId(Integer stuLearnRecordId) {
        this.stuLearnRecordId = stuLearnRecordId;
    }

    public Integer getStuId() {
        return stuId;
    }

    public void setStuId(Integer stuId) {
        this.stuId = stuId;
    }

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public Integer getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(Integer currentTime) {
        this.currentTime = currentTime;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Integer getLearnTimeLength() {
        return learnTimeLength;
    }

    public void setLearnTimeLength(Integer learnTimeLength) {
        this.learnTimeLength = learnTimeLength;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }
}