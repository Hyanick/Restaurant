package org.resto;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.resto.dao.EntreeRepository;
import org.resto.dao.PlatRepository;
import org.resto.entities.Entree;
import org.resto.entities.Plat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestaurantAppApplication implements CommandLineRunner  {
	
	@Autowired
	private PlatRepository platRepository;
	
	@Autowired
	private EntreeRepository entreeRepository;

	public static void main(String[] args) {
		SpringApplication.run(RestaurantAppApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		Plat plat1 = new Plat("Tacos",2, 3500, "tacos", "tacos237","tacos.jpeg", df.parse("15/03/2019"));
		Plat plat2 = new Plat("Chicken Bread",2, 3500, "tacos", "tacos237","tacos.jpeg", df.parse("15/03/2019"));
		Plat plat3 = new Plat("Maxi-Kebab",2, 3500, "tacos", "tacos237","tacos.jpeg", df.parse("15/03/2019"));
		/*platRepository.save(plat1);
		platRepository.save(plat2);
		platRepository.save(plat3);*/
		/*
		Entree entree1 = new Entree("Coca",(long) 1.5, 3500, "tacos", "tacos237","tacos.jpeg", df.parse("15/03/2019"));
		Entree entree2 = new Entree("Fanta",(long) 2.5, 1500, "tacos", "tacos237","tacos.jpeg", df.parse("15/03/2019"));
		Entree entree3 = new Entree("Sprite",(long) 0.5, 1000, "tacos", "tacos237","tacos.jpeg", df.parse("15/03/2019"));
		/*entreeRepository.save(entree1);
		entreeRepository.save(entree2);
		entreeRepository.save(entree3);*/
		/*
		platRepository.findAll().forEach(p -> {
			System.out.println(p.getDateAjout() +" "+ p.getNom());
		});
		
		entreeRepository.findAll().forEach(e ->{
			System.out.println(e.getNom() +" "+e.getQuantite());
		});*/
		
	}

}
