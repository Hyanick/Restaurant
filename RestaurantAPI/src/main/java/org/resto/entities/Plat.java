package org.resto.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

@Entity
public class Plat implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2354540922028038227L;
	
	@Id @GeneratedValue
	private Long id;
	private String nom;
	private long poids;
	private long prix;
	@Size(max = 1500)
	private String descriptionPlat;
	@Size(max = 1500)
	private String descriptionChef;
	@Lob
	private byte[] photo;
	private String fileName;
	@Temporal(TemporalType.DATE)
	private Date dateAjout = new Date();
	
	public Plat() {
		super();
	}

	public Plat( String nom, long poids, long prix,  String descriptionPlat,
			String descriptionChef, byte[] photo, String fileName, Date dateAjout) {
		super();
		this.nom = nom;
		this.poids = poids;
		this.prix = prix;
		this.descriptionPlat = descriptionPlat;
		this.descriptionChef = descriptionChef;
		this.photo = photo;
		this.fileName = fileName;
		this.dateAjout = dateAjout;
	}
	
	
	

	public Plat(byte[] photo, String fileName) {
		super();
		this.photo = photo;
		this.fileName = fileName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public long getPoids() {
		return poids;
	}

	public void setPoids(long poids) {
		this.poids = poids;
	}

	public long getPrix() {
		return prix;
	}

	public void setPrix(long prix) {
		this.prix = prix;
	}

	public String getDescriptionPlat() {
		return descriptionPlat;
	}

	public void setDescriptionPlat(String descriptionPlat) {
		this.descriptionPlat = descriptionPlat;
	}

	public String getDescriptionChef() {
		return descriptionChef;
	}

	public void setDescriptionChef(String descriptionChef) {
		this.descriptionChef = descriptionChef;
	}

	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public Date getDateAjout() {
		return dateAjout;
	}

	public void setDateAjout(Date dateAjout) {
		this.dateAjout = dateAjout;
	}
	
	

	
	
	
}
