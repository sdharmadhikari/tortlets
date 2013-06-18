package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Tuser;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;

import java.util.Arrays;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: sudhir
 * Date: 4/23/13
 * Time: 8:35 PM
 * To change this template use File | Settings | File Templates.
 */

public aspect TuserControllerAspect {

    pointcut authUser(String userid, String password) :  execution(* com.softrism.tortlets.web.TuserController.jsonFindTusersByUseridEqualsAndPasswordEquals(..)) && args(userid,password);

    Object around(String userid, String password) : authUser(userid,password){
        ShaPasswordEncoder encoder = new ShaPasswordEncoder(256);
        String encoded = encoder.encodePassword(password,null);
        System.out.println("userid " + userid);
        System.out.println("encoded " + encoded);
        return proceed(userid,encoded) ;
    }

    pointcut aroundCreateUSer(String jsonUserString) : execution(* com.softrism.tortlets.web.TuserController.createFromJson(..)) && args(jsonUserString);

    Object around(String jsonUserString) : aroundCreateUSer(jsonUserString){

        Tuser tuser = Tuser.fromJsonToTuser(jsonUserString);

        String userid = tuser.getUserid();
        List tuserList = Tuser.findTusersByUseridEquals(userid.trim()).getResultList();
        while(tuserList.size() > 0){
            double random = Math.random();
            int count = (int)(random * 1000);
            userid = userid + count;
            tuserList = Tuser.findTusersByUseridEquals(userid.trim()).getResultList();
        }

        tuser.setUserid(userid);
        ShaPasswordEncoder encoder = new ShaPasswordEncoder(256);
        String password = tuser.getPassword() ;

        String encoded = encoder.encodePassword(password,null);
        tuser.setPassword(encoded);
        String finalJsonUser = tuser.toJson();

        ResponseEntity responseEntity = (ResponseEntity)proceed(finalJsonUser);

        tuser = Tuser.findTusersByUseridEquals(userid).getSingleResult();
        tuser.setPassword(null);

        return new ResponseEntity<String>(tuser.toJson(),responseEntity.getHeaders(), responseEntity.getStatusCode());
    }

    pointcut aroundUpdateUSer(String jsonUserString) : execution(* com.softrism.tortlets.web.TuserController.updateFromJson(..)) && args(jsonUserString);

    Object around(String jsonUserString) : aroundUpdateUSer(jsonUserString){
        Tuser tuser = Tuser.fromJsonToTuser(jsonUserString);

        String newUserId = tuser.getUserid();
        Tuser oldTuser = Tuser.findTuser(tuser.getId());

        if(! oldTuser.getUserid().equalsIgnoreCase(tuser.getUserid())){
            List<Tuser> alreadyTusers= Tuser.findTusersByUseridEquals(tuser.getUserid()).getResultList();
            if(alreadyTusers.size() > 0){
                HttpHeaders headers = new HttpHeaders();
                headers.add("Content-Type", "application/json");
                return new ResponseEntity<String>(headers, HttpStatus.CONFLICT);
            }

        }

        ShaPasswordEncoder encoder = new ShaPasswordEncoder(256);
        String password = tuser.getPassword() ;
        String encoded = encoder.encodePassword(password,null);
        tuser.setPassword(encoded);

        String finalJsonUser = tuser.toJson();
        ResponseEntity responseEntity = (ResponseEntity)proceed(finalJsonUser);

        tuser = Tuser.findTuser(tuser.getId());
        tuser.setPassword(null);
        return new ResponseEntity<String>(tuser.toJson(),responseEntity.getHeaders(), responseEntity.getStatusCode());

    }
    /*
    This does not work, neither if I move throws close with try/catch
     @Around("execution(* com.softrism.tortlets.web.TuserController.jsonFindTusersByUseridEqualsAndPasswordEquals(..)) && args(userid,password)")
     public Object myMethod(ProceedingJoinPoint jointPoint, String userid, String password) throws Throwable {
         ShaPasswordEncoder encoder = new ShaPasswordEncoder(256);
         String encoded = encoder.encodePassword(password,null);
         System.out.println("userid " + userid);
         System.out.println("encoded " + encoded);

         return jointPoint.proceed(new Object[] {userid,encoded}) ;
     }
     */


}
