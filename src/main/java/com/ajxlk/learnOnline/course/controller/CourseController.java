package com.ajxlk.learnOnline.course.controller;

import com.ajxlk.learnOnline.course.model.Chapter;
import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.course.model.Section;
import com.ajxlk.learnOnline.course.service.ChapterService;
import com.ajxlk.learnOnline.course.service.CourseService;
import com.ajxlk.learnOnline.course.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 7/17/2017.
 */
@Controller
@RequestMapping("/course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private ChapterService chapterService;

    @Autowired
    private SectionService sectionService;

    @RequestMapping("/{courseId}")
    public String test(@PathVariable(value = "courseId") int courseId, Model model) {

        Course course = courseService.getCourseById(courseId);

        List<Chapter> chapters = chapterService.getChaptersByCourseId(courseId);

        List<List<Section>> sectionsss = new ArrayList<List<Section>>();

        for (Chapter chapter : chapters){
            int index = chapter.getChapterid();
            List<Section> sections = sectionService.getSectionsByChapterId(index);
            chapter.setSections(sections);
        }
        course.setChapters(chapters);

        model.addAttribute("course",course);

        return "course/courseDetail";
    }
}
