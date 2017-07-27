package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.FirstCategory;

public interface FirstCategoryMapper {
    int deleteByPrimaryKey(Integer categoryFirstId);

    int insert(FirstCategory record);

    int insertSelective(FirstCategory record);

    FirstCategory selectByPrimaryKey(Integer categoryFirstId);

    int updateByPrimaryKeySelective(FirstCategory record);

    int updateByPrimaryKey(FirstCategory record);
}