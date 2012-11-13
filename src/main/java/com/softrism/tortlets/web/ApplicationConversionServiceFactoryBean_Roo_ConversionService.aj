// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tortlet;
import com.softrism.tortlets.domain.Tortoise;
import com.softrism.tortlets.domain.Tuser;
import com.softrism.tortlets.web.ApplicationConversionServiceFactoryBean;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.core.convert.converter.Converter;
import org.springframework.format.FormatterRegistry;

privileged aspect ApplicationConversionServiceFactoryBean_Roo_ConversionService {
    
    declare @type: ApplicationConversionServiceFactoryBean: @Configurable;
    
    public Converter<Dream, String> ApplicationConversionServiceFactoryBean.getDreamToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.softrism.tortlets.domain.Dream, java.lang.String>() {
            public String convert(Dream dream) {
                return new StringBuilder().append(dream.getTitle()).append(' ').append(dream.getNotes()).append(' ').append(dream.getDreamColor()).append(' ').append(dream.getPriority()).toString();
            }
        };
    }
    
    public Converter<Long, Dream> ApplicationConversionServiceFactoryBean.getIdToDreamConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.Long, com.softrism.tortlets.domain.Dream>() {
            public com.softrism.tortlets.domain.Dream convert(java.lang.Long id) {
                return Dream.findDream(id);
            }
        };
    }
    
    public Converter<String, Dream> ApplicationConversionServiceFactoryBean.getStringToDreamConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.String, com.softrism.tortlets.domain.Dream>() {
            public com.softrism.tortlets.domain.Dream convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), Dream.class);
            }
        };
    }
    
    public Converter<Tortlet, String> ApplicationConversionServiceFactoryBean.getTortletToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.softrism.tortlets.domain.Tortlet, java.lang.String>() {
            public String convert(Tortlet tortlet) {
                return new StringBuilder().append(tortlet.getTitle()).append(' ').append(tortlet.getNotes()).append(' ').append(tortlet.getCreatedOn()).append(' ').append(tortlet.getUpdatedOn()).toString();
            }
        };
    }
    
    public Converter<Long, Tortlet> ApplicationConversionServiceFactoryBean.getIdToTortletConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.Long, com.softrism.tortlets.domain.Tortlet>() {
            public com.softrism.tortlets.domain.Tortlet convert(java.lang.Long id) {
                return Tortlet.findTortlet(id);
            }
        };
    }
    
    public Converter<String, Tortlet> ApplicationConversionServiceFactoryBean.getStringToTortletConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.String, com.softrism.tortlets.domain.Tortlet>() {
            public com.softrism.tortlets.domain.Tortlet convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), Tortlet.class);
            }
        };
    }
    
    public Converter<Tortoise, String> ApplicationConversionServiceFactoryBean.getTortoiseToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.softrism.tortlets.domain.Tortoise, java.lang.String>() {
            public String convert(Tortoise tortoise) {
                return new StringBuilder().append(tortoise.getTitle()).append(' ').append(tortoise.getFrequency()).append(' ').append(tortoise.getNotes()).append(' ').append(tortoise.getStartDate()).toString();
            }
        };
    }
    
    public Converter<Long, Tortoise> ApplicationConversionServiceFactoryBean.getIdToTortoiseConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.Long, com.softrism.tortlets.domain.Tortoise>() {
            public com.softrism.tortlets.domain.Tortoise convert(java.lang.Long id) {
                return Tortoise.findTortoise(id);
            }
        };
    }
    
    public Converter<String, Tortoise> ApplicationConversionServiceFactoryBean.getStringToTortoiseConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.String, com.softrism.tortlets.domain.Tortoise>() {
            public com.softrism.tortlets.domain.Tortoise convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), Tortoise.class);
            }
        };
    }
    
    public Converter<Tuser, String> ApplicationConversionServiceFactoryBean.getTuserToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.softrism.tortlets.domain.Tuser, java.lang.String>() {
            public String convert(Tuser tuser) {
                return new StringBuilder().append(tuser.getUserid()).append(' ').append(tuser.getPassword()).append(' ').append(tuser.getFirstName()).append(' ').append(tuser.getLastName()).toString();
            }
        };
    }
    
    public Converter<Long, Tuser> ApplicationConversionServiceFactoryBean.getIdToTuserConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.Long, com.softrism.tortlets.domain.Tuser>() {
            public com.softrism.tortlets.domain.Tuser convert(java.lang.Long id) {
                return Tuser.findTuser(id);
            }
        };
    }
    
    public Converter<String, Tuser> ApplicationConversionServiceFactoryBean.getStringToTuserConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.String, com.softrism.tortlets.domain.Tuser>() {
            public com.softrism.tortlets.domain.Tuser convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), Tuser.class);
            }
        };
    }
    
    public void ApplicationConversionServiceFactoryBean.installLabelConverters(FormatterRegistry registry) {
        registry.addConverter(getDreamToStringConverter());
        registry.addConverter(getIdToDreamConverter());
        registry.addConverter(getStringToDreamConverter());
        registry.addConverter(getTortletToStringConverter());
        registry.addConverter(getIdToTortletConverter());
        registry.addConverter(getStringToTortletConverter());
        registry.addConverter(getTortoiseToStringConverter());
        registry.addConverter(getIdToTortoiseConverter());
        registry.addConverter(getStringToTortoiseConverter());
        registry.addConverter(getTuserToStringConverter());
        registry.addConverter(getIdToTuserConverter());
        registry.addConverter(getStringToTuserConverter());
    }
    
    public void ApplicationConversionServiceFactoryBean.afterPropertiesSet() {
        super.afterPropertiesSet();
        installLabelConverters(getObject());
    }
    
}
