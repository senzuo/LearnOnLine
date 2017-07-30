package com.ajxlk.learnOnline.record.dao;

import com.ajxlk.learnOnline.record.model.Note;

import java.util.List;

public interface NoteMapper {
    int deleteByPrimaryKey(Integer noteId);

    int insert(Note record);

    int insertSelective(Note record);

    Note selectByPrimaryKey(Integer noteId);

    int updateByPrimaryKeySelective(Note record);

    int updateByPrimaryKey(Note record);

    List<Note> getStuNoteByStuId(int stuId);
}