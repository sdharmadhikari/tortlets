package com.softrism.tortlets.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.TypedQuery;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;

@RooJavaBean
@RooToString
@RooJpaActiveRecord(finders = { "ByTuserAndCreatedOnEquals", "findTortletsByCreatedOnEquals" })
public class Tortlet {

    private String title;

    private Boolean completed;

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
}
