package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tortoise;
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
 * Time: 3:26 PM
 * To change this template use File | Settings | File Templates.
 */
public aspect TortoiseControllerAspect {

    pointcut aroundCreateTortoise(String jsonTortoiseString, String todayDate) : execution(* com.softrism.tortlets.web.TortoiseController.createFromJson(..)) && args(jsonTortoiseString, todayDate);

    Object around(String jsonTortoiseString, String todayDate) : aroundCreateTortoise(jsonTortoiseString, todayDate){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Tuser loggedInUser = Tuser.findTusersByUseridEquals(userDetails.getUsername()).getSingleResult();
        long loggedInUserId = loggedInUser.getId().longValue();
        Tortoise tortoise = Tortoise.fromJsonToTortoise(jsonTortoiseString);
        System.out.println("Creating Tortoise : " + tortoise.toString());
        long userIdRequesting = Long.parseLong( tortoise.getUserid());
        if( loggedInUserId != userIdRequesting){
            System.out.println("Userid does not match with logged in user while creating tortoise !!!");
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json");
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        ResponseEntity responseEntity = (ResponseEntity)proceed(jsonTortoiseString, todayDate);
        //Tortoise tortoisePersisted = Tortoise.fromJsonToTortoise((String)responseEntity.getBody());
        //tortoisePersisted = Tortoise.findTortoise(tortoisePersisted.getId());
        //Tuser.processTortoise(tortoisePersisted);
        return responseEntity;


    }


    pointcut aroundUpdateTortoise(String jsonTortoiseString) : execution(* com.softrism.tortlets.web.TortoiseController.updateFromJson(..)) && args(jsonTortoiseString);

    Object around(String jsonTortoiseString) : aroundUpdateTortoise(jsonTortoiseString){

        Tortoise tortoise = Tortoise.fromJsonToTortoise(jsonTortoiseString);
        System.out.println("Updating Tortoise : " + tortoise.toString());

        ResponseEntity responseEntity = (ResponseEntity)proceed(jsonTortoiseString);

        return responseEntity;

    }


    }
