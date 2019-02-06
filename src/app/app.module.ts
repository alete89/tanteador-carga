import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TanteadorComponent } from './components/tanteador/tanteador.component';
import { NuevoEquipoComponent } from './components/nuevoEquipo/nuevoEquipo.component';


@NgModule({
  declarations: [
    AppComponent,
    TanteadorComponent,
    NuevoEquipoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
