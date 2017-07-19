package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.CourseMapper;
import com.ajxlk.learnOnline.course.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 7/17/2017.
 */
@Service
public class CourseService {

    @Autowired
    private CourseMapper courseMapper;

    public Course getCourseById(int id){
        return courseMapper.selectByPrimaryKey(id);
    }


}
