package com.ajxlk.learnOnline.common;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 申卓 on 2017/8/2.
 */
@Controller
public class Login {
    @RequestMapping("/login")
    public String login() {
        return "login";
    }
}
