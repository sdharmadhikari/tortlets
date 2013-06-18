// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tortoise;
import com.softrism.tortlets.web.TortoiseController;
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

privileged aspect TortoiseController_Roo_Controller_Json {
    
    @RequestMapping(value = "/{id}", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> TortoiseController.showJson(@PathVariable("id") Long id) {
        Tortoise tortoise = Tortoise.findTortoise(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        if (tortoise == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(tortoise.toJson(), headers, HttpStatus.OK);
    }
    
    @RequestMapping(headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> TortoiseController.listJson() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        List<Tortoise> result = Tortoise.findAllTortoises();
        return new ResponseEntity<String>(Tortoise.toJsonArray(result), headers, HttpStatus.OK);
    }
    
    @RequestMapping(method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> TortoiseController.createFromJson(@RequestBody String json) {
        Tortoise tortoise = Tortoise.fromJsonToTortoise(json);
        tortoise.persist();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }
    
    @RequestMapping(value = "/jsonArray", method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> TortoiseController.createFromJsonArray(@RequestBody String json) {
        for (Tortoise tortoise: Tortoise.fromJsonArrayToTortoises(json)) {
            tortoise.persist();
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }
    
    @RequestMapping(method = RequestMethod.PUT, headers = "Accept=application/json")
    public ResponseEntity<String> TortoiseController.updateFromJson(@RequestBody String json) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        Tortoise tortoise = Tortoise.fromJsonToTortoise(json);
        if (tortoise.merge() == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/jsonArray", method = RequestMethod.PUT, headers = "Accept=application/json")
    public ResponseEntity<String> TortoiseController.updateFromJsonArray(@RequestBody String json) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        for (Tortoise tortoise: Tortoise.fromJsonArrayToTortoises(json)) {
            if (tortoise.merge() == null) {
                return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
    public ResponseEntity<String> TortoiseController.deleteFromJson(@PathVariable("id") Long id) {
        Tortoise tortoise = Tortoise.findTortoise(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        if (tortoise == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        tortoise.remove();
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }
    
    @RequestMapping(params = "find=ByDreamAndUseridEquals", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> TortoiseController.jsonFindTortoisesByDreamAndUseridEquals(@RequestParam("dream") Dream dream, @RequestParam("userid") String userid) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        return new ResponseEntity<String>(Tortoise.toJsonArray(Tortoise.findTortoisesByDreamAndUseridEquals(dream, userid).getResultList()), headers, HttpStatus.OK);
    }
    
    @RequestMapping(params = "find=ByUseridEquals", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> TortoiseController.jsonFindTortoisesByUseridEquals(@RequestParam("userid") String userid) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        return new ResponseEntity<String>(Tortoise.toJsonArray(Tortoise.findTortoisesByUseridEquals(userid).getResultList()), headers, HttpStatus.OK);
    }
    
}
