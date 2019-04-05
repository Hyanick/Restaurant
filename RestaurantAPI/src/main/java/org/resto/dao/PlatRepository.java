/**
 * 
 */
package org.resto.dao;

import org.resto.entities.Plat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * @author hinguey
 *
 */
public interface PlatRepository extends JpaRepository<Plat, Long> {

	@Query("select p from Plat p where p.nom like :x")
	public Page<Plat> chercher( @Param("x") String mc, Pageable pageable);

}
