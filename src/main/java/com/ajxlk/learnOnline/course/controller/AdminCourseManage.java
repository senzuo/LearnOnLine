package com.ajxlk.learnOnline.course.controller;

import com.ajxlk.learnOnline.course.model.Chapter;
import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.course.model.Section;
import com.ajxlk.learnOnline.course.model.Video;
import com.ajxlk.learnOnline.course.service.ChapterService;
import com.ajxlk.learnOnline.course.service.CourseService;
import com.ajxlk.learnOnline.course.service.SectionService;
import com.ajxlk.learnOnline.course.service.VideoService;
import com.ajxlk.learnOnline.response.RestResponse;
import com.ajxlk.learnOnline.response.RestUtil;
import com.ajxlk.learnOnline.user.model.Teacher;
import com.ajxlk.learnOnline.user.service.TeacherService;
//import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 申卓 on 2017/7/21.
 */

@Controller
public class AdminCourseManage {
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


    @RequestMapping("/paperCharts")
    public String paperCharts() {
        return "admin/paperCharts";
    }

    @RequestMapping("/examPaper")
    public String examPaper(){
        return "admin/exampaper";
    }

    /**
     * 获取所有老师信息 并跳转到对应页面
     * @param model
     * @return
     */
    @RequestMapping("/courseManage")
    public String courseManage(Model model) {
        List<Teacher> teachers = teacherService.getAllTeacher();
        model.addAttribute("teachers",teachers);
        return "admin/courseManage";
    }

    /**
     * 新增课程
     * @param courseName
     * @param teacherName
     * @param categoryName
     * @param difficulty
     * @param course_brief
     * @param courseCover
     * @return
     */
    @RequestMapping(value = "/course/addCourse", method = RequestMethod.POST)
    @ResponseBody
    public Course addCourse(
            @RequestParam("course_name") String courseName,
            @RequestParam("teacher_name") String teacherName,
            @RequestParam("cata") String categoryName,
            @RequestParam("difficulty") String difficulty,
            @RequestParam("course_brief") String course_brief,
            @RequestParam("courseCover") String courseCover
    ) {
        Course course = new Course();

        Teacher teacher = teacherService.getTeacherByName(teacherName);
        if (teacher == null){
            teacher = new Teacher();
            teacher.setTeachername(teacherName);
            teacherService.insert(teacher);
        }
        teacher = teacherService.getTeacherByName(teacherName);

        course.setCourseName(courseName);
        course.setTeacherName(teacherName);
        course.setTeacherid(teacher.getTeacherid());
        course.setCategory_id(1);
        course.setDifficulty(difficulty);
        course.setCourseCoverUrl(courseCover);
        course.setDescription(course_brief);
        System.out.println(course);
        System.out.println(course);
        System.out.println(course);
        System.out.println(course);
        System.out.println(course);
        System.out.println(course);
        System.out.println(course);

        courseService.addCourse(course);

        return course;
    }

    /**
     * 上传课程封面
     * @param file
     * @param request
     * @return
     */
    @RequestMapping(value = "/course/addCourse/cover", method = RequestMethod.POST)
    @ResponseBody
    public String addCourseCover(@RequestParam CommonsMultipartFile file,
                            HttpServletRequest request) {
        if (!file.isEmpty())
        {
            String path = request.getSession().getServletContext().getRealPath("/upload/cover");

            String type = file.getOriginalFilename().substring(
                    file.getOriginalFilename().indexOf("."));// 取文件格式后缀名
//            String fileName = file.getOriginalFilename();
            String fileName = System.currentTimeMillis() + type;// 取当前时间戳作为文件名
//            String path = request.getSession().getServletContext()
//                    .getRealPath("/upload/" + filename);// 存放位置
            File targetFile = new File(path, fileName);
            if(!targetFile.exists()){
                targetFile.mkdirs();
            }
            //保存
            try {
                file.transferTo(targetFile);
            } catch (Exception e) {
                e.printStackTrace();
            }

            return "/upload/cover/" + fileName;
        }
        return "error";
    }

    /**
     * 读取课程信息 并且跳转到页面
     * @param courseId
     * @param model
     * @return
     */
    @RequestMapping(value = "/course/editCourse/{courseId}")
    public String editCourse(@PathVariable int courseId, Model model){
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

        return "admin/editCourse";
    }

    /**
     * 添加章节
     * @param courseid
     * @param chapter_index
     * @param chapter_name
     * @return
     */
    @RequestMapping(value = "/course/addChapter/{courseid}", method = RequestMethod.POST)
    @ResponseBody
    public RestResponse addChapter(@PathVariable("courseid") String courseid, @RequestParam String chapter_index, @RequestParam String chapter_name){

        Chapter chapter = new Chapter();
        chapter.setChaptername(chapter_index + "  " + chapter_name);
        chapter.setCourseid(Integer.parseInt(courseid));

        chapterService.insertChapter2Course(chapter);

        RestResponse restResponse = RestUtil.getResponse();
        return restResponse;
    }

    /**
     * 删除章节
     * @param chapterId
     * @return
     */
    @RequestMapping(value = "/deleteChapter", method = RequestMethod.POST)
    @ResponseBody
    public RestResponse deleteChapter(@RequestParam int chapterId) {
        chapterService.deleteChapter(chapterId);
        RestResponse restResponse = RestUtil.getResponse();
        return restResponse;
    }

    @RequestMapping(value = "/addSection2Chapter", method = RequestMethod.POST)
    @ResponseBody
    public RestResponse addSection2Chapter(@RequestParam int chapterId, @RequestParam String sectionName) {
        Section section = new Section();
        section.setChapterid(chapterId);
        section.setSectionname(sectionName);
        sectionService.addSection(section);
        RestResponse restResponse = RestUtil.getResponse();
        return restResponse;
    }

    @RequestMapping(value = "/deleteSection", method = RequestMethod.POST)
    @ResponseBody
    public RestResponse deleteSection(@RequestParam int sectionId){
        sectionService.DeleteSection(sectionId);
        RestResponse restResponse = RestUtil.getResponse();
        return restResponse;
    }

    /**
     * 上传课程视频
     * @param file
     * @param request
     * @return
     */
    @RequestMapping(value = "/course/addCourse/{SectionId}/video", method = RequestMethod.POST)
    @ResponseBody
    public RestResponse addCourseVideo(@RequestParam CommonsMultipartFile file, @PathVariable int SectionId,
                                 HttpServletRequest request) {

        Video video = new Video();
        if (!file.isEmpty())
        {
            String path = request.getSession().getServletContext().getRealPath("/upload/section/" + SectionId + "/");
            String originalFilename = file.getOriginalFilename();// 取文件名格式后缀名
            String type = originalFilename.substring(file.getOriginalFilename().indexOf("."));//格式后缀名
            String filename = System.currentTimeMillis() + type;// 取当前时间戳作为文件名

            video.setUrl("/upload/section/" + SectionId + "/" + filename);
            video.setSectionId(SectionId);
            video.setVideoName(originalFilename);

            File targetFile = new File(path, filename);
            if(!targetFile.exists()){
                targetFile.mkdirs();
            }
            //保存
            try {
                file.transferTo(targetFile);
            } catch (Exception e) {
                e.printStackTrace();
            }

            videoService.addVideo(video);
        }
        RestResponse restResponse = RestUtil.getResponse();
        return restResponse;
    }

    @RequestMapping(value = "/courseReport")
    public String courseReport() {
        return "admin/courseReport";
    }


    @RequestMapping(value = "/view/index")
    public String index(){
        return "admin/viewIndex";
    }

}
