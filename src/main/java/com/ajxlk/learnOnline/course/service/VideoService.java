package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.VideoMapper;
import com.ajxlk.learnOnline.course.model.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 7/23/2017.
 */
@Service
public class VideoService {
    @Autowired
    private VideoMapper videoMapper;

    public void addVideo(Video video) {
        videoMapper.insertSelective(video);
    }

    public List<Video> getVideoBySectionId(Integer sectionId) {
        return videoMapper.getVideoBySectionId(sectionId);
    }
}
