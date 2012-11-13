// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tortlet;
import com.softrism.tortlets.web.TortletController;
import org.joda.time.format.DateTimeFormat;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

privileged aspect TortletController_Roo_Controller {
    
    @RequestMapping(value = "/{id}", produces = "text/html")
    public String TortletController.show(@PathVariable("id") Long id, Model uiModel) {
        addDateTimeFormatPatterns(uiModel);
        uiModel.addAttribute("tortlet", Tortlet.findTortlet(id));
        uiModel.addAttribute("itemId", id);
        return "tortlets/show";
    }
    
    @RequestMapping(produces = "text/html")
    public String TortletController.list(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        if (page != null || size != null) {
            int sizeNo = size == null ? 10 : size.intValue();
            final int firstResult = page == null ? 0 : (page.intValue() - 1) * sizeNo;
            uiModel.addAttribute("tortlets", Tortlet.findTortletEntries(firstResult, sizeNo));
            float nrOfPages = (float) Tortlet.countTortlets() / sizeNo;
            uiModel.addAttribute("maxPages", (int) ((nrOfPages > (int) nrOfPages || nrOfPages == 0.0) ? nrOfPages + 1 : nrOfPages));
        } else {
            uiModel.addAttribute("tortlets", Tortlet.findAllTortlets());
        }
        addDateTimeFormatPatterns(uiModel);
        return "tortlets/list";
    }
    
    void TortletController.addDateTimeFormatPatterns(Model uiModel) {
        uiModel.addAttribute("tortlet_createdon_date_format", DateTimeFormat.patternForStyle("M-", LocaleContextHolder.getLocale()));
        uiModel.addAttribute("tortlet_updatedon_date_format", DateTimeFormat.patternForStyle("M-", LocaleContextHolder.getLocale()));
        uiModel.addAttribute("tortlet_completedon_date_format", DateTimeFormat.patternForStyle("M-", LocaleContextHolder.getLocale()));
    }
    
}
