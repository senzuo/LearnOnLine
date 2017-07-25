package com.ajxlk.learnOnline.course.controller;

import com.ajxlk.learnOnline.course.model.Chapter;
import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.course.model.Section;
import com.ajxlk.learnOnline.course.model.Video;
import com.ajxlk.learnOnline.course.service.ChapterService;
import com.ajxlk.learnOnline.course.service.CourseService;
import com.ajxlk.learnOnline.course.service.SectionService;
import com.ajxlk.learnOnline.course.service.VideoService;
import com.ajxlk.learnOnline.user.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 7/17/2017.
 */
@Controller
public class CourseController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private ChapterService chapterService;

    @Autowired
    private SectionService sectionService;

    @Autowired
    private TeacherService teacherService;

    @Autowired
    private VideoService videoService;

    @RequestMapping("/section/{sectionId}")
    public String test(@PathVariable(value = "sectionId") Integer sectionId, Model model) {

        List<Video> videos = videoService.getVideoBySectionId(sectionId);
        if (videos.size()>0){
            model.addAttribute("video",videos.get(0));
        }

        Section sec = sectionService.getSectionById(sectionId);

        Chapter cha = chapterService.getChapterById(sec.getChapterid());

        model.addAttribute("section",sec);
        model.addAttribute("chapter",cha);

        Course course = courseService.getCourseById(cha.getCourseid());

        List<Chapter> chapters = chapterService.getChaptersByCourseId(course.getCourseId());


        for (Chapter chapter : chapters){
            int index = chapter.getChapterid();
            List<Section> sections = sectionService.getSectionsByChapterId(index);
            chapter.setSections(sections);
        }
        if (course!=null && chapters != null) {
            course.setChapters(chapters);
        }
        model.addAttribute("course",course);



        return "course/sectionDetail";
    }


    @RequestMapping("/courseIndex/{courseid}")
    public String courseIndex(@PathVariable(value = "courseid") int courseid,Model model){
        Course course = courseService.getCourseById(courseid);

        List<Chapter> chapters = chapterService.getChaptersByCourseId(courseid);

        List<List<Section>> sectionsss = new ArrayList<List<Section>>();

        for (Chapter chapter : chapters){
            int index = chapter.getChapterid();
            List<Section> sections = sectionService.getSectionsByChapterId(index);
            chapter.setSections(sections);
        }
        if (course!=null && chapters != null) {
            course.setChapters(chapters);
        }
        model.addAttribute("course",course);

        return "course/courseIndex";
    }

    @RequestMapping("/getAllCourse")
    public String getCourse(Model model) {
        // 标签
        List<Course> courses = courseService.getAllCourse();
        model.addAttribute("courses",courses);
        return "course/center";
    }

    @RequestMapping("/getAllCourseJson")
    @ResponseBody
    public List<Course> getAllCourseJson(Model model) {
        return courseService.getAllCourse();
    }
}
