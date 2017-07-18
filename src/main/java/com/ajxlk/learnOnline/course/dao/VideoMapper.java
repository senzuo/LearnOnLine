package com.ajxlk.learnOnline.course.dao;

import com.ajxlk.learnOnline.course.model.Video;

public interface VideoMapper {
    int deleteByPrimaryKey(Integer videoid);

    int insert(Video record);

    int insertSelective(Video record);

    Video selectByPrimaryKey(Integer videoid);

    int updateByPrimaryKeySelective(Video record);

    int updateByPrimaryKey(Video record);
}