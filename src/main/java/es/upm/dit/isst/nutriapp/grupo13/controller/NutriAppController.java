package es.upm.dit.isst.nutriapp.grupo13.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NutriAppController {

    @GetMapping("/")
    public String home(){
        return "index.html";
    }

    @GetMapping("/login")
    public String login(){
        return "index.html";
    }

    @GetMapping("/signin")
    public String signin(){
        return "index.html";
    }
    
}
