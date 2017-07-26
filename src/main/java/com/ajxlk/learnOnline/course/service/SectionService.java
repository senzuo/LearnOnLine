package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.SectionMapper;
import com.ajxlk.learnOnline.course.model.Chapter;
import com.ajxlk.learnOnline.course.model.Section;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by 申卓 on 2017/7/19.
 */
@Service
public class SectionService {
    @Autowired
    private SectionMapper sectionMapper;

    public List<Section> getSectionsByChapterId(int id){
        return sectionMapper.getSectionsByChapterId(id);
    }

    public void addSection(Section section) {
        sectionMapper.insertSelective(section);
    }

    public void DeleteSection(int sectionId) {
        sectionMapper.deleteByPrimaryKey(sectionId);
    }

    public Section getSectionById(int sectionId) {
        return sectionMapper.selectByPrimaryKey(sectionId);
    }

    public int getChapterBySectionId(int sectionId) {
        return sectionMapper.getChapterBySectionId(sectionId);
    }


}
