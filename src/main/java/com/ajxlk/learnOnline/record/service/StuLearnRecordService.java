package com.ajxlk.learnOnline.record.service;

import com.ajxlk.learnOnline.course.model.Chapter;
import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.course.model.Section;
import com.ajxlk.learnOnline.course.service.ChapterService;
import com.ajxlk.learnOnline.course.service.CourseService;
import com.ajxlk.learnOnline.course.service.SectionService;
import com.ajxlk.learnOnline.record.dao.StuLearnRecordMapper;
import com.ajxlk.learnOnline.record.model.StuLearnRecord;
import com.ajxlk.learnOnline.record.model.StuLearnRecordDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by Administrator on 7/26/2017.
 */
@Service
public class StuLearnRecordService {
    @Autowired
    private StuLearnRecordMapper stuLearnRecordMapper;

    @Autowired
    private SectionService sectionService;

    @Autowired
    private ChapterService chapterService;

    @Autowired
    private CourseService courseService;

    public int createRecord(StuLearnRecord stuLearnRecord) {
        stuLearnRecordMapper.insertSelective(stuLearnRecord);
        return 0;
    }

    /**
     * 根据学生Id获取该生正在学习的课程
     * @param userId
     * @return
     */
    public List<StuLearnRecordDTO> getAllLearningCourseByuserId(int userId) {
        List<StuLearnRecord> stuLearnRecords = stuLearnRecordMapper.getAllLearningCourseByuserId(userId);
        Map<Integer, StuLearnRecordDTO> stuLearnRecordDTOS = new HashMap<>();
        for (StuLearnRecord stuLearnRecord : stuLearnRecords) {
            int sectionId = stuLearnRecord.getSectionId();
            Section section = sectionService.getSectionById(sectionId);
            int chapterId = sectionService.getChapterBySectionId(sectionId);
            Chapter chapter = chapterService.getChapterById(chapterId);
            int courseId = chapterService.getCourseIdByChapterId(chapterId);
            Course course = courseService.getCourseById(courseId);

            StuLearnRecordDTO stuLearnRecordDTO = new StuLearnRecordDTO();
            stuLearnRecordDTO.setCourse(course);
            stuLearnRecordDTO.setChapter(chapter);
            stuLearnRecordDTO.setSection(section);
            stuLearnRecordDTO.setStuLearnRecord(stuLearnRecord);

            stuLearnRecordDTOS.put(course.getCourseId(), stuLearnRecordDTO);
        }
        List<StuLearnRecordDTO> lists = new ArrayList<>();
        Iterator iter = stuLearnRecordDTOS.entrySet().iterator();
        while (iter.hasNext()) {
            Map.Entry entry = (Map.Entry) iter.next();
            Object key = entry.getKey();
            StuLearnRecordDTO val = (StuLearnRecordDTO)entry.getValue();
            lists.add(val);
        }
        return lists;
    }
}
