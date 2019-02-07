import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';
import { BackendServiceService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NuevoEquipoComponent implements OnInit {

  equipo: Equipo
  equipos: Equipo[]

  constructor(private mockService: MockService, private service: BackendServiceService) {
    this.equipo = new Equipo()
    this.updateEquipos()
  }

  ngOnInit() {
  }

  guardar() {
    this.service.guardarEquipo(this.equipo)
  }

  async updateEquipos() {
    this.equipos = await this.service.getEquipos()
  }

  getEquipos() {
    this.ngOnInit()
    return this.equipos
  }

  isReady() {
    return this.equipos != undefined
  }

}
