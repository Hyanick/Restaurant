package org.resto.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
public class Entree implements Serializable {
	
	@Id @GeneratedValue
	private Long id;
	private String nom;
	private long quantite;
	private long prix;
	private String descriptionEntree;
	private String descriptionChef;
	private String photo;
	@Temporal(TemporalType.DATE)
	private Date dateAjout = new Date();
	
	public Entree() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Entree(String nom, long quantite, long prix, String descriptionEntree, String descriptionChef, String photo,
			Date dateAjout) {
		super();
		this.nom = nom;
		this.quantite = quantite;
		this.prix = prix;
		this.descriptionEntree = descriptionEntree;
		this.descriptionChef = descriptionChef;
		this.photo = photo;
		this.dateAjout = dateAjout;
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

	public long getQuantite() {
		return quantite;
	}

	public void setQuantite(long quantite) {
		this.quantite = quantite;
	}

	public long getPrix() {
		return prix;
	}

	public void setPrix(long prix) {
		this.prix = prix;
	}

	public String getDescriptionEntree() {
		return descriptionEntree;
	}

	public void setDescriptionEntree(String descriptionEntree) {
		this.descriptionEntree = descriptionEntree;
	}

	public String getDescriptionChef() {
		return descriptionChef;
	}

	public void setDescriptionChef(String descriptionChef) {
		this.descriptionChef = descriptionChef;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Date getDateAjout() {
		return dateAjout;
	}

	public void setDateAjout(Date dateAjout) {
		this.dateAjout = dateAjout;
	}
	
	
	
	

}
