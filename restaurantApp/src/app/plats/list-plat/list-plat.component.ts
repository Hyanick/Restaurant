import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';

import { map} from 'rxjs/operators';
import { AddPlatComponent } from '../add-plat/add-plat.component';
import { PlatService } from '../../services/plat.service';
import { Plat } from '../../models/plat';
import { ActivatedRoute } from '@angular/router';
import { EditPlatComponent } from '../edit-plat/edit-plat.component';
import { DeletePlatComponent } from '../delete-plat/delete-plat.component';
import { DetailPlatComponent } from '../detail-plat/detail-plat.component';

@Component({
  selector: 'app-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
  @Input() partData: any;
  plats: any;
  plat: Plat;
  id: number;
  index: number;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nom', 'prix', 'poids',  'descriptionPlat', 'descriptionChef', 'fileName', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  idPlat: number;
  constructor(private http: HttpClient, private dialog: MatDialog, private platService: PlatService) {

  }

  ngOnInit() {
    this.getListPlat();


  }

  getPlat(id: number) {
    this.platService.getPlat(id)
    .subscribe(data => {

    }, err => {
      console.log(err);
    });
  }

  getListPlat() {
    this.platService.getListPlat()
    .subscribe( data => {
      //this.plats = data.result; pour un simple tableau ou list
      this.listData = new MatTableDataSource(data); //Spécifique à MatTable
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }, err => {
      console.log(err);
    }
  );
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLocaleLowerCase();

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    const dialogRef = this.dialog.open(AddPlatComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
        this.getListPlat();
        console.log(' toto: ' + result);
    });
  }

 /* delete(id: number) {
    if ( confirm ('Est-vous sure de vouloir supprimer ce plat?')) {
      this.platService.deletePlat(id)
    .subscribe( data => {
      this.getListPlat();

    }, err => {
      console.log(err);
    });
    }
  }
  */

 //permet d'ouvrir et alimenter la popup
 delete(i: number, id: number, nom: string, prix: number, poids: number ) {
  this.index = i;
  this.id = id;

  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.position = {top: '5%'};

  dialogConfig.data = {id: id, nom: nom, prix: prix, poids: poids};
  const dialogRef = this.dialog.open(DeletePlatComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(result => { this.getListPlat()});
 }

  //permet d'ouvrir et alimenter la popup
  onEdit(i: number, id: number, nom: string, poids: string, prix: string, descriptionPlat: string, descriptionChef: string ) {
    //this.platService.getPlat(plat.id)
    // .subscribe(data => {
    //   console.log(data);
    // }, err => {
    //   console.log(err);
    // });
    this.id = id;
    this.index = i;

    console.log(this.index);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {id: id, nom: nom, poids: poids, prix: prix, descriptionPlat: descriptionPlat, descriptionChef: descriptionChef};
    const dialogRef = this.dialog.open(EditPlatComponent, dialogConfig);
    dialogRef.afterClosed().subscribe( result => {
      this.getListPlat();
    });
  }

  //permet d'ouvrir et alimenter la popup
  detailPlat( i: number, id: number, nom: string, prix: number, poids: number, descriptionPlat: string, descriptionChef: string) {
    this.id = id;
    this.index = i;
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.width = '60%';
    // dialogConfig.height = '80%' ;
    // dialogConfig.maxHeight = '200%';
    dialogConfig.data = {id: id, nom: nom, poids: poids, prix: prix, descriptionPlat: descriptionPlat, descriptionChef: descriptionChef};
    this.dialog.open(DetailPlatComponent, dialogConfig);
  }

}



