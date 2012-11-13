package com.softrism.tortlets.web;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.TypedQuery;

import org.joda.time.DateMidnight;
import org.joda.time.DateTime;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.web.mvc.controller.finder.RooWebFinder;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.softrism.tortlets.domain.Tortlet;
import com.softrism.tortlets.domain.Tuser;

@RequestMapping("/tortlets")
@Controller
@RooWebScaffold(path = "tortlets", formBackingObject = Tortlet.class,create = false, update = false, delete = false)
@RooWebFinder
public class TortletController {

    @RequestMapping(params = { "find=ByTuserAndCreatedOnEquals", "form" }, method = RequestMethod.GET)
    public String findTortletsByTuserAndCreatedOnEqualsForm(Model uiModel) {
        uiModel.addAttribute("tusers", Tuser.findAllTusers());
        addDateTimeFormatPatterns(uiModel);
        return "tortlets/findTortletsByTuserAndCreatedOnEquals";
    }

    @RequestMapping(params = "find=ByTuserAndCreatedOnEquals", method = RequestMethod.GET)
    public String findTortletsByTuserAndCreatedOnEquals(@RequestParam("tuser") Tuser tuser, Model uiModel) {

    	Date createdOn = new Date();
    	List<Tortlet> resultList = new ArrayList<Tortlet>();
        TypedQuery<Tortlet> q = Tortlet.findTortletsByTuserAndCreatedOnEquals(tuser, createdOn);
        if (q != null) {
        	List<Tortlet> list = q.getResultList();
        	for(Tortlet tortlet : list){
        		if(tortlet.getCreatedOn() != null) {       			
	        		DateMidnight dt = new DateMidnight(tortlet.getCreatedOn());
	        		System.out.println("checking tortlet.." + tortlet.getId());
	        		if(dt.isEqual(new DateMidnight(createdOn))){
	        			resultList.add(tortlet);
	        		}
        		}
        	}
            uiModel.addAttribute("tortlets", resultList);
        } else {
            uiModel.addAttribute("tortlets", new ArrayList<Tortlet>());
        }
        addDateTimeFormatPatterns(uiModel);
        return "tortlets/list";
    }
}
