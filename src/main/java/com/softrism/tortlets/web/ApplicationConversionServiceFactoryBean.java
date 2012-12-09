package com.softrism.tortlets.web;

import org.springframework.core.convert.converter.Converter;
import org.springframework.format.FormatterRegistry;
import org.springframework.format.support.FormattingConversionServiceFactoryBean;
import org.springframework.roo.addon.web.mvc.controller.converter.RooConversionService;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tortoise;
import com.softrism.tortlets.domain.Tuser;

/**
 * A central place to register application converters and formatters. 
 */
@RooConversionService
public class ApplicationConversionServiceFactoryBean extends FormattingConversionServiceFactoryBean {

	@Override
	protected void installFormatters(FormatterRegistry registry) {
		super.installFormatters(registry);
		// Register application converters and formatters
	}
	
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
}
