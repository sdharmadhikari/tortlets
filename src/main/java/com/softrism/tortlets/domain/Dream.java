package com.softrism.tortlets.domain;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.json.RooJson;
import org.springframework.roo.addon.tostring.RooToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@RooJavaBean
@RooToString
@RooJpaActiveRecord(finders = { "findDreamsByUseridEquals" })
@RooJson(deepSerialize = false)
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

    @ManyToOne(fetch = FetchType.LAZY)
    private Tuser tuser;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "dream", fetch = FetchType.LAZY)
    private Set<Tortoise> tortoises = new HashSet<Tortoise>();

    @Enumerated(EnumType.STRING)
    private DreamStatusEnum status;

    private String userid;

    @PrePersist
    private void prePersist(){

        Date now = new Date();
        createdOn = now;
        updatedOn = now;
        status = DreamStatusEnum.ACTIVE; // later need to be removed as Status will come from client.

    }

    @PreUpdate
    private void preUpdate(){
        Date now = new Date();
        updatedOn = now;
    }
}
