package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.ChapterMapper;
import com.ajxlk.learnOnline.course.model.Chapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by 申卓 on 2017/7/19.
 */
@Service
public class ChapterService {
    @Autowired
    private ChapterMapper chapterMapper;

    public List<Chapter> getChaptersByCourseId(int courseId){
        List<Chapter> chapters = chapterMapper.getChaptersByCourseId(courseId);
        return chapters;
    }

    public void insertChapter2Course(Chapter chapter){
        chapterMapper.insertSelective(chapter);
    }

    public void deleteChapter(int chapterId){
        chapterMapper.deleteByPrimaryKey(chapterId);
    }

    public Chapter getChapterById(int chapterId) {
        return chapterMapper.selectByPrimaryKey(chapterId);
    }

    public int getCourseIdByChapterId(int chapterId) {
        return chapterMapper.getCourseIdByChapterId(chapterId);
    }


}
