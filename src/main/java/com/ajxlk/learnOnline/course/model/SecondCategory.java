package com.ajxlk.learnOnline.course.model;

public class SecondCategory {
    private Integer categorySecondId;

    private Integer categorySecondPid;

    private String categorySecondName;

    public Integer getCategorySecondId() {
        return categorySecondId;
    }

    public void setCategorySecondId(Integer categorySecondId) {
        this.categorySecondId = categorySecondId;
    }

    public Integer getCategorySecondPid() {
        return categorySecondPid;
    }

    public void setCategorySecondPid(Integer categorySecondPid) {
        this.categorySecondPid = categorySecondPid;
    }

    public String getCategorySecondName() {
        return categorySecondName;
    }

    public void setCategorySecondName(String categorySecondName) {
        this.categorySecondName = categorySecondName == null ? null : categorySecondName.trim();
    }
}