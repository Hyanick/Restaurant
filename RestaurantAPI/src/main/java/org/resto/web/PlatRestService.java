package org.resto.web;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.resto.dao.PlatRepository;
import org.resto.entities.Plat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin("*")
public class PlatRestService {
	
	@Autowired
	private PlatRepository platRepository;

	@RequestMapping(value = "/listPlats", method = RequestMethod.GET)
	public List<Plat> getPlats(){
		return platRepository.findAll();
	}
	
	@RequestMapping(value = "/getPlat/{id}", method = RequestMethod.GET)
	public Optional<Plat> getPlat(@PathVariable Long id){
		return platRepository.findById(id); 		
	}
	
	@RequestMapping(value = "/savePlat", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Plat save(@RequestBody Plat plat) throws IOException {
		return platRepository.save(plat); 
	}
	
	@RequestMapping(value = "/savePlatFile", method = RequestMethod.POST,  produces = MediaType.APPLICATION_JSON_VALUE) 
	public Plat uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("plat") String plat) throws IOException {
		Plat platFIle = new ObjectMapper().readValue(plat, Plat.class);
		//Plat plat = new Plat();
		platFIle.setPhoto(file.getBytes());
		platFIle.setFileName(file.getOriginalFilename());
		return platRepository.save(platFIle);
		
		/*if (!file.isEmpty()) {
			

			//BufferedImage bi = ImageIO.read(file.getInputStream());
			plat.setPhoto(file.getBytes());
			plat.setFileName(file.getOriginalFilename());
		
	}*/	
		
	}
	
	@RequestMapping(value = "/get-imagevvv" , method=RequestMethod.GET ,  produces = MediaType.IMAGE_JPEG_VALUE)
	@ResponseBody
	public byte[] getImage1(@RequestParam long id) throws IOException {
		Optional<Plat> plat = platRepository.findById(id);
		//if(a.getImage() != null){
		return IOUtils.toByteArray(new ByteArrayInputStream(plat.get().getPhoto()));
	//	}
//		return null

	}
	
	@GetMapping(
			  value = "/get-image",
			  produces = MediaType.IMAGE_JPEG_VALUE
			)
			public @ResponseBody byte[] getImage(@RequestParam long id) throws IOException {
			    Path imagePath = (Path) platRepository.getOne(id);
			    return Files.readAllBytes(imagePath);
			    
			}
	@GetMapping(value = "/getUploadfiles/{id}")
    @ResponseBody
    public byte[] getImage(@PathVariable Integer id) throws IOException {
        String filename = "01";
        System.out.println("id : " + id);
        String rootLocation = null;
		File serverFile = new File(rootLocation + "\\" + filename + ".jpg");
        System.out.println("serverFile : " + serverFile);        
        return Files.readAllBytes(serverFile.toPath());
    }
	
	
	@RequestMapping(value = "/deletePlat2/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable Long id) {
		platRepository.deleteById(id);	
		return true;
	}
	@RequestMapping(value = "/deletePlat/{id}", method = RequestMethod.DELETE)
	public void supprimer2(@PathVariable Long id) {
		platRepository.deleteById(id);	
		
	}
	
	@RequestMapping(value = "/editPlat/{id}", method = RequestMethod.PUT)
	public Plat update (@PathVariable Long id, @RequestBody Plat plat) {
		plat.setId(id);
		return platRepository.save(plat);
	}
	
	@RequestMapping(value = "/chercherPlats", method = RequestMethod.GET)
	public Page<Plat> chercher(
			@RequestParam(name = "mc", defaultValue = "") String mc,
			@RequestParam(name = "page", defaultValue = "0" ) int page,
			@RequestParam(name = "size", defaultValue = "5") int size
			){	
		return platRepository.chercher("%"+mc+"%", new PageRequest(page, size));
		
	}
}
