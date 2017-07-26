package com.ajxlk.learnOnline.record.dao;

import com.ajxlk.learnOnline.record.model.StuLearnRecord;

import java.util.List;

public interface StuLearnRecordMapper {
    int deleteByPrimaryKey(Integer stuLearnRecordId);

    int insert(StuLearnRecord record);

    int insertSelective(StuLearnRecord record);

    StuLearnRecord selectByPrimaryKey(Integer stuLearnRecordId);

    int updateByPrimaryKeySelective(StuLearnRecord record);

    int updateByPrimaryKey(StuLearnRecord record);

    List<StuLearnRecord> getAllLearningCourseByuserId(int userId);
}