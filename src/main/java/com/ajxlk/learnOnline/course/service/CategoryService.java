package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.CategoryMapper;
import com.ajxlk.learnOnline.course.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 7/22/2017.
 */
@Service
public class CategoryService {
    @Autowired
    private CategoryMapper categoryMapper;

    public List<Category> getAllFirstCategory() {
        return categoryMapper.getAllFirstCategory();
    }

    public List<Category> getAllSubCategory(int pid) {
        return categoryMapper.getAllSubCategory(pid);
    }
}
