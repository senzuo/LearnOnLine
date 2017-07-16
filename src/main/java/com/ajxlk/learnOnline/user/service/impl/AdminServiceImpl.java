package com.ajxlk.learnOnline.user.service.impl;

import com.ajxlk.learnOnline.user.dao.AdminMapper;
import com.ajxlk.learnOnline.user.model.Admin;
import com.ajxlk.learnOnline.user.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 7/14/2017.
 */
@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    private AdminMapper adminMapper;

    @Override
    public Admin selectByPrimaryKey(Integer id) {
        return adminMapper.selectByPrimaryKey(id);
    }
}
