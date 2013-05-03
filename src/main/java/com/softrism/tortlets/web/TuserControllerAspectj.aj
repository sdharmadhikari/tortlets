package com.softrism.tortlets.web;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;

import java.util.Arrays;

/**
 * Created with IntelliJ IDEA.
 * User: sudhir
 * Date: 4/23/13
 * Time: 8:35 PM
 * To change this template use File | Settings | File Templates.
 */

public aspect TuserControllerAspectj {
  /*
    @Around("execution(* com.softrism.tortlets.web.TuserController.jsonFindTusersByUseridEqualsAndPasswordEquals(..))")
    public Object interceptedMethod(ProceedingJoinPoint joinPoint)  {

        Object[] args =   joinPoint.getArgs();
        System.out.println("HICHECKED ARGUMENTS : " + Arrays.toString(args));

        try {
            return joinPoint.proceed(args);
        } catch (Throwable throwable) {
            throwable.printStackTrace();
            return null;//To change body of catch statement use File | Settings | File Templates.
        }

    }
   */
    pointcut authUser(String userid, String password) :  execution(* com.softrism.tortlets.web.TuserController.jsonFindTusersByUseridEqualsAndPasswordEquals(..)) && args(userid,password);

    Object around(String userid, String password) : authUser(userid,password){
        ShaPasswordEncoder encoder = new ShaPasswordEncoder(256);
        String encoded = encoder.encodePassword(password,null);
        System.out.println("userid " + userid);
        System.out.println("encoded " + encoded);
        return proceed(userid,encoded) ;
    }


}
