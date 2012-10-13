package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tortlet;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/tortlets")
@Controller
@RooWebScaffold(path = "tortlets", formBackingObject = Tortlet.class)
public class TortletController {
}
