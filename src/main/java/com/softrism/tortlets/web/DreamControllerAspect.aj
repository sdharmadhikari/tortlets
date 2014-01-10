package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tuser;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Created with IntelliJ IDEA.
 * User: sudhir
 * Date: 6/18/13
 * Time: 2:29 PM
 * To change this template use File | Settings | File Templates.
 */
public aspect DreamControllerAspect {

    pointcut aroundCreateDream(String jsonDreamString) : execution(* com.softrism.tortlets.web.DreamController.createFromJson(..)) && args(jsonDreamString);

    Object around(String jsonDreamString) : aroundCreateDream(jsonDreamString){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Tuser loggedInTuser = Tuser.findTusersByUseridEquals(userDetails.getUsername()).getSingleResult();

        Dream dream = Dream.fromJsonToDream(jsonDreamString);
        System.out.println(dream.toString());
        Tuser tuserRequesting = dream.getTuser();
        System.out.println("loggedInTuser : " + loggedInTuser.getId() + " and " + "tuserRequesting : " + tuserRequesting.getId());
        if( loggedInTuser.getId().longValue() != tuserRequesting.getId().longValue()){
            System.out.println("Userid does not match with logged in user while creating dream !!!");
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json");
            return new ResponseEntity <String>(headers, HttpStatus.NOT_FOUND);
        }
        return (ResponseEntity)proceed(jsonDreamString);


    }
}
