import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlatService } from '../../services/plat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-plat',
  templateUrl: './delete-plat.component.html',
  styleUrls: ['./delete-plat.component.css']
})
export class DeletePlatComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeletePlatComponent>,
    @Inject (MAT_DIALOG_DATA) private data: any,
    private platService: PlatService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  confirmDelete() {
    this.platService.deletePlat(this.data.id)
    .subscribe(data => {
      this.onClose();
      this.toastr.warning(' Plat Supprimé!!');
      console.log( 'data: ' + data);
    }, err => {
      console.log('err: ' + err);
    });
  }

}
