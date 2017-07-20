package com.ajxlk.learnOnline.user.controller;

import com.ajxlk.learnOnline.response.RestResponse;
import com.ajxlk.learnOnline.response.RestUtil;
import com.ajxlk.learnOnline.user.model.Stu;
import com.ajxlk.learnOnline.user.service.StuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by Administrator on 7/15/2017.
 */
@RestController
@RequestMapping("/usertest")
public class StuController {

    @Autowired
    private StuService stuService;


    @RequestMapping(value = "", method = RequestMethod.GET)
    public RestResponse getUserList(@RequestParam(required = false, defaultValue = "") String user_id,
                                    @RequestParam(required = false, defaultValue = "") String user_name
    ) {
        RestResponse response = RestUtil.getResponse();
        List<Stu> stus = null;
        System.out.println("user_id is " + user_id);
        System.out.println("stuname is " + user_name);
        Stu stu = new Stu();
        stu.setStuname(user_name);
        if ("".equals(user_id)){
            stu.setStuid(null);
        }else {
            stu.setStuid(Integer.parseInt(user_id));
        }
//        stus = stuService.selectAllStu();
        stus = stuService.selectSelectiveStu(stu);
        Page<Stu> page = new PageImpl<Stu>(stus);
        response.setPageData(page);
        return response;
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public RestResponse addUser(@RequestParam String name, @RequestParam String pwd) {
        Stu stu = new Stu();

        if (name != null) {
            stu.setStuname(name);
        }
        if (pwd != null) {
            stu.setStupwd(pwd);
        }


        stuService.save(stu);
        RestResponse response = RestUtil.getResponse();
        response.addEntity(stu);
        return response;
    }

    @RequestMapping(value = "/{userIds}", method = RequestMethod.DELETE)
    public RestResponse deleteUser(@PathVariable("userIds") String userIds) {
        RestResponse response = RestUtil.getResponse();
//        List<Long> ids = ArrayUtil.arrayStrToLongList(userIds, ",");
//        if (ids == null || ids.isEmpty()) {
//            return response;
//        }
//        for (Long id : ids) {
//            try {
        stuService.deleteByPrimaryKey(Integer.parseInt(userIds));
//            } catch (Exception e) {
//                e.printStackTrace();
//                log.error("删除用户失败,ID为" + id, e);
//            }
        return response;
    }

    @RequestMapping(value = "/{userId}", method = RequestMethod.PUT)
    public RestResponse updateUser(@PathVariable("userId") Integer stuId,
                                   @RequestParam(required = false) String stuname,
                                   @RequestParam(required = false) String stupwd) {


        System.out.println(stuId);
        System.out.println(stuname);
        System.out.println("---------------------------------------------------");
        System.out.println(stupwd);

        Stu stu = stuService.findByID(stuId);


        System.out.println(stu);

        if (stuname != null && stuname != "") {
            stu.setStuname(stuname);
        }
        if (stupwd != null && stupwd != "") {
            stu.setStupwd(stupwd);
        }
        stuService.updateOne(stu);
        RestResponse response = RestUtil.getResponse();
        return response;
    }

}