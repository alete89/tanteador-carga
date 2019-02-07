import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { TanteadorComponent } from './components/tanteador/tanteador.component';
import { CrearPartidoComponent } from './components/crear-partido/crear-partido.component';
import { IniciarPartidoComponent } from './components/iniciar-partido/iniciar-partido.component';
import { NuevoEquipoComponent } from './components/nuevoEquipo/nuevoEquipo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tanteador', pathMatch: 'full' },

  { path: 'tanteador', component: TanteadorComponent },
  { path: 'crear-equipo', component: NuevoEquipoComponent },
  { path: 'crear-partido', component: CrearPartidoComponent },
  { path: 'iniciar-partido', component: IniciarPartidoComponent },


  // { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes), RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [NavbarComponent];
