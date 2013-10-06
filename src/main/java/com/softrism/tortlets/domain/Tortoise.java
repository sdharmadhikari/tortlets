package com.softrism.tortlets.domain;

import com.softrism.tortlets.TortletsConstants;
import flexjson.JSONSerializer;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.joda.time.DateMidnight;
import org.joda.time.DateTime;
import org.joda.time.DateTimeConstants;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.json.RooJson;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.transaction.annotation.Transactional;

@RooJavaBean
@RooToString
@RooJson(deepSerialize = false)
@RooJpaActiveRecord(finders = { "findTortoisesByUseridEquals", "findTortoisesByDreamAndUseridEquals" })
public class Tortoise {

    private static final Log log = LogFactory.getLog(Tortoise.class);

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

    @Transactional
    public void processForTortletGeneration( Integer today){
        DateTime jdTime = new DateTime();
        int dayOfWeek = 0;
        if(today == null){
            dayOfWeek = jdTime.getDayOfWeek();
        }else{
            dayOfWeek = today.intValue();
        }
        boolean shouldCreate = false;
        Dream dream = Dream.findDream(this.getDream().getId()); // Have to do this again because if calling from
        // TortoiseController, dream is detached. (even if I get tortoise persisted from using findTortoise !
        Tuser tuser = dream.getTuser();
        boolean tortoiseStarted = this.getStartDate() == null ? true : jdTime.isAfter(this.getStartDate().getTime());
        DateMidnight tortoiseEndMidnight = this.getEndDate() == null ? new DateMidnight() : new DateMidnight(this.getEndDate());
        tortoiseEndMidnight = tortoiseEndMidnight.plusDays(1);
        boolean tortoiseAlive = jdTime.isBefore(tortoiseEndMidnight.getMillis());
        if (tortoiseStarted && tortoiseAlive) {
            switch(dayOfWeek) {
                case (DateTimeConstants.MONDAY):
                    if (this.getMonday() == null ? false : this.getMonday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.TUESDAY):
                    if (this.getTuesday() == null ? false : this.getTuesday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.WEDNESDAY):
                    if (this.getWednesday() == null ? false : this.getWednesday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.THURSDAY):
                    if (this.getThursday() == null ? false : this.getThursday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.FRIDAY):
                    if (this.getFriday() == null ? false : this.getFriday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.SATURDAY):
                    if (this.getSaturday() == null ? false : this.getSaturday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.SUNDAY):
                    if (this.getSunday() == null ? false : this.getSunday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
            }
        } else {
            log.info("Skipping creating tortlet for tuser : " + tuser.getUserid() + " for tortoise " + this.getTitle());
            log.info("because tortoise has startDate " + this.getStartDate() + " and end date " + this.getEndDate());
        }
        if (shouldCreate) {
            log.info("Creating new tortlet for tortoise : " + this.getTitle());
            Tortlet tortlet = new Tortlet();
            tortlet.setUserid(tuser.getUserid());
            tortlet.setTitle(this.getTitle() + " - " + jdTime.dayOfWeek().getAsShortText() + "," + jdTime.toString(org.joda.time.format.DateTimeFormat.forPattern("MM/dd")));
            int tortoiseCreatedCount = this.getTortletsCreatedCount() + 1;
            int tortoiseCompletedCount = this.getTortletsCompletedCount();
            int tortoiseScore = (tortoiseCompletedCount * TortletsConstants.MAX_SCORE_VALUE) / tortoiseCreatedCount;
            this.setTortletsCreatedCount(tortoiseCreatedCount);
            this.setLatestTortoiseScore(tortoiseScore);
            int dreamCreatedCount = dream.getTortletsCreatedCount() + 1;
            int dreamCompletedCount = dream.getTortletsCompletedCount();
            int dreamScore = (dreamCompletedCount * TortletsConstants.MAX_SCORE_VALUE) / dreamCreatedCount;
            dream.setTortletsCreatedCount(dreamCreatedCount);
            dream.setLatestDreamScore(dreamScore);
            int tuserCreatedCount = tuser.getTortletsCreatedCount() + 1;
            int tuserCompletedCount = tuser.getTortletsCompletedCount();
            int tuserScore = (tuserCompletedCount * TortletsConstants.MAX_SCORE_VALUE) / tuserCreatedCount;
            tuser.setTortletsCreatedCount(tuserCreatedCount);
            tuser.setLatestDreamScore(tuserScore);
            tortlet.setTortoise(this);
            this.setDream(dream);
            dream.setTuser(tuser);
            tortlet.persist();
        }

    }
}
