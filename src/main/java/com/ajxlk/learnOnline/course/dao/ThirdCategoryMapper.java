package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.ThirdCategory;

public interface ThirdCategoryMapper {
    int deleteByPrimaryKey(Integer categoryThridId);

    int insert(ThirdCategory record);

    int insertSelective(ThirdCategory record);

    ThirdCategory selectByPrimaryKey(Integer categoryThridId);

    int updateByPrimaryKeySelective(ThirdCategory record);

    int updateByPrimaryKey(ThirdCategory record);
}