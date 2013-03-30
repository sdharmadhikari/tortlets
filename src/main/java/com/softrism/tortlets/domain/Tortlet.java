package com.softrism.tortlets.domain;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.json.RooJson;
import org.springframework.roo.addon.tostring.RooToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RooJavaBean
@RooToString
@RooJpaActiveRecord(finders = { "ByTuserAndCreatedOnEquals", "findTortletsByCompleted", "findTortletsByUseridEquals", "findTortletsByUseridEqualsAndCreatedOnEqualsAndCompleted", "findTortletsByUseridEqualsAndCompleted" })
@RooJson
public class Tortlet {

    @NotNull
    private String title;

    private Boolean completed;

    @Size(min = 0, max = 5000)
    private String notes;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date createdOn;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date updatedOn;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date completedOn;

    @ManyToOne(fetch = FetchType.LAZY)
    private Tortoise tortoise;

    private String userid;

    @PrePersist
    private void prePersist(){
        Date now = new Date();
        createdOn = now;
        updatedOn = now;
    }

    @PreUpdate
    private void preUpdate(){
        Date now = new Date();
        updatedOn = now;
    }

    public static TypedQuery<com.softrism.tortlets.domain.Tortlet> findTortletsByTuserAndCreatedOnEquals(Tuser tuser, Date createdOn) {
        if (tuser == null) throw new IllegalArgumentException("The tuser argument is required");
        if (createdOn == null) throw new IllegalArgumentException("The createdOn argument is required");
        EntityManager em = Tortlet.entityManager();
        TypedQuery<Tortlet> q = null;
        List<Tortoise> tortoiseList = new ArrayList();
        for (Dream dream : tuser.getDreams()) {
            tortoiseList.addAll(dream.getTortoises());
        }
        if (tortoiseList.size() == 0) {
            return null;
        } else {
            Boolean completed = new Boolean(true);
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.tortoise in :tortoiseList and o.completed IS NOT :completed or o.completed is null", Tortlet.class);
            q.setParameter("tortoiseList", tortoiseList);
            q.setParameter("completed", completed);
        }
        return q;
    }

    public static TypedQuery<com.softrism.tortlets.domain.Tortlet> findTortletsByCompletedCustom(Boolean completed) {
        if (completed == null) throw new IllegalArgumentException("The completed argument is required");
        EntityManager em = Tortlet.entityManager();
        TypedQuery<Tortlet> q = null;
        if (completed == null ? false : completed.booleanValue()) {
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.completed IS NOT :completed or o.completed is null", Tortlet.class);
        } else {
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.completed IS NOT :completed", Tortlet.class);
        }
        q.setParameter("completed", completed);
        return q;
    }

    public static TypedQuery<com.softrism.tortlets.domain.Tortlet> findTortletsByCompleted(Boolean completed) {
        if (completed == null) throw new IllegalArgumentException("The completed argument is required");
        EntityManager em = Tortlet.entityManager();
        TypedQuery<Tortlet> q = null;
        if (completed) {
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.completed = :completed order by o.createdOn asc", Tortlet.class);
        } else {
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.completed = :completed or o.completed is null order by o.createdOn asc", Tortlet.class);
        }
        q.setParameter("completed", completed);
        return q;
    }

    public static TypedQuery<com.softrism.tortlets.domain.Tortlet> findTortletsByUseridEqualsAndCompleted(String userid, Boolean completed) {
        if (userid == null || userid.length() == 0) throw new IllegalArgumentException("The userid argument is required");
        if (completed == null) throw new IllegalArgumentException("The completed argument is required");
        EntityManager em = Tortlet.entityManager();
        TypedQuery<Tortlet> q = null;
        if (completed) {
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.userid = :userid  AND o.completed = :completed order by o.createdOn asc", Tortlet.class);
            q.setParameter("completed", completed);
        } else {
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.userid = :userid  AND o.completed is null order by o.createdOn asc", Tortlet.class);
        }
        q.setParameter("userid", userid);
        return q;
    }

    public static TypedQuery<com.softrism.tortlets.domain.Tortlet> findTortletsByUseridEqualsAndCreatedOnEqualsAndCompleted(String userid, Date createdOn, Boolean completed) {
        if (userid == null || userid.length() == 0) throw new IllegalArgumentException("The userid argument is required");
        if (createdOn == null) throw new IllegalArgumentException("The createdOn argument is required");
        if (completed == null) throw new IllegalArgumentException("The completed argument is required");
        EntityManager em = Tortlet.entityManager();
        TypedQuery<Tortlet> q = null;
        if (completed) {
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.userid = :userid  AND o.completed = :completed", Tortlet.class);
            q.setParameter("completed", completed);
        } else {
            q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.userid = :userid  AND o.completed is null", Tortlet.class);
        }
        q.setParameter("userid", userid);
        return q;
    }
}
