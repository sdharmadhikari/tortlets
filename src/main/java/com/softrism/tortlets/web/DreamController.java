package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Dream;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/dreams")
@Controller
@RooWebScaffold(path = "dreams", formBackingObject = Dream.class)
public class DreamController {

    public void myMethod() {
        Dream dream = new Dream();
    }
}
