package com.ajxlk.learnOnline.record.service;

import com.ajxlk.learnOnline.record.dao.PlanMapper;
import com.ajxlk.learnOnline.record.model.Plan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/7/28.
 */
@Service
public class PlanService {
    @Autowired
    private PlanMapper planMapper;

    public List<Plan> getStuPlanByStuId(int stuId) {
        return planMapper.getStuPlanByStuId(stuId);
    }

}
