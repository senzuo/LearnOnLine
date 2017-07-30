package com.ajxlk.learnOnline.record.service;

import com.ajxlk.learnOnline.record.dao.NoteMapper;
import com.ajxlk.learnOnline.record.model.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/7/28.
 */
@Service
public class NoteService {
    @Autowired
    private NoteMapper noteMapper;

    public List<Note> getStuNoteByStuId(int stuId) {
        return noteMapper.getStuNoteByStuId(stuId);
    }
}
