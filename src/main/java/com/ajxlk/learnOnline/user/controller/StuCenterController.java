package com.ajxlk.learnOnline.user.controller;

import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.record.model.StuLearnRecordDTO;
import com.ajxlk.learnOnline.record.service.StuFaverCourseService;
import com.ajxlk.learnOnline.record.service.StuLearnRecordService;
import com.ajxlk.learnOnline.user.model.Stu;
import com.ajxlk.learnOnline.user.service.StuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Administrator on 7/26/2017.
 */
@Controller
public class StuCenterController {
    @Autowired
    private StuService stuService;

    @Autowired
    private StuFaverCourseService stuFaverCourseService;

    @Autowired
    private StuLearnRecordService stuLearnRecordService;

    @RequestMapping(value = "/usercenter/{userId}")
    public String userCenter(@PathVariable int userId, Model model) {
        Stu stu = stuService.findByID(userId);

        List<StuLearnRecordDTO> stuLearnRecordDTOS = stuLearnRecordService.getAllLearningCourseByuserId(userId);

        List<Course> courses = stuFaverCourseService.getAllStuFavByStuId(userId);

        model.addAttribute("stuInfo",stu);
        model.addAttribute("learningCourses",stuLearnRecordDTOS);

        model.addAttribute("faver_course",courses);
        return "userCenter/index";
    }

    @RequestMapping(value = "/usercenter/{userId}/QuesAns")
    public String userCenterQuesAns(@PathVariable int userId,Model model) {
        return "userCenter/QuesAns";
    }

    @RequestMapping(value = "/usercenter/note")
    public String userCenterNote(){
        return "userCenter/Note";
    }

    @RequestMapping(value = "/usercenter/train")
    public String train(){
        return "userCenter/train";
    }

    @RequestMapping(value = "/usercenter/plan")
    public String plan(){
        return "userCenter/plan";
    }

    @RequestMapping(value = "/usercenter/success")
    public String success(){
        return "userCenter/success";
    }

}
