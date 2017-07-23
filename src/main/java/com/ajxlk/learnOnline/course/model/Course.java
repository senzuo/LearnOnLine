package com.ajxlk.learnOnline.course.model;

import java.util.Date;
import java.util.List;

public class Course {
    private Integer courseId;

    private String courseName;

    private String description;

    private Date createTime;

    private Integer duration;

    private String difficulty;

    private String courseCoverUrl;

    private Integer teacherId;

    private Integer hits;

    private Integer scoreNumber;

    private Integer totalScore;

    private List<Chapter> chapters;

    private String teacherName;

    private int categoryId;

    private String category_name;

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreateIime() {
        return createTime;
    }

    public void setCreateIime(Date createIime) {
        this.createTime = createIime;
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
        this.difficulty = difficulty;
    }

    public String getCourseCoverUrl() {
        return courseCoverUrl;
    }

    public void setCourseCoverUrl(String courseCoverUrl) {
        this.courseCoverUrl = courseCoverUrl;
    }

    public Integer getTeacherid() {
        return teacherId;
    }

    public void setTeacherid(Integer teacherid) {
        this.teacherId = teacherid;
    }

    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
    }

    public Integer getScoreNumber() {
        return scoreNumber;
    }

    public void setScoreNumber(Integer scoreNumber) {
        this.scoreNumber = scoreNumber;
    }

    public Integer getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(Integer totalScore) {
        this.totalScore = totalScore;
    }

    public List<Chapter> getChapters() {
        return chapters;
    }

    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public int getCategory_id() {
        return categoryId;
    }

    public void setCategory_id(int category_id) {
        this.categoryId = category_id;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    @Override
    public String toString() {
        return "Course{" +
                "courseId=" + courseId +
                ", courseName='" + courseName + '\'' +
                ", description='" + description + '\'' +
                ", createTime=" + createTime +
                ", duration=" + duration +
                ", difficulty='" + difficulty + '\'' +
                ", courseCoverUrl='" + courseCoverUrl + '\'' +
                ", teacherId=" + teacherId +
                ", hits=" + hits +
                ", scoreNumber=" + scoreNumber +
                ", totalScore=" + totalScore +
                ", chapters=" + chapters +
                ", teacherName='" + teacherName + '\'' +
                ", categoryId=" + categoryId +
                ", category_name='" + category_name + '\'' +
                '}';
    }
}