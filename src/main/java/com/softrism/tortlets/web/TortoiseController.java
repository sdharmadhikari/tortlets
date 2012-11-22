package com.softrism.tortlets.web;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.softrism.tortlets.domain.Tortoise;
import com.softrism.tortlets.domain.TortoiseStatusEnum;

@RequestMapping("/tortoises")
@Controller
@RooWebScaffold(path = "tortoises", formBackingObject = Tortoise.class)
public class TortoiseController {
	
    @RequestMapping(method = RequestMethod.POST, produces = "text/html")
    public String create(@Valid Tortoise tortoise, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            populateEditForm(uiModel, tortoise);
            return "tortoises/create";
        }
        uiModel.asMap().clear();
        Date now = new Date();
        tortoise.setCreatedOn(now);
        tortoise.setUpdatedOn(now);
        tortoise.setStatus(TortoiseStatusEnum.WALKING);
        tortoise.persist();
        return "redirect:/tortoises/" + encodeUrlPathSegment(tortoise.getId().toString(), httpServletRequest);
    }
}
