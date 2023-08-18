import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InstitucionalComponent } from './componentes/institucional/institucional.component';
import { HomeComponent } from './componentes/home/home.component';
import { GestionActComponent } from './componentes/gestion-act/gestion-act.component';
import { LateralComponent } from './componentes/lateral/lateral.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InstitucionalComponent,
    HomeComponent,
    GestionActComponent,
    LateralComponent,
    EstadisticasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
