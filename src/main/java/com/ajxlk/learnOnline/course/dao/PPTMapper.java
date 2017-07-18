package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.PPT;

public interface PPTMapper {
    int deleteByPrimaryKey(Integer pptid);

    int insert(PPT record);

    int insertSelective(PPT record);

    PPT selectByPrimaryKey(Integer pptid);

    int updateByPrimaryKeySelective(PPT record);

    int updateByPrimaryKey(PPT record);
}