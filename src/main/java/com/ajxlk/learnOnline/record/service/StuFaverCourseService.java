package com.ajxlk.learnOnline.record.service;

import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.course.service.CourseService;
import com.ajxlk.learnOnline.record.dao.StuFaverCourseMapper;
import com.ajxlk.learnOnline.record.model.StuFaverCourseKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 7/26/2017.
 */
@Service
public class StuFaverCourseService {
    @Autowired
    private StuFaverCourseMapper stuFaverCourseMapper;

    @Autowired
    private CourseService courseService;

    public  List<Course> getAllStuFavByStuId(int stuId){
        List<Course> courses = new ArrayList<>();
        List<StuFaverCourseKey> stuFaverCourseKeys = stuFaverCourseMapper.getAllStuFavByStuId(stuId);
        for (StuFaverCourseKey stuFaverCourseKey : stuFaverCourseKeys) {
            int courseId = stuFaverCourseKey.getCourseId();
            Course course = courseService.getCourseById(courseId);
            courses.add(course);
        }
        return courses;
    }
}
