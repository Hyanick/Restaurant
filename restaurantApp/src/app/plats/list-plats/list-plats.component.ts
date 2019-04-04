import { Component, OnInit, Inject } from '@angular/core';
import { PlatService } from '../../services/plat.service';
import { Plat } from '../../models/plat';
import { MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';
import { DetailPlatComponent } from '../detail-plat/detail-plat.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-list-plats',
  templateUrl: './list-plats.component.html',
  styleUrls: ['./list-plats.component.css']
})
export class ListPlatsComponent implements OnInit {

  plats: any;
  listPlats: Plat [] = [];

  fileUploads: any;
  sid: number = 1;

  id: number;
  index: number;

  constructor(private platService: PlatService,
  private dialog: MatDialog,
  private http: HttpClient
) { }

  ngOnInit() {
    this.getListPlat();
  }

  getListPlat() {
    this.platService.getListPlat()
    .subscribe(data => {
      data.forEach(plat => {
        plat.photo = this.utilImage(plat.photo);
        // console.log('test: ');
        // console.log(plat.photo);
      });
      this.listPlats = data;
      //this.listPlats = data.result; fonctionne également
      console.log('testData:' );
      console.log(this.listPlats);
    }, err => {
      console.log(err);
    });
  }

  utilImage(photo): string {
    return 'data:image/jpeg;base64,' + photo;
  }

  getImage() {
    this.http.get('http://localhost:8080/get-image')
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });

  }

  onOpen( i: number, id: number, nom: string, prix: number, poids: number, descriptionPlat: string, descriptionChef: string, photo: string) {
    this.id = id;
    this.index = i;
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.width = '60%';
    // dialogConfig.height = '80%' ;
    // dialogConfig.maxHeight = '200%';
    dialogConfig.data = {id: id, nom: nom, poids: poids, prix: prix, descriptionPlat: descriptionPlat, descriptionChef: descriptionChef, photo:photo};
    this.dialog.open(DetailPlatComponent, dialogConfig);

  }



  showInfo() {
    this.platService.getFiles(this.sid).subscribe(data => {
      this.fileUploads = data;
      console.log(data);
    },
      err => {
      console.log('Error Occured showInfo');
    });
  }








}
