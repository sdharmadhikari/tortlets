package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tuser;
import org.springframework.roo.addon.web.mvc.controller.finder.RooWebFinder;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/tusers")
@Controller
@RooWebScaffold(path = "tusers", formBackingObject = Tuser.class)
@RooWebFinder
public class TuserController {
	
    @RequestMapping(params = "find=ByUseridEquals", method = RequestMethod.GET)
    public String findTusersByUseridEquals(@RequestParam("userid") String userid, Model uiModel) {
        uiModel.addAttribute("tusers", Tuser.findTusersByUseridEquals(userid).getResultList());

        Tuser.generateTortlets(userid);
        return "tusers/list";
    }
}
