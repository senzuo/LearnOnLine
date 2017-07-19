package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.Chapter;

import java.util.List;

public interface ChapterMapper {
    int deleteByPrimaryKey(Integer chapterid);

    int insert(Chapter record);

    int insertSelective(Chapter record);

    Chapter selectByPrimaryKey(Integer chapterid);

    int updateByPrimaryKeySelective(Chapter record);

    int updateByPrimaryKey(Chapter record);

    List<Chapter> getChaptersByCourseId(int CourseId);
}