import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlatService } from '../../services/plat.service';
import { Title } from '../../models/Title';


@Component({
  selector: 'app-detail-plat',
  templateUrl: './detail-plat.component.html',
  styleUrls: ['./detail-plat.component.css']
})
export class DetailPlatComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<DetailPlatComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private platService: PlatService
  ) { }

  tiles: Title [] = [
    {text: 'One', cols: 2, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
  ];

  ngOnInit() {
  }


}
