// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.domain;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tuser;
import com.softrism.tortlets.domain.TuserStatusEnum;
import com.softrism.tortlets.domain.TuserTimezoneEnum;
import java.util.Date;
import java.util.Set;

privileged aspect Tuser_Roo_JavaBean {
    
    public String Tuser.getUserid() {
        return this.userid;
    }
    
    public void Tuser.setUserid(String userid) {
        this.userid = userid;
    }
    
    public String Tuser.getPassword() {
        return this.password;
    }
    
    public void Tuser.setPassword(String password) {
        this.password = password;
    }
    
    public String Tuser.getFirstName() {
        return this.firstName;
    }
    
    public void Tuser.setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String Tuser.getLastName() {
        return this.lastName;
    }
    
    public void Tuser.setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public Date Tuser.getBirthDate() {
        return this.birthDate;
    }
    
    public void Tuser.setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }
    
    public int Tuser.getAllowedDelayDays() {
        return this.allowedDelayDays;
    }
    
    public void Tuser.setAllowedDelayDays(int allowedDelayDays) {
        this.allowedDelayDays = allowedDelayDays;
    }
    
    public int Tuser.getLatestDreamScore() {
        return this.latestDreamScore;
    }
    
    public void Tuser.setLatestDreamScore(int latestDreamScore) {
        this.latestDreamScore = latestDreamScore;
    }
    
    public int Tuser.getTortletsCreatedCount() {
        return this.tortletsCreatedCount;
    }
    
    public void Tuser.setTortletsCreatedCount(int tortletsCreatedCount) {
        this.tortletsCreatedCount = tortletsCreatedCount;
    }
    
    public int Tuser.getTortletsDeletedCount() {
        return this.tortletsDeletedCount;
    }
    
    public void Tuser.setTortletsDeletedCount(int tortletsDeletedCount) {
        this.tortletsDeletedCount = tortletsDeletedCount;
    }
    
    public int Tuser.getTortletsCompletedCount() {
        return this.tortletsCompletedCount;
    }
    
    public void Tuser.setTortletsCompletedCount(int tortletsCompletedCount) {
        this.tortletsCompletedCount = tortletsCompletedCount;
    }
    
    public Date Tuser.getCreatedOn() {
        return this.createdOn;
    }
    
    public void Tuser.setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }
    
    public Date Tuser.getUpdatedON() {
        return this.updatedON;
    }
    
    public void Tuser.setUpdatedON(Date updatedON) {
        this.updatedON = updatedON;
    }
    
    public Set<Dream> Tuser.getDreams() {
        return this.dreams;
    }
    
    public void Tuser.setDreams(Set<Dream> dreams) {
        this.dreams = dreams;
    }
    
    public TuserStatusEnum Tuser.getStatus() {
        return this.status;
    }
    
    public void Tuser.setStatus(TuserStatusEnum status) {
        this.status = status;
    }
    
    public TuserTimezoneEnum Tuser.getTimezone() {
        return this.timezone;
    }
    
    public void Tuser.setTimezone(TuserTimezoneEnum timezone) {
        this.timezone = timezone;
    }
    
}
