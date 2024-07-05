import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiabeticFormComponent } from './diabetic-form/diabetic-form.component';
import { DiabeticListComponent } from './diabetic-list/diabetic-list.component';
import { GlycemieFormComponent } from './glycemie-form/glycemie-form.component';
import { GlycemieListComponent } from './glycemie-list/glycemie-list.component';
import {GlycemieUpdateComponent} from "./glycemie-update/glycemie-update.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: 'diabetics', component: DiabeticListComponent },
  { path: 'add-diabetic', component: DiabeticFormComponent },
  { path: 'glycemies', component: GlycemieListComponent },
  { path: 'add-glycemie', component: GlycemieFormComponent },
  { path: 'glycemie-list', component: GlycemieListComponent },
  { path: 'update-glycemie/:id', component: GlycemieUpdateComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
