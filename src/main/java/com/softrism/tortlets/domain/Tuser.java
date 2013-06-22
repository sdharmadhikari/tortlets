package com.softrism.tortlets.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.softrism.tortlets.TortletsConstants;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.joda.time.DateMidnight;
import org.joda.time.DateTime;
import org.joda.time.DateTimeConstants;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.json.RooJson;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

@RooJavaBean
@RooToString
@RooJson(deepSerialize = false)
@RooJpaActiveRecord(finders = { "findTusersByUseridEquals", "findTusersByUseridEqualsAndPasswordEquals" })
public class Tuser {

    private static final Log log = LogFactory.getLog(Tuser.class);

    @NotNull
    @Size(min = 3, max = 23)
    @Column(unique = true)
    private String userid;

    @NotNull
    @Size(min = 6, max = 1024)
    private String password;

    @Size(min = 0, max = 25)
    private String firstName;

    @Size(min = 0, max = 25)
    private String lastName;

    private String userEmail;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date birthDate;

    @NotNull
    @Enumerated(EnumType.STRING)
    private TuserStatusEnum status;

    @NotNull
    @Enumerated(EnumType.STRING)
    private TuserTimezoneEnum timezone;

    @NotNull
    @Value("USER")
    private String roleName;

    @Column(updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date createdOn;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date updatedOn;

    @Value("7")
    private int allowedDelayDays;

    private int latestDreamScore;

    private int tortletsCreatedCount;

    private int tortletsDeletedCount;

    private int tortletsCompletedCount;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tuser", fetch = FetchType.LAZY)
    private Set<Dream> dreams = new HashSet<Dream>();

    @PrePersist
    private void prePersist() {
        Date now = new Date();
        createdOn = now;
        updatedOn = now;

        timezone = TuserTimezoneEnum.PST; // This needs to be removed later and come from client.
    }

    @PreUpdate
    private void preUpdate() {
        Date now = new Date();
        updatedOn = now;
    }

    @Transactional
    public static com.softrism.tortlets.domain.Tuser generateTortlets(String userid) {
        Tuser tuser = Tuser.findTusersByUseridEquals(userid).getResultList().get(0);
        if (!tuser.getStatus().equals(TuserStatusEnum.ACTIVE)) {
            System.out.println("Tuser " + tuser.getUserid() + " is not in active status, skipping generating and deleting tortlets");
            return tuser;
        }

        for (Dream dream : tuser.getDreams()) {
            for (Tortoise tortoise : dream.getTortoises()) {
                List<Tortlet> tortlets = new ArrayList<Tortlet>(tortoise.getTortlets());
                for (Tortlet deleteIt : tortlets) {
                    DateMidnight expiresMidnight = new DateMidnight(deleteIt.getCreatedOn()).plusDays(tuser.getAllowedDelayDays());
                    DateMidnight todayMidnight = new DateMidnight();
                    boolean delayed = todayMidnight.isAfter(expiresMidnight);
                    boolean completed = deleteIt.getCompleted() == null ? false : deleteIt.getCompleted().booleanValue();
                    if (delayed && !completed) {
                        System.out.println("deleting tortlet id : " + deleteIt.getId());
                        tortoise.setTortletsDeletedCount(tortoise.getTortletsDeletedCount() + 1);
                        dream.setTortletsDeletedCount(dream.getTortletsDeletedCount() + 1);
                        tuser.setTortletsDeletedCount(tuser.getTortletsDeletedCount() + 1);
                        tortoise.getTortlets().remove(deleteIt);
                        deleteIt.remove();
                    }
                }

                processTortoise(tortoise);

            }
        }
        return tuser;
    }

    public static void processTortoise(Tortoise tortoise){
        DateTime jdTime = new DateTime();
        int dayOfWeek = jdTime.getDayOfWeek();
        boolean shouldCreate = false;
        Dream dream = tortoise.getDream();
        Tuser tuser = dream.getTuser();
        boolean tortoiseStarted = tortoise.getStartDate() == null ? true : jdTime.isAfter(tortoise.getStartDate().getTime());
        DateMidnight tortoiseEndMidnight = tortoise.getEndDate() == null ? new DateMidnight() : new DateMidnight(tortoise.getEndDate());
        tortoiseEndMidnight = tortoiseEndMidnight.plusDays(1);
        boolean tortoiseAlive = jdTime.isBefore(tortoiseEndMidnight.getMillis());
        if (tortoiseStarted && tortoiseAlive) {
            switch(dayOfWeek) {
                case (DateTimeConstants.MONDAY):
                    if (tortoise.getMonday() == null ? false : tortoise.getMonday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.TUESDAY):
                    if (tortoise.getTuesday() == null ? false : tortoise.getTuesday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.WEDNESDAY):
                    if (tortoise.getWednesday() == null ? false : tortoise.getWednesday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.THURSDAY):
                    if (tortoise.getThursday() == null ? false : tortoise.getThursday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.FRIDAY):
                    if (tortoise.getFriday() == null ? false : tortoise.getFriday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.SATURDAY):
                    if (tortoise.getSaturday() == null ? false : tortoise.getSaturday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
                case (DateTimeConstants.SUNDAY):
                    if (tortoise.getSunday() == null ? false : tortoise.getSunday().booleanValue()) {
                        shouldCreate = true;
                        break;
                    } else {
                        break;
                    }
            }
        } else {
            log.info("Skipping creating tortlet for tuser : " + tuser.getId() + " for tortoise " + tortoise.getTitle());
            log.info("because tortoise has startDate " + tortoise.getStartDate() + " and end date " + tortoise.getEndDate());
        }
        if (shouldCreate) {
            log.info("Creating new tortlet for tortoise : " + tortoise.getTitle());
            Tortlet tortlet = new Tortlet();
            tortlet.setUserid(tuser.getUserid());
            tortlet.setTitle(tortoise.getTitle() + " - " + jdTime.dayOfWeek().getAsShortText() + "," + jdTime.toString(org.joda.time.format.DateTimeFormat.forPattern("MM/dd")));
            int tortoiseCreatedCount = tortoise.getTortletsCreatedCount() + 1;
            int tortoiseCompletedCount = tortoise.getTortletsCompletedCount();
            int tortoiseScore = (tortoiseCompletedCount * TortletsConstants.MAX_SCORE_VALUE) / tortoiseCreatedCount;
            tortoise.setTortletsCreatedCount(tortoiseCreatedCount);
            tortoise.setLatestTortoiseScore(tortoiseScore);
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
            tortlet.setTortoise(tortoise);
            tortoise.setDream(dream);
            dream.setTuser(tuser);
            tortlet.persist();
        }

    }

    public static TypedQuery<Tuser> findTusersByUseridEqualsAndPasswordEquals(String userid, String password) {
        if (userid == null || userid.length() == 0) throw new IllegalArgumentException("The userid argument is required");
        if (password == null || password.length() == 0) throw new IllegalArgumentException("The password argument is required");
        EntityManager em = Tuser.entityManager();
        TypedQuery<Tuser> q = em.createQuery("SELECT o FROM Tuser AS o WHERE o.userid = :userid  AND o.password = :password", Tuser.class);
        System.out.println("userid in q" +  userid);
        System.out.println("password " + password);
        q.setParameter("userid", userid);
        q.setParameter("password", password);
        return q;
    }
}
