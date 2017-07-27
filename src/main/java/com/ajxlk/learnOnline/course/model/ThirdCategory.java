package com.ajxlk.learnOnline.course.model;

public class ThirdCategory {
    private Integer categoryThridId;

    private Integer categoryThirdPid;

    private String categoryThirdName;

    public Integer getCategoryThridId() {
        return categoryThridId;
    }

    public void setCategoryThridId(Integer categoryThridId) {
        this.categoryThridId = categoryThridId;
    }

    public Integer getCategoryThirdPid() {
        return categoryThirdPid;
    }

    public void setCategoryThirdPid(Integer categoryThirdPid) {
        this.categoryThirdPid = categoryThirdPid;
    }

    public String getCategoryThirdName() {
        return categoryThirdName;
    }

    public void setCategoryThirdName(String categoryThirdName) {
        this.categoryThirdName = categoryThirdName == null ? null : categoryThirdName.trim();
    }
}