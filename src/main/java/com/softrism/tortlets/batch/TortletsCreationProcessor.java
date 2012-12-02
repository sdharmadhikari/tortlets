package com.softrism.tortlets.batch;

import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.joda.time.DateMidnight;
import org.joda.time.DateTime;
import org.joda.time.DateTimeComparator;
import org.joda.time.DateTimeConstants;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.transaction.annotation.Transactional;

import com.softrism.tortlets.domain.Dream;
import com.softrism.tortlets.domain.Tortlet;
import com.softrism.tortlets.domain.Tortoise;
import com.softrism.tortlets.domain.Tuser;
import com.softrism.tortlets.domain.TuserStatusEnum;

public class TortletsCreationProcessor<O, I> implements ItemProcessor<I, O> {
	
	private static final Log log = LogFactory.getLog(TortletsCreationProcessor.class);

	public O process(I item) throws Exception {
	
		// I did not have to reload tuser because (i believe) entityManager travels with tuser object.
		Tuser tuser = (Tuser)item;
		//Tuser tuser = Tuser.findAllTusers().get(0);
		log.info("PROCESSING TUSER : " + tuser.getLastName());
		Tuser.generateTortlets(tuser.getUserid());
		TuserStatusEnum userStatus = tuser.getStatus();
		
		return null;
	}
	


}
