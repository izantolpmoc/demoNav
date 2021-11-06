import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfilComponent } from './profil/profil.component';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfilComponent,
    PageIntrouvableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
