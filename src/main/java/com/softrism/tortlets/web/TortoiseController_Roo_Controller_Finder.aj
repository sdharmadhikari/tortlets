// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.web;

import com.softrism.tortlets.web.TortoiseController;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

privileged aspect TortoiseController_Roo_Controller_Finder {
    
    @RequestMapping(params = { "find=ByUseridEquals", "form" }, method = RequestMethod.GET)
    public String TortoiseController.findTortoisesByUseridEqualsForm(Model uiModel) {
        return "tortoises/findTortoisesByUseridEquals";
    }
    
}