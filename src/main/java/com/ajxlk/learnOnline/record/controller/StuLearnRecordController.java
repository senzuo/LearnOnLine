package com.ajxlk.learnOnline.record.controller;

import com.ajxlk.learnOnline.record.model.StuLearnRecord;
import com.ajxlk.learnOnline.record.service.StuLearnRecordService;
import com.ajxlk.learnOnline.response.RestResponse;
import com.ajxlk.learnOnline.response.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Administrator on 7/26/2017.
 */
@Controller
public class StuLearnRecordController {
    @Autowired
    private StuLearnRecordService stuLearnRecordService;

    @RequestMapping("/stuRecord")
    @ResponseBody
    public RestResponse createRecord(StuLearnRecord stuLearnRecord) {
        stuLearnRecordService.createRecord(stuLearnRecord);
        RestResponse restResponse = RestUtil.getResponse();
        return restResponse;
    }
}
