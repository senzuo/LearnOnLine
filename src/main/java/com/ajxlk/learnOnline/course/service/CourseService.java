package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.CourseMapper;
import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.user.dao.TeacherMapper;
import com.ajxlk.learnOnline.user.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 7/17/2017.
 */
@Service
public class CourseService {

    @Autowired
    private CourseMapper courseMapper;

    @Autowired
    private TeacherMapper teacherMapper;


    public Course getCourseById(int id) {
        return courseMapper.selectByPrimaryKey(id);
    }

    public List<Course> getAllCourse() {
        List<Course> courses = courseMapper.getAllCourse();

        for (Course e : courses) {
            int teacherid = e.getTeacherid();
            Teacher teacher = teacherMapper.selectByPrimaryKey(teacherid);
            e.setTeacherName(teacher.getTeachername());
        }
        return courses;
    }

    public void addCourse(Course course){
        courseMapper.insertSelective(course);
    }


}
