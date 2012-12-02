package com.softrism.tortlets.batch;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.batch.item.ExecutionContext;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemStreamException;
import org.springframework.batch.item.ItemStreamSupport;
import org.springframework.batch.item.support.ListItemReader;
import org.springframework.transaction.annotation.Transactional;

import com.softrism.tortlets.domain.Tuser;


/**
 * {@link ItemReader} with hard-coded input data.
 * @param <T>
 */

@SuppressWarnings("rawtypes")
public class TuserReader extends ItemStreamSupport implements
ItemReader{
	
	private static final Log log = LogFactory.getLog(TuserReader.class);
	private ListItemReader delegate;
	
	
	@SuppressWarnings("unchecked")
	@Override
	@Transactional
	public void open(ExecutionContext executionContext) throws ItemStreamException {
		
		log.info("Getting list of users..");
		List<Tuser> tusers = Tuser.findAllTusers();
		log.info("size of tuser list: " + tusers.size());
		delegate = new ListItemReader(tusers);
		
	}
	public Tuser read() throws Exception {
		
		return (Tuser)delegate.read();
	}

}
