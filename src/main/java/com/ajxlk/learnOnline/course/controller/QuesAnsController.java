package com.ajxlk.learnOnline.course.controller;

import com.ajxlk.learnOnline.course.model.QuesAns;
import com.ajxlk.learnOnline.course.service.QuesAnsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Administrator on 7/23/2017.
 */
@Controller
public class QuesAnsController {
    @Autowired
    private QuesAnsService quesAnsService;

    @RequestMapping("/course/{sectionId}/quesAns")
    @ResponseBody
    public List<QuesAns> getAllQuesBySectionId(@PathVariable int sectionId) {
        List<QuesAns> quesAnsList = quesAnsService.getAllQuesBySectionId(sectionId);
        for (QuesAns quesAns : quesAnsList) {
            quesAns.setSubQuesAnss(quesAnsService.getAnsByQuesNum(sectionId,quesAns.getQuesAnsId()));
        }
        return quesAnsList;
    }

}
