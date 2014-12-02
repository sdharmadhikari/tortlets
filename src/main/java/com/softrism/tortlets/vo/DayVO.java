package com.softrism.tortlets.vo;

import com.softrism.tortlets.domain.Tortoise;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import org.springframework.roo.addon.equals.RooEquals;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.json.RooJson;
import org.springframework.roo.addon.serializable.RooSerializable;
import org.springframework.roo.addon.tostring.RooToString;

@RooJavaBean
@RooToString
@RooEquals
@RooSerializable
@RooJson(deepSerialize = true)
public class DayVO {

    private String dayName;

    private int totalTortoises;

    private int totalActivityMinutes;

    @OneToMany(cascade = CascadeType.ALL)
    private Set<Tortoise> tortoises = new HashSet<Tortoise>();
}
