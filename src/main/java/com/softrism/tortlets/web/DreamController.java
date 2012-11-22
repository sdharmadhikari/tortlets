package com.softrism.tortlets.web;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.DreamStatusEnum;

import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RequestMapping("/dreams")
@Controller
@RooWebScaffold(path = "dreams", formBackingObject = Dream.class)
public class DreamController {

    @RequestMapping(method = RequestMethod.POST, produces = "text/html")
    public String create(@Valid Dream dream, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            populateEditForm(uiModel, dream);
            return "dreams/create";
        }
        uiModel.asMap().clear();
        Date now = new Date();
        dream.setCreatedOn(now);
        dream.setUpdatedOn(now);
        dream.setStatus(DreamStatusEnum.ACTIVE);
        dream.persist();
        return "redirect:/dreams/" + encodeUrlPathSegment(dream.getId().toString(), httpServletRequest);
    }
}
