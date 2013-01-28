package com.softrism.tortlets.domain;

import flexjson.JSONSerializer;
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
@RooJpaActiveRecord(finders = { "findTortoisesByUseridEquals" })
@RooJson(deepSerialize = false)
public class Tortoise {

    @NotNull
    private String title;

    private String frequency;

    @Size(min = 0, max = 4000)
    private String notes;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date startDate;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date endDate;

    private int latestTortoiseScore;

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
    private Dream dream;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tortoise", fetch = FetchType.LAZY)
    private Set<Tortlet> tortlets = new HashSet<Tortlet>();

    private Boolean monday;

    private Boolean tuesday;

    private Boolean wednesday;

    private Boolean thursday;

    private Boolean friday;

    private Boolean saturday;

    private Boolean sunday;

    @Enumerated(EnumType.STRING)
    private TortoiseStatusEnum status;

    @Enumerated(EnumType.STRING)
    private TortoiseDurationTypeEnum duration;

    private String userid;

}
