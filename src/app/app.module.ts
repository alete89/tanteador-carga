import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TanteadorComponent } from './components/tanteador/tanteador.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CrearPartidoComponent } from './components/crear-partido/crear-partido.component';
import { IniciarPartidoComponent } from './components/iniciar-partido/iniciar-partido.component';
import { MatSelectModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NuevoEquipoComponent } from './components/nuevoEquipo/nuevoEquipo.component';


@NgModule({
  declarations: [
    AppComponent,
    TanteadorComponent,
    NavbarComponent,
    CrearPartidoComponent,
    IniciarPartidoComponent,
    NuevoEquipoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
