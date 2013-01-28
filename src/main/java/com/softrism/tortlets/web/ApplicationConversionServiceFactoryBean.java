package com.softrism.tortlets.web;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tortlet;
import com.softrism.tortlets.domain.Tortoise;
import com.softrism.tortlets.domain.Tuser;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.core.convert.converter.Converter;
import org.springframework.format.FormatterRegistry;
import org.springframework.format.support.FormattingConversionServiceFactoryBean;
import org.springframework.roo.addon.web.mvc.controller.converter.RooConversionService;

/**
 * A central place to register application converters and formatters.
 */
@Configurable
@RooConversionService
public class ApplicationConversionServiceFactoryBean extends FormattingConversionServiceFactoryBean {


    public Converter<Tuser, String> getTuserToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.softrism.tortlets.domain.Tuser, java.lang.String>() {
            public String convert(Tuser tuser) {
                return new StringBuilder().append(tuser.getUserid()).toString();
            }
        };
    }

    public Converter<Dream, String> getDreamToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.softrism.tortlets.domain.Dream, java.lang.String>() {
            public String convert(Dream dream) {
                return new StringBuilder().append(dream.getTitle()).toString();
            }
        };
    }

    public Converter<Tortoise, String> getTortoiseToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.softrism.tortlets.domain.Tortoise, java.lang.String>() {
            public String convert(Tortoise tortoise) {
                return new StringBuilder().append(tortoise.getTitle()).toString();
            }
        };
    }

    public void afterPropertiesSet() {
        super.afterPropertiesSet();
        installLabelConverters(getObject());
    }

    public void installLabelConverters(FormatterRegistry registry) {
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

    public Converter<String, Tuser> getStringToTuserConverter() {
        return new Converter<String, Tuser>() {
            public Tuser convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), Tuser.class);
            }
        };
    }

    public Converter<Long, Tuser> getIdToTuserConverter() {
        return new Converter<Long, Tuser>() {
            public Tuser convert(Long id) {
                return Tuser.findTuser(id);
            }
        };
    }

    public Converter<String, Tortoise> getStringToTortoiseConverter() {
        return new Converter<String, Tortoise>() {
            public Tortoise convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), Tortoise.class);
            }
        };
    }

    public Converter<Long, Tortoise> getIdToTortoiseConverter() {
        return new Converter<Long, Tortoise>() {
            public Tortoise convert(Long id) {
                return Tortoise.findTortoise(id);
            }
        };
    }

    public Converter<String, Tortlet> getStringToTortletConverter() {
        return new Converter<String, Tortlet>() {
            public Tortlet convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), Tortlet.class);
            }
        };
    }

    public Converter<Long, Tortlet> getIdToTortletConverter() {
        return new Converter<Long, Tortlet>() {
            public Tortlet convert(Long id) {
                return Tortlet.findTortlet(id);
            }
        };
    }

    public Converter<Tortlet, String> getTortletToStringConverter() {
        return new Converter<Tortlet, String>() {
            public String convert(Tortlet tortlet) {
                return new StringBuilder().append(tortlet.getTitle()).append(' ').append(tortlet.getNotes()).append(' ').append(tortlet.getCreatedOn()).append(' ').append(tortlet.getUpdatedOn()).toString();
            }
        };
    }

    public Converter<String, Dream> getStringToDreamConverter() {
        return new Converter<String, Dream>() {
            public Dream convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), Dream.class);
            }
        };
    }

    public Converter<Long, Dream> getIdToDreamConverter() {
        return new Converter<Long, Dream>() {
            public Dream convert(Long id) {
                return Dream.findDream(id);
            }
        };
    }
}
