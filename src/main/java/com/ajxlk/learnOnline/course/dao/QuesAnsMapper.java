package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.QuesAns;

import java.util.List;

public interface QuesAnsMapper {
    int deleteByPrimaryKey(Integer quesAnsId);

    int insert(QuesAns record);

    int insertSelective(QuesAns record);

    QuesAns selectByPrimaryKey(Integer quesAnsId);

    int updateByPrimaryKeySelective(QuesAns record);

    int updateByPrimaryKey(QuesAns record);

    List<QuesAns> getAllquesBySectionId(int sectionId);

    List<QuesAns> getAnsByQuesNum(int sectionId,int pid);
}