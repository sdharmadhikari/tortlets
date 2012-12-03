package com.softrism.tortlets.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.TypedQuery;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;

@RooJavaBean
@RooToString
@RooJpaActiveRecord(finders = { "ByTuserAndCreatedOnEquals" ,"findTortletsByCompleted"})
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

    @ManyToOne
    private Tortoise tortoise;

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
    
    public static TypedQuery<Tortlet> findTortletsByCompleted(Boolean completed) {
        if (completed == null) throw new IllegalArgumentException("The completed argument is required");
        EntityManager em = Tortlet.entityManager();
        TypedQuery<Tortlet> q = null;
        if(completed){
        	q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.completed = :completed", Tortlet.class);
        }else{
        	q = em.createQuery("SELECT o FROM Tortlet AS o WHERE o.completed = :completed or o.completed is null", Tortlet.class);
        }
        q.setParameter("completed", completed);
        return q;
    }
}
