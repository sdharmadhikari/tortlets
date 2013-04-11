// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tortlet;
import com.softrism.tortlets.web.TortletController;
import java.util.List;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

privileged aspect TortletController_Roo_Controller_Json {
    
    @RequestMapping(value = "/{id}", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> TortletController.showJson(@PathVariable("id") Long id) {
        Tortlet tortlet = Tortlet.findTortlet(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        if (tortlet == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(tortlet.toJson(), headers, HttpStatus.OK);
    }
    
    @RequestMapping(headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> TortletController.listJson() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        List<Tortlet> result = Tortlet.findAllTortlets();
        return new ResponseEntity<String>(Tortlet.toJsonArray(result), headers, HttpStatus.OK);
    }
    
    @RequestMapping(method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> TortletController.createFromJson(@RequestBody String json) {
        Tortlet tortlet = Tortlet.fromJsonToTortlet(json);
        tortlet.persist();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }
    
    @RequestMapping(value = "/jsonArray", method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> TortletController.createFromJsonArray(@RequestBody String json) {
        for (Tortlet tortlet: Tortlet.fromJsonArrayToTortlets(json)) {
            tortlet.persist();
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }
    
    @RequestMapping(value = "/jsonArray", method = RequestMethod.PUT, headers = "Accept=application/json")
    public ResponseEntity<String> TortletController.updateFromJsonArray(@RequestBody String json) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        for (Tortlet tortlet: Tortlet.fromJsonArrayToTortlets(json)) {
            if (tortlet.merge() == null) {
                return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
    public ResponseEntity<String> TortletController.deleteFromJson(@PathVariable("id") Long id) {
        Tortlet tortlet = Tortlet.findTortlet(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        if (tortlet == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        tortlet.remove();
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }
    
    @RequestMapping(params = "find=ByCompleted", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> TortletController.jsonFindTortletsByCompleted(@RequestParam(value = "completed", required = false) Boolean completed) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        return new ResponseEntity<String>(Tortlet.toJsonArray(Tortlet.findTortletsByCompleted(completed == null ? Boolean.FALSE : completed).getResultList()), headers, HttpStatus.OK);
    }
    
    @RequestMapping(params = "find=ByUseridEquals", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> TortletController.jsonFindTortletsByUseridEquals(@RequestParam("userid") String userid) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        return new ResponseEntity<String>(Tortlet.toJsonArray(Tortlet.findTortletsByUseridEquals(userid).getResultList()), headers, HttpStatus.OK);
    }
    
}
