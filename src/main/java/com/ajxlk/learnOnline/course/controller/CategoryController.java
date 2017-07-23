package com.ajxlk.learnOnline.course.controller;

import com.ajxlk.learnOnline.course.model.Category;
import com.ajxlk.learnOnline.course.service.CategoryService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 7/22/2017.
 */
@Controller
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/getAllCategory")
    @ResponseBody
    public String getAllCategory() {
        Map<Category,Map<Category,List<Category>>> map1 = new HashMap<>();
        List<Category> firstCategory =  categoryService.getAllFirstCategory();

        Map<Category,List<Category>> map2 = new HashMap<>();
        for (Category category : firstCategory) {
            if (map2 != null){
                map2 = new HashMap<>();
            }
            map1.put(category,map2);
            List<Category> map2rd = categoryService.getAllSubCategory(category.getCategoryId());
            if (map2rd != null){
                for (Category category1 : map2rd) {
                    List<Category> map3rd = categoryService.getAllSubCategory(category1.getCategoryId());
                    if (map3rd != null && category1 != null) {
                        map2.put(category1, map3rd);
                    }
                }
            }
        }
        return JSONObject.toJSONString(map1);
    }

}
