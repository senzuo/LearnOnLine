
package com.ajxlk.learnOnline.record.dao;

import com.ajxlk.learnOnline.record.model.StuFaverCourseKey;

import java.util.List;

public interface StuFaverCourseMapper {
    int deleteByPrimaryKey(StuFaverCourseKey key);

    int insert(StuFaverCourseKey record);

    int insertSelective(StuFaverCourseKey record);

    List<StuFaverCourseKey> getAllStuFavByStuId (int stuId);
}