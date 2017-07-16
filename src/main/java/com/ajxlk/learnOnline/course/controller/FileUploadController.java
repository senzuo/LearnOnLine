package com.ajxlk.learnOnline.course.controller;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;

/**
 * Created by Administrator on 7/15/2017.
 */
@Controller
public class FileUploadController {

    @PostMapping("/springUpload")
    public String handleFormUpload(@RequestParam("name") String name,
                                   @RequestParam("file") MultipartFile file,
                                   HttpServletRequest request) {

        if (!file.isEmpty()) {
            try {
                System.out.println(file.getContentType());
                System.out.println(file.getOriginalFilename());

                String path=request.getSession().getServletContext().getRealPath("/WEB-INF/resource/video");
                File fileDir =new File(path);
                if (!fileDir.isDirectory()){
                    fileDir.mkdirs();
                }

                String fileName = file.getOriginalFilename();

                File newFile = new File(path+"/"+fileName);

                //通过CommonsMultipartFile的方法直接写文件（注意这个时候）
                file.transferTo(newFile);
            } catch (Exception e) {
                e.printStackTrace();
            }
            // store the bytes somewhere
//            return "redirect:uploadSuccess";
        }else {
            return "redirect:/course/upload";
        }

        return "redirect:/admin/view/index";
    }

}