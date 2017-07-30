package com.ajxlk.learnOnline.record.model;

import com.ajxlk.learnOnline.course.model.Course;

import java.util.Date;

public class Plan {
    private Integer planId;

    private Integer stuId;

    private Integer courseId;

    private Date startTime;

    private String startTimeString;


    private Date endTime;

    private Integer courseDuration;

    private Integer currentDuration;

    private int leftDay;

    private Course course;

    private int percent;

    public String getStartTimeString() {
        return startTimeString;
    }

    public void setStartTimeString(String startTimeString) {
        this.startTimeString = startTimeString;
    }

    public int getLeftDay() {
        return leftDay;
    }

    public void setLeftDay(int leftDay) {
        this.leftDay = leftDay;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public int getPercent() {
        return percent;
    }

    public void setPercent(int percent) {
        this.percent = percent;
    }

    public Integer getPlanId() {
        return planId;
    }

    public void setPlanId(Integer planId) {
        this.planId = planId;
    }

    public Integer getStuId() {
        return stuId;
    }

    public void setStuId(Integer stuId) {
        this.stuId = stuId;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
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

    public Integer getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(Integer courseDuration) {
        this.courseDuration = courseDuration;
    }

    public Integer getCurrentDuration() {
        return currentDuration;
    }

    public void setCurrentDuration(Integer currentDuration) {
        this.currentDuration = currentDuration;
    }
}