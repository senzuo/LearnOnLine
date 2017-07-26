package com.ajxlk.learnOnline.record.controller;

import com.ajxlk.learnOnline.record.model.StuLearnRecordDTO;
import com.ajxlk.learnOnline.record.service.StuLearnRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Administrator on 7/26/2017.
 */
@RestController
public class StuRecordRest {
    @Autowired
    private StuLearnRecordService stuLearnRecordService;

    @RequestMapping("/getLearningCourse/{stuId}")
    public List<StuLearnRecordDTO> getLearningCourse(@PathVariable int stuId){
        return stuLearnRecordService.getAllLearningCourseByuserId(stuId);
    }
}
