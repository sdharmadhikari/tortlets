// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.domain;

import com.softrism.tortlets.domain.Tortlet;
import com.softrism.tortlets.domain.Tortoise;
import java.util.Date;

privileged aspect Tortlet_Roo_JavaBean {
    
    public String Tortlet.getTitle() {
        return this.title;
    }
    
    public void Tortlet.setTitle(String title) {
        this.title = title;
    }
    
    public Boolean Tortlet.getCompleted() {
        return this.completed;
    }
    
    public void Tortlet.setCompleted(Boolean completed) {
        this.completed = completed;
    }
    
    public String Tortlet.getNotes() {
        return this.notes;
    }
    
    public void Tortlet.setNotes(String notes) {
        this.notes = notes;
    }
    
    public Date Tortlet.getCreatedOn() {
        return this.createdOn;
    }
    
    public void Tortlet.setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }
    
    public Date Tortlet.getUpdatedOn() {
        return this.updatedOn;
    }
    
    public void Tortlet.setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }
    
    public Date Tortlet.getCompletedOn() {
        return this.completedOn;
    }
    
    public void Tortlet.setCompletedOn(Date completedOn) {
        this.completedOn = completedOn;
    }
    
    public Tortoise Tortlet.getTortoise() {
        return this.tortoise;
    }
    
    public void Tortlet.setTortoise(Tortoise tortoise) {
        this.tortoise = tortoise;
    }
    
    public String Tortlet.getUserid() {
        return this.userid;
    }
    
    public void Tortlet.setUserid(String userid) {
        this.userid = userid;
    }
    
}
