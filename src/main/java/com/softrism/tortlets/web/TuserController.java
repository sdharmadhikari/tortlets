package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tuser;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/tusers")
@Controller
@RooWebScaffold(path = "tusers", formBackingObject = Tuser.class)
public class TuserController {
}
