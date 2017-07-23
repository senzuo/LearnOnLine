package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.Course;

import java.util.List;

public interface CourseMapper {
    int deleteByPrimaryKey(Integer courseid);

    int insert(Course record);

    int insertSelective(Course record);

    Course selectByPrimaryKey(Integer courseid);

    int updateByPrimaryKeySelective(Course record);

    int updateByPrimaryKey(Course record);

    List<Course> getAllCourse();
}