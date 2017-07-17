package com.ajxlk.learnOnline.user.service;

import com.ajxlk.learnOnline.user.dao.StuMapper;
import com.ajxlk.learnOnline.user.model.Stu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 7/15/2017.
 */
@Service
public class StuService {

    @Autowired
    private StuMapper stuMapper;

    public Page<Stu> selectAllStu(){
        List<Stu> stus =  stuMapper.selectAllStu();
        Page<Stu> page = new PageImpl<Stu>(stus);
        return page;
    }

    public Page<Stu> selectSelectiveStu(Stu stu){


        List<Stu> stus =  stuMapper.selectSelectiveStu(stu);
        Page<Stu> page = new PageImpl<Stu>(stus);
        return page;
    }


    public Stu findByName(String name) {
        return stuMapper.selectByName(name);
    }

    public void save(Stu stu) {
        stuMapper.insert(stu);
    }

    public void deleteByPrimaryKey(int i){
        stuMapper.deleteByPrimaryKey(i);
        System.out.println("i is " + i);
    }

    public Stu findByID(Integer id){
        return stuMapper.selectByPrimaryKey(id);
    }

    public void updateOne(Stu stu){
        stuMapper.updateByPrimaryKey(stu);
    }
}
