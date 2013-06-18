package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tortoise;
import com.softrism.tortlets.domain.TortoiseStatusEnum;
import java.util.Arrays;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.softrism.tortlets.domain.Tuser;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.roo.addon.web.mvc.controller.finder.RooWebFinder;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/tortoises")
@Controller
@RooWebScaffold(path = "tortoises", formBackingObject = Tortoise.class)
@RooWebFinder
@RooWebJson(jsonObject = Tortoise.class)
public class TortoiseController {

    @RequestMapping(method = RequestMethod.POST, produces = "text/html")
    public String create(@Valid Tortoise tortoise, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            populateEditForm(uiModel, tortoise);
            return "tortoises/create";
        }
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        tortoise.setUserid(userDetails.getUsername());
        uiModel.asMap().clear();
        Date now = new Date();
        tortoise.setCreatedOn(now);
        tortoise.setUpdatedOn(now);
        tortoise.setStatus(TortoiseStatusEnum.WALKING);
        tortoise.persist();
        return "redirect:/tortoises/" + encodeUrlPathSegment(tortoise.getId().toString(), httpServletRequest);
    }

    @RequestMapping(params = "find=ByUseridEquals", method = RequestMethod.GET)
    public String findTortoisesByUseridEquals(@RequestParam(value = "userid", required = false) String userid, Model uiModel) {
        if (userid == null || userid.length() == 0) {
            UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            userid = userDetails.getUsername();
        }
        uiModel.addAttribute("tortoises", Tortoise.findTortoisesByUseridEquals(userid).getResultList());
        return "tortoises/list";
    }

    @RequestMapping(method = RequestMethod.PUT, produces = "text/html")
    public String update(@Valid Tortoise tortoise, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            populateEditForm(uiModel, tortoise);
            return "tortoises/update";
        }
        uiModel.asMap().clear();
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        tortoise.setUserid(userDetails.getUsername());
        Date now = new Date();
        tortoise.setUpdatedOn(now);
        tortoise.merge();
        return "redirect:/tortoises/" + encodeUrlPathSegment(tortoise.getId().toString(), httpServletRequest);
    }

    @RequestMapping(params = "form", produces = "text/html")
    public String createForm(Model uiModel) {
        populateEditForm(uiModel, new Tortoise());
        return "tortoises/create";
    }

    void populateEditForm(Model uiModel, Tortoise tortoise) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userid = userDetails.getUsername();
        uiModel.addAttribute("tortoise", tortoise);
        addDateTimeFormatPatterns(uiModel);
        uiModel.addAttribute("dreams", com.softrism.tortlets.domain.Dream.findDreamsByUseridEquals(userid).getResultList());
        uiModel.addAttribute("tortlets", com.softrism.tortlets.domain.Tortlet.findTortletsByUseridEquals(userid).getResultList());
        uiModel.addAttribute("tortoisedurationtypeenums", Arrays.asList(com.softrism.tortlets.domain.TortoiseDurationTypeEnum.values()));
        uiModel.addAttribute("tortoisestatusenums", Arrays.asList(com.softrism.tortlets.domain.TortoiseStatusEnum.values()));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = "text/html")
    public String delete(@PathVariable("id") Long id, @RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        Tortoise tortoise = Tortoise.findTortoise(id);
        tortoise.remove();
        uiModel.asMap().clear();
        uiModel.addAttribute("page", (page == null) ? "1" : page.toString());
        uiModel.addAttribute("size", (size == null) ? "10" : size.toString());
        return "redirect:/tortoises?find=ByUseridEquals";


    }

    ///////json///////////////////////////json///////////////////////////json//////////////////////////


}
