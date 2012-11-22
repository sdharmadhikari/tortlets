package com.softrism.tortlets.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.joda.time.DateMidnight;
import org.joda.time.DateTime;
import org.joda.time.DateTimeComparator;
import org.joda.time.DateTimeConstants;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.transaction.annotation.Transactional;

@RooJavaBean
@RooToString
@RooJpaActiveRecord(finders = { "findTusersByUseridEquals" })
public class Tuser {

    @NotNull
    @Size(min = 6, max = 16)
    @Column(unique = true)
    private String userid;

    @NotNull
    @Size(min = 6, max = 16)
    private String password;
    
    @Size(min = 6, max = 16)
    private String retypePassword;

    @NotNull
    @Size(min = 1, max = 25)
    private String firstName;

    @NotNull
    @Size(min = 1, max = 25)
    private String lastName;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date birthDate;

    @Value("7")
    private int allowedDelayDays;

    private int latestDreamScore;

    private int tortletsCreatedCount;

    private int tortletsDeletedCount;

    private int tortletsCompletedCount;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date createdOn;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date updatedON;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tuser")
    private Set<Dream> dreams = new HashSet<Dream>();

    private static final Log log = LogFactory.getLog(Tuser.class);

    @NotNull
    @Enumerated(EnumType.STRING)
    private TuserStatusEnum status;

    @NotNull
    @Enumerated(EnumType.STRING)
    private TuserTimezoneEnum timezone;

    @Transactional
    public static com.softrism.tortlets.domain.Tuser generateTortlets(String userid) {
        Tuser tuser = Tuser.findTusersByUseridEquals(userid).getResultList().get(0);
        DateTime jdTime = new DateTime();
        int dayOfWeek = jdTime.getDayOfWeek();
        DateTimeComparator dtComparator = DateTimeComparator.getDateOnlyInstance();
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
                boolean shouldCreate = false;
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
                if (shouldCreate) {
                    log.info("Creating new tortlet for tortoise : " + tortoise.getTitle());
                    Tortlet tortlet = new Tortlet();
                    tortlet.setTitle("A step for " + tortoise.getTitle());
                    tortlet.setCreatedOn(new Date());
                    tortlet.setNotes("Do anything on " + tortoise.getTitle() + " to fulfil your dream - " + tortoise.getDream().getTitle());
                    tortlet.setUpdatedOn(new Date());
                    tortoise.setTortletsCreatedCount(tortoise.getTortletsCreatedCount() + 1);
                    dream.setTortletsCreatedCount(dream.getTortletsCreatedCount() + 1);
                    tuser.setTortletsCreatedCount(tuser.getTortletsCreatedCount() + 1);
                    tortlet.setTortoise(tortoise);
                    tortoise.setDream(dream);
                    dream.setTuser(tuser);
                    tortlet.persist();
                }
            }
        }
        return tuser;
    }
}
