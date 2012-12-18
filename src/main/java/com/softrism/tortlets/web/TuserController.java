package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tuser;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import org.springframework.roo.addon.web.mvc.controller.finder.RooWebFinder;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RequestMapping("/tusers")
@Controller
@RooWebScaffold(path = "tusers", formBackingObject = Tuser.class)
@RooWebFinder
@RooWebJson(jsonObject = Tuser.class)
public class TuserController {

    @RequestMapping(method = RequestMethod.POST, produces = "text/html")
    public String create(@Valid Tuser tuser, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            populateEditForm(uiModel, tuser);
            return "tusers/create";
        }
        uiModel.asMap().clear();
        Date now = new Date();
        tuser.setCreatedOn(now);
        tuser.setUpdatedON(now);
        tuser.persist();
        return "redirect:/tusers/" + encodeUrlPathSegment(tuser.getId().toString(), httpServletRequest);
    }

    @RequestMapping(params = "find=ByUseridEquals", method = RequestMethod.GET)
    public String findTusersByUseridEquals(@RequestParam("userid") String userid, Model uiModel) {
        uiModel.addAttribute("tusers", Tuser.findTusersByUseridEquals(userid).getResultList());
        Tuser.generateTortlets(userid);
        return "tusers/list";
    }
}
