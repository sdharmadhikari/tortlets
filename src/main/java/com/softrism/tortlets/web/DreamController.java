package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.DreamStatusEnum;
import com.softrism.tortlets.domain.Tuser;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

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

@RequestMapping("/dreams")
@Controller
@RooWebScaffold(path = "dreams", formBackingObject = Dream.class)
@RooWebFinder
@RooWebJson(jsonObject = Dream.class)
public class DreamController {

    @RequestMapping(method = RequestMethod.POST, produces = "text/html")
    public String create(@Valid Dream dream, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Tuser tuser = Tuser.findTusersByUseridEquals(userDetails.getUsername()).getSingleResult();
        dream.setTuser(tuser);
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

    @RequestMapping(method = RequestMethod.PUT, produces = "text/html")
    public String update(@Valid Dream dream, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            populateEditForm(uiModel, dream);
            return "dreams/update";
        }
        uiModel.asMap().clear();
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Tuser tuser = Tuser.findTusersByUseridEquals(userDetails.getUsername()).getSingleResult();
        dream.setTuser(tuser);
        Date now = new Date();
        dream.setUpdatedOn(now);
        dream.merge();
        return "redirect:/dreams/" + encodeUrlPathSegment(dream.getId().toString(), httpServletRequest);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = "text/html")
    public String delete(@PathVariable("id") Long id, @RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        Dream dream = Dream.findDream(id);
        dream.remove();
        uiModel.asMap().clear();
        uiModel.addAttribute("page", (page == null) ? "1" : page.toString());
        uiModel.addAttribute("size", (size == null) ? "10" : size.toString());
        return "redirect:/dreams?find=ByUseridEquals";
    }

    ///---------json-----------------------json-----------------------json-----------------------json-----------------------json--------------


    // Really dont want to have this method and want to handle everything in aspect but
    // i can not access dream object after persist (with id populated) in aspect !
    @RequestMapping(method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> createFromJson(@RequestBody String json) {
        Dream dream = Dream.fromJsonToDream(json);
        dream.persist();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(dream.toJson(),headers, HttpStatus.CREATED);
    }

}
