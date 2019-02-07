import { Component, OnInit } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';
import { Set } from 'src/domain/Set';

@Component({
  selector: 'app-tanteador',
  templateUrl: './tanteador.component.html',
  styleUrls: ['./tanteador.component.css']
})
export class TanteadorComponent implements OnInit {
  fecha: Fecha
  setSeleccionado: Set

  constructor(private mockService: MockService) {
  }

  ngOnInit() {
    this.unaFecha();
  }

  async unaFecha() {
    this.fecha = await this.mockService.unaFecha()
    this.setSeleccionado = this.fecha.sets[0]
  }

  isReady() {
    return this.fecha != undefined
  }

  addLocal(): void {
    this.setSeleccionado.puntosLocal++
  }

  addVisitante(): void {
    this.setSeleccionado.puntosVisitante++
  }

  resLocal(): void {
    this.setSeleccionado.puntosLocal--
  }

  resVisitante(): void {
    this.setSeleccionado.puntosVisitante--
  }

  noPuedeSumarLocal() {
    return this.setSeleccionado.ganoLocal()
  }

  noPuedeSumarVisitante() {
    return this.setSeleccionado.ganoVisitante()

  }

  noPuedeRestarLocal() {
    return this.setSeleccionado.puntosLocal == 0
  }

  noPuedeRestarVisitante() {
    return this.setSeleccionado.puntosVisitante == 0
  }

  setFinit() {
    return this.setSeleccionado.ganoLocal() || this.setSeleccionado.ganoVisitante()
  }
}
