package com.ajxlk.learnOnline.user.dao;

import com.ajxlk.learnOnline.user.model.Department;

public interface DepartmentMapper {
    int deleteByPrimaryKey(Integer departid);

    int insert(Department record);

    int insertSelective(Department record);

    Department selectByPrimaryKey(Integer departid);

    int updateByPrimaryKeySelective(Department record);

    int updateByPrimaryKey(Department record);
}