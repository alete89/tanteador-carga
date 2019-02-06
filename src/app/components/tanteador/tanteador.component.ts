import { Component, OnInit } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';

@Component({
  selector: 'app-tanteador',
  templateUrl: './tanteador.component.html',
  styleUrls: ['./tanteador.component.css']
})
export class TanteadorComponent implements OnInit {
  fecha: Fecha

  constructor(private mockService: MockService) { }

  ngOnInit() {
    this.unaFecha();
  }

  async unaFecha() {
    this.fecha = await this.mockService.unaFecha()
  }

  isReady() {
    return this.fecha != undefined
  }

  addLocal(): void {
    this.fecha.sets[this.fecha.actual].puntosLocal++
    console.log(this.fecha)
  }

  addVisitante(): void {
    this.fecha.sets[this.fecha.actual].puntosVisitante++
    console.log(this.fecha)
  }

  resLocal(): void {
    if (this.fecha.sets[this.fecha.actual].puntosLocal > 0)
      this.fecha.sets[this.fecha.actual].puntosLocal--
  }

  resVisitante(): void {
    if (this.fecha.sets[this.fecha.actual].puntosVisitante > 0)
      this.fecha.sets[this.fecha.actual].puntosVisitante--
  }

  finSet(): void {
    if (this.fecha.actual < 4)
      this.fecha.actual++
  }

  revSet(): void {
    if (this.fecha.actual >= 0)
      this.fecha.actual--
  }
  setFinit() {
    return this.fecha.sets[this.fecha.actual].ganoLocal(this.fecha.actual) || this.fecha.sets[this.fecha.actual].ganoVisitante(this.fecha.actual)
  }
}
