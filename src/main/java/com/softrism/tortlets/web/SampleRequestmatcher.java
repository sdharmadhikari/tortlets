package com.softrism.tortlets.web;

import org.springframework.security.web.util.RequestMatcher;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

/**
 * Created with IntelliJ IDEA.
 * User: sudhir
 * Date: 4/14/13
 * Time: 8:31 AM
 * To change this template use File | Settings | File Templates.
 */
public class SampleRequestmatcher implements RequestMatcher {
    @Override
    public boolean matches(HttpServletRequest request) {

        Enumeration eNames = request.getHeaderNames();
        while (eNames.hasMoreElements()) {
            String name = (String) eNames.nextElement();
            String value = normalize(request.getHeader(name));
            System.out.println(name + " : " + value);
            if(name.equalsIgnoreCase("Accept")){
                if(value.equals("application/json")){
                    return true;
                }
            }
        }
        return false;
    }

        private String normalize(String value)
        {
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < value.length(); i++) {
                char c = value.charAt(i);
                sb.append(c);
                if (c == ';')
                    sb.append("\n");
            }
            return sb.toString();
        }
}
