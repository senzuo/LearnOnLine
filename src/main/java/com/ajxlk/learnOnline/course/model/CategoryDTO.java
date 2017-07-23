package com.ajxlk.learnOnline.course.model;

import java.util.List;

/**
 * Created by Administrator on 7/22/2017.
 */
public class CategoryDTO {
    private Integer categoryId;

    private Integer categoryPid;

    private String categoryName;

    private List<List<Category>> categorys;

    public List<List<Category>> getCategorys() {
        return categorys;
    }

    public void setCategorys(List<List<Category>> categorys) {
        this.categorys = categorys;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Integer getCategoryPid() {
        return categoryPid;
    }

    public void setCategoryPid(Integer categoryPid) {
        this.categoryPid = categoryPid;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
