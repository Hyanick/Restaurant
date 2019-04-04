import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlatComponent } from './plats/list-plat/list-plat.component';
import { EntreeComponent } from './entree/entree.component';
import { ListPlatsComponent } from './plats/list-plats/list-plats.component';

const routes: Routes = [
  {path: 'plats', component: ListPlatComponent},
  {path: 'entrees', component: EntreeComponent},
  {path: 'menus', component:ListPlatsComponent},
  {path: '', redirectTo : '/plats', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
