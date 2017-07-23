package com.ajxlk.learnOnline.user.service;

import com.ajxlk.learnOnline.user.dao.TeacherMapper;
import com.ajxlk.learnOnline.user.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 7/22/2017.
 */
@Service
public class TeacherService {
    @Autowired
    private TeacherMapper teacherMapper;

    public List<Teacher> getAllTeacher(){
        return teacherMapper.getAllTeacher();
    }
}
