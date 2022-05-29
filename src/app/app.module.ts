import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoProgramaComponent } from './components/logo-programa/logo-programa.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { NombreTituloComponent } from './components/nombre-titulo/nombre-titulo.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoProgramaComponent,
    InstagramComponent,
    BtnLoginComponent,
    BannerComponent,
    AcercaDeComponent,
    FotoPerfilComponent,
    NombreTituloComponent,
    InformacionComponent,
    ExpLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
