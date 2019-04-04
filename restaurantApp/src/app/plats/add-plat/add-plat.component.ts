import { Component, OnInit } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ListPlatComponent } from '../list-plat/list-plat.component';
import { ToastrService } from 'ngx-toastr';
import { DBFile } from '../../models/DBFile';
import { DbFileService } from '../../services/db-file.service';
import { HttpEventType, HttpResponse, HttpClient} from '../../../../node_modules/@angular/common/http';


@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  plat: Plat = new Plat();
  photo: DBFile = new DBFile();

  fileToUpload = null;
  selectedFiles: FileList;
  currentFileUpload: File;
  public userFile: any = File;
  selectedFile: File = null;

  imageUrl: string ;




  constructor( private platService: PlatService,
    private fileService: DbFileService,
    private dialogRef: MatDialogRef<AddPlatComponent>,
    private toastr: ToastrService,
    private http: HttpClient

  ) { }

  ngOnInit() {

  }

  savePlat(form: NgForm) {
      const fd = new FormData();
      const plat = form.value;
      console.log('testUser: ' + plat);
      fd.append('file', this.selectedFile, this.selectedFile.name);
      fd.append('plat', JSON.stringify(plat));
      this.http.post('http://localhost:8080/savePlatFile', fd)
      .subscribe(res => {
        console.log('testRes: ' + res);
      });
      this.close();
      this.toastr.success('Plat ajouté avec succès!');
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
        //Show image preview
    const reader = new FileReader();
    reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);

  }


  resetForm(form: NgForm) {
    return form.resetForm();
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    this.platService.editPlat( this.plat)
    .subscribe(data => {
      this.close();

      console.log(data);
    }, err => {
      console.log(err);
    });
  }

/*
    handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }*/
/*
  uploadPhoto() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    //fd.append('user', this.plat);
    this.http.post('http://localhost:8080/uploadFile', fd)
    .subscribe(res => {
      console.log(res);
    });

  }
*/




}
