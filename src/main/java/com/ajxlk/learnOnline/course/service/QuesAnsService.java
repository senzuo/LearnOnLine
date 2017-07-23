package com.ajxlk.learnOnline.course.service;

import com.ajxlk.learnOnline.course.dao.QuesAnsMapper;
import com.ajxlk.learnOnline.course.model.QuesAns;
import com.ajxlk.learnOnline.user.service.StuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 7/23/2017.
 */
@Service
public class QuesAnsService {

    @Autowired
    private QuesAnsMapper quesAnsMapper;

    @Autowired
    private StuService stuService;

    /**
     * 通过 section id 获取 全部 问题
     * @param sectionId
     * @return
     */
    public List<QuesAns> getAllQuesBySectionId(int sectionId){
        List<QuesAns> quesAnsList = quesAnsMapper.getAllquesBySectionId(sectionId);
        for (QuesAns quesAns : quesAnsList) {
            int stuId = quesAns.getReviewerId();
            quesAns.setStu(stuService.findByID(stuId));
        }
        return quesAnsList;
    }

    /**
     * 通过section id 和 pid 获取该问题的全部回答
     * @param sectionId
     * @param pid
     * @return
     */
    public List<QuesAns> getAnsByQuesNum(int sectionId, int pid) {
        List<QuesAns> quesAnsList = quesAnsMapper.getAnsByQuesNum(sectionId,pid);
        for (QuesAns quesAns : quesAnsList) {
            int stuId = quesAns.getReviewerId();
            quesAns.setStu(stuService.findByID(stuId));
        }
        return quesAnsList;
    }

}
