package com.softrism.tortlets.domain;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.EntityManager;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.TypedQuery;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.json.RooJson;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.security.core.context.SecurityContextHolder;

@RooJavaBean
@RooToString
@RooJson
@RooJpaActiveRecord(finders = { "findDreamsByUseridEquals" })
public class Dream {

    @NotNull
    private String title;

    @Size(min = 0, max = 4000)
    private String notes;

    @NotNull
    @Value("LightBlue")
    private String dreamColor;

    private int latestDreamScore;

    private int tortletsCreatedCount;

    private int tortletsDeletedCount;

    private int tortletsCompletedCount;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date createdOn;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date updatedOn;

    @ManyToOne
    private Tuser tuser;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "dream")
    private Set<Tortoise> tortoises = new HashSet<Tortoise>();

    @Enumerated(EnumType.STRING)
    private DreamStatusEnum status;

    private String userid;
    
}
