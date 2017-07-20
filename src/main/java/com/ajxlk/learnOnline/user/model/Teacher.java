package com.ajxlk.learnOnline.user.model;

public class Teacher {
    private Integer teacherid;

    private String teachername;

    private String teacherbrief;

    public Integer getTeacherid() {
        return teacherid;
    }

    public void setTeacherid(Integer teacherid) {
        this.teacherid = teacherid;
    }

    public String getTeachername() {
        return teachername;
    }

    public void setTeachername(String teachername) {
        this.teachername = teachername == null ? null : teachername.trim();
    }

    public String getTeacherbrief() {
        return teacherbrief;
    }

    public void setTeacherbrief(String teacherbrief) {
        this.teacherbrief = teacherbrief == null ? null : teacherbrief.trim();
    }
}