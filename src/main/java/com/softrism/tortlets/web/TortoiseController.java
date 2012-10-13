package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tortoise;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/tortoises")
@Controller
@RooWebScaffold(path = "tortoises", formBackingObject = Tortoise.class)
public class TortoiseController {
}
