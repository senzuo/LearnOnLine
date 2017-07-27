package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.SecondCategory;

public interface SecondCategoryMapper {
    int deleteByPrimaryKey(Integer categorySecondId);

    int insert(SecondCategory record);

    int insertSelective(SecondCategory record);

    SecondCategory selectByPrimaryKey(Integer categorySecondId);

    int updateByPrimaryKeySelective(SecondCategory record);

    int updateByPrimaryKey(SecondCategory record);
}