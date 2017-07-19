package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.SectionMapper;
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


}
