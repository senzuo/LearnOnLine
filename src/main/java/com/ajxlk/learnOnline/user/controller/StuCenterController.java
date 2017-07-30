package com.ajxlk.learnOnline.user.controller;

import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.course.service.CourseService;
import com.ajxlk.learnOnline.record.model.Note;
import com.ajxlk.learnOnline.record.model.Plan;
import com.ajxlk.learnOnline.record.model.StuLearnRecordDTO;
import com.ajxlk.learnOnline.record.service.NoteService;
import com.ajxlk.learnOnline.record.service.PlanService;
import com.ajxlk.learnOnline.record.service.StuFaverCourseService;
import com.ajxlk.learnOnline.record.service.StuLearnRecordService;
import com.ajxlk.learnOnline.user.model.Stu;
import com.ajxlk.learnOnline.user.service.StuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 7/26/2017.
 */
@Controller
public class StuCenterController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private StuService stuService;

    @Autowired
    private StuFaverCourseService stuFaverCourseService;

    @Autowired
    private StuLearnRecordService stuLearnRecordService;

    @Autowired
    private PlanService planService;

    @Autowired
    private NoteService noteService;

    @RequestMapping(value = "/usercenter/{userId}")
    public String userCenter(@PathVariable int userId, Model model) {
        Stu stu = stuService.findByID(userId);

        List<StuLearnRecordDTO> stuLearnRecordDTOS = stuLearnRecordService.getAllLearningCourseByuserId(userId);

        List<Course> courses = stuFaverCourseService.getAllStuFavByStuId(userId);

        model.addAttribute("stuInfo", stu);
        model.addAttribute("learningCourses", stuLearnRecordDTOS);

        model.addAttribute("faver_course", courses);
        return "userCenter/index";
    }

    @RequestMapping(value = "/usercenter/{userId}/QuesAns")
    public String userCenterQuesAns(@PathVariable int userId, Model model) {
        return "userCenter/QuesAns";
    }

    @RequestMapping(value = "/usercenter/note")
    public String userCenterNote(Model model) {
        List<Note> notes = noteService.getStuNoteByStuId(1);
        for (Note note : notes) {
            note.setCourse(courseService.getCourseById(note.getCourseId()));
        }
        model.addAttribute("notes", notes);
        return "userCenter/Note";
    }

    @RequestMapping(value = "/usercenter/train")
    public String train() {
        return "userCenter/train";
    }

    @RequestMapping(value = "/usercenter/plan/{userId}")
    public String plan(@PathVariable int userId, Model model) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy年MM月dd日 HH时mm分");
        List<Plan> plans = planService.getStuPlanByStuId(userId);
        if (plans.size() > 0) {
            for (Plan plan : plans) {
                Course course = courseService.getCourseById(plan.getCourseId());
                plan.setCourse(course);
                plan.setPercent((int) 100.0 * plan.getCurrentDuration() / plan.getCourseDuration());
                if (new Date().compareTo(plan.getEndTime()) > 0) {
                    plan.setLeftDay(plan.getEndTime().getDay() - new Date().getDay());
                }
                plan.setStartTimeString(simpleDateFormat.format(plan.getStartTime().getTime()));
            }
        }
        model.addAttribute("plans", plans);
        return "userCenter/plan";
    }

    @RequestMapping(value = "/usercenter/success")
    public String success() {
        return "userCenter/success";
    }

}
