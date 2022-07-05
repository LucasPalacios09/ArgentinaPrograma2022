import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PersonajeService } from 'src/services/personaje.service';

import { AppComponent } from './app.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Page404Component } from './components/page404/page404.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { AuthService } from 'src/services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageAboutComponent,
    Page404Component,
    FichaComponent,
    LoginComponent,
    FormLoginComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [PersonajeService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
