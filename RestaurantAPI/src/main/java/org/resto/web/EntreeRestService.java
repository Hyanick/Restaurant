package org.resto.web;

import java.util.List;
import java.util.Optional;

import org.resto.dao.EntreeRepository;
import org.resto.entities.Entree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EntreeRestService {
	
	@Autowired
	private  EntreeRepository entreeRepository;
	
	@RequestMapping(value = "/entrees", method = RequestMethod.GET)
	public List<Entree> getListEntrees(){
		return entreeRepository.findAll();	
	}
	
	@RequestMapping(value = "/entrees/{id}", method = RequestMethod.GET)
	public Optional<Entree> getEntree(@PathVariable Long id) {
		return entreeRepository.findById(id);
		
	}
	
	@RequestMapping(value = "/entrees", method = RequestMethod.POST)
	public Entree save(@RequestBody Entree entree) {
		return entreeRepository.save(entree);
	}
	
	@RequestMapping(value = "/entrees/{id}", method = RequestMethod.PUT)
	public Entree update(@RequestBody Entree entree, @PathVariable Long id) {
		entree.setId(id);
		return entreeRepository.save(entree);
	}
	
	@RequestMapping(value = "/entrees/{id}", method = RequestMethod.DELETE )
	public void delete(@PathVariable Long id) {
		entreeRepository.deleteById(id);
	}

}
