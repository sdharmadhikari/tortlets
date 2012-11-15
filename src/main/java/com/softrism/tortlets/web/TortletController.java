package com.softrism.tortlets.web;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.TypedQuery;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.joda.time.DateMidnight;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.web.mvc.controller.finder.RooWebFinder;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tortlet;
import com.softrism.tortlets.domain.Tortoise;
import com.softrism.tortlets.domain.Tuser;

@RequestMapping("/tortlets")
@Controller
@RooWebScaffold(path = "tortlets", formBackingObject = Tortlet.class,create = false, delete = false)
@RooWebFinder
public class TortletController {

    @RequestMapping(params = { "find=ByTuserAndCreatedOnEquals", "form" }, method = RequestMethod.GET)
    public String findTortletsByTuserAndCreatedOnEqualsForm(Model uiModel) {
        uiModel.addAttribute("tusers", Tuser.findAllTusers());
        addDateTimeFormatPatterns(uiModel);
        return "tortlets/findTortletsByTuserAndCreatedOnEquals";
    }

    @RequestMapping(params = "find=ByTuserAndCreatedOnEquals", method = RequestMethod.GET)
    public String findTortletsByTuserAndCreatedOnEquals(@RequestParam("tuser") Tuser tuser, @RequestParam("createdOn") @DateTimeFormat(style = "M-") Date createdOn,Model uiModel) {

    	//Date createdOn = new Date();
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
    
//    @RequestMapping(method = RequestMethod.PUT, produces = "text/html")
//    public String update(@Valid Tortlet tortlet, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
//        if (bindingResult.hasErrors()) {
//            populateEditForm(uiModel, tortlet);
//            return "tortlets/update";
//        }
//        uiModel.asMap().clear();
//        Tortlet oldTortlet = Tortlet.findTortlet(tortlet.getId());
//        boolean wasCompleted = oldTortlet.getCompleted()==null?false:oldTortlet.getCompleted().booleanValue();
//        boolean nowCompleted = tortlet.getCompleted()==null?false:tortlet.getCompleted().booleanValue();
//        Date now = new Date();
//        if( !wasCompleted && nowCompleted ){
//	        tortlet.setCompletedOn(now);
//	        tortlet.setUpdatedOn(now);
//	        
//	        Tortoise tortoise = oldTortlet.getTortoise();
//	        tortoise.setTortletsCompletedCount(tortoise.getTortletsCompletedCount()+1);
//	        tortoise.setUpdatedOn(now);
//	        tortlet.setTortoise(tortoise);
//	        
//	        Dream dream = tortoise.getDream();
//	        dream.setTortletsCompletedCount(dream.getTortletsCompletedCount()+1);
//	        dream.setUpdatedOn(now);
//	        tortoise.setDream(dream);
//	        
//	        Tuser tuser = dream.getTuser();
//	        tuser.setTortletsCompletedCount(tuser.getTortletsCompletedCount()+1);
//	        tuser.setUpdatedON(now);
//	        dream.setTuser(tuser);
//	        
//        }
//        
//        tortlet.merge();
//        return "redirect:/tortlets/" + encodeUrlPathSegment(tortlet.getId().toString(), httpServletRequest);
//    }

// This method is almost same as above. But in JSON communication, this will work only if Json tortlet has id of Tortoise.
  @RequestMapping(method = RequestMethod.PUT, produces = "text/html")
  public String update(@Valid Tortlet tortlet, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
      if (bindingResult.hasErrors()) {
          populateEditForm(uiModel, tortlet);
          return "tortlets/update";
      }
      uiModel.asMap().clear();
      Tortlet oldTortlet = Tortlet.findTortlet(tortlet.getId());
      boolean wasCompleted = oldTortlet.getCompleted()==null?false:oldTortlet.getCompleted().booleanValue();
      boolean nowCompleted = tortlet.getCompleted()==null?false:tortlet.getCompleted().booleanValue();
      Date now = new Date();
      if( !wasCompleted && nowCompleted ){
	        tortlet.setCompletedOn(now);
	        tortlet.setUpdatedOn(now);
	        
	        Tortoise tortoise = tortlet.getTortoise();
	        tortoise.setTortletsCompletedCount(tortoise.getTortletsCompletedCount()+1);
	        tortoise.setUpdatedOn(now);
	        tortlet.setTortoise(tortoise);
	        
	        Dream dream = tortoise.getDream();
	        dream.setTortletsCompletedCount(dream.getTortletsCompletedCount()+1);
	        dream.setUpdatedOn(now);
	        tortoise.setDream(dream);
	        
	        Tuser tuser = dream.getTuser();
	        tuser.setTortletsCompletedCount(tuser.getTortletsCompletedCount()+1);
	        tuser.setUpdatedON(now);
	        dream.setTuser(tuser);
	        
      }
      
      tortlet.merge();
      return "redirect:/tortlets/" + encodeUrlPathSegment(tortlet.getId().toString(), httpServletRequest);
  }
    
}
