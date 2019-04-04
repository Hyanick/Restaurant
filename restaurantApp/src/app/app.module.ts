import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule, MatTabsModule, MatCardModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntreeComponent } from './entree/entree.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ListPlatComponent } from './plats/list-plat/list-plat.component';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './plats/add-plat/add-plat.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PlatService } from './services/plat.service';
import { EditPlatComponent } from './plats/edit-plat/edit-plat.component';
import { ToastrModule } from 'ngx-toastr';
import { DeletePlatComponent } from './plats/delete-plat/delete-plat.component';
import { DetailPlatComponent } from './plats/detail-plat/detail-plat.component';
import { ListPlatsComponent } from './plats/list-plats/list-plats.component';
import { DbFileService } from './services/db-file.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPlatComponent,
    EntreeComponent,
    PlatsComponent,
    AddPlatComponent,
    EditPlatComponent,
    DeletePlatComponent,
    DetailPlatComponent,
    ListPlatsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatGridListModule,
    MatTooltipModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule

  ],
  providers: [PlatService, DbFileService],
  bootstrap: [AppComponent],
  entryComponents: [AddPlatComponent, EditPlatComponent, DeletePlatComponent, DetailPlatComponent],
})
export class AppModule { }
