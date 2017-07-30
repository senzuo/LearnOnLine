package com.ajxlk.learnOnline.record.dao;

import com.ajxlk.learnOnline.record.model.Plan;

import java.util.List;

public interface PlanMapper {
    int deleteByPrimaryKey(Integer planId);

    int insert(Plan record);

    int insertSelective(Plan record);

    Plan selectByPrimaryKey(Integer planId);

    int updateByPrimaryKeySelective(Plan record);

    int updateByPrimaryKey(Plan record);


    List<Plan> getStuPlanByStuId(int stuId);
}