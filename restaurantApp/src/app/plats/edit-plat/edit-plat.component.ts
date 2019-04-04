import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlatService } from '../../services/plat.service';
import { Plat } from '../../models/plat';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {

  plat: Plat = new Plat();
  constructor(public dialogRef: MatDialogRef<EditPlatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public platService: PlatService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    this.platService.editPlat( this.data)
    .subscribe(data => {
      this.close();
      this.toastr.success('Plat mis à jor avec succès!');

      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  resetForm(form: NgForm) {
    return form.resetForm();
  }
}
