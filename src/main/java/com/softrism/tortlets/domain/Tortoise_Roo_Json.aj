// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.domain;

import com.softrism.tortlets.domain.Tortoise;
import flexjson.JSONDeserializer;
import flexjson.JSONSerializer;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

privileged aspect Tortoise_Roo_Json {
    
    public String Tortoise.toJson() {
        return new JSONSerializer().exclude("*.class").serialize(this);
    }
    
    public static Tortoise Tortoise.fromJsonToTortoise(String json) {
        return new JSONDeserializer<Tortoise>().use(null, Tortoise.class).deserialize(json);
    }
    
    public static String Tortoise.toJsonArray(Collection<Tortoise> collection) {
        return new JSONSerializer().exclude("*.class").serialize(collection);
    }
    
    public static Collection<Tortoise> Tortoise.fromJsonArrayToTortoises(String json) {
        return new JSONDeserializer<List<Tortoise>>().use(null, ArrayList.class).use("values", Tortoise.class).deserialize(json);
    }
    
}