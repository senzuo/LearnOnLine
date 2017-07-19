package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.Section;

import java.util.List;

public interface SectionMapper {
    int deleteByPrimaryKey(Integer sectionid);

    int insert(Section record);

    int insertSelective(Section record);

    Section selectByPrimaryKey(Integer sectionid);

    int updateByPrimaryKeySelective(Section record);

    int updateByPrimaryKey(Section record);

    List<Section> getSectionsByChapterId(int id);
}