package com.ajxlk.learnOnline.user.dao;

import com.ajxlk.learnOnline.user.model.Stu;

import java.util.List;

public interface StuMapper {
    int deleteByPrimaryKey(Integer stuid);

    int insert(Stu record);

    int insertSelective(Stu record);

    Stu selectByPrimaryKey(Integer stuid);

    int updateByPrimaryKeySelective(Stu record);

    int updateByPrimaryKey(Stu record);

    List<Stu> selectAllStu();

    List<Stu> selectSelectiveStu(Stu stu);

}