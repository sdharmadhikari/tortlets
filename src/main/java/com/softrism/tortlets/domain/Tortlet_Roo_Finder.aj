// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.domain;

import com.softrism.tortlets.domain.Tortlet;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

privileged aspect Tortlet_Roo_Finder {
    
    public static TypedQuery<Tortlet> Tortlet.findTortletsByUseridEquals(String userid) {
        if (userid == null || userid.length() == 0) throw new IllegalArgumentException("The userid argument is required");
        EntityManager em = Tortlet.entityManager();
        TypedQuery<Tortlet> q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.userid = :userid", Tortlet.class);
        q.setParameter("userid", userid);
        return q;
    }
    
}
