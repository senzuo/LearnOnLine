package com.ajxlk.learnOnline.user.dao;

import com.ajxlk.learnOnline.user.model.Teacher;

public interface TeacherMapper {
    int deleteByPrimaryKey(Integer teacherid);

    int insert(Teacher record);

    int insertSelective(Teacher record);

    Teacher selectByPrimaryKey(Integer teacherid);

    int updateByPrimaryKeySelective(Teacher record);

    int updateByPrimaryKey(Teacher record);
}