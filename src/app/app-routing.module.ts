import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path:'profil', component:ProfilComponent},
  {path:'', component:LandingComponent},
  {path:'**', component:PageIntrouvableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
