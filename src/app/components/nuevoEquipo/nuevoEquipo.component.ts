import { Component, OnInit, ViewChild } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import { Usuario } from 'src/domain/Usuario';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NuevoEquipoComponent implements OnInit {

  equipo: Equipo
  equipos: Equipo[]
  usuario: Usuario
  plain: string

  constructor(private mockService: MockService, private service: BackendServiceService) {
    this.equipo = new Equipo()
    this.usuario = new Usuario()
    this.updateEquipos()
  }

  ngOnInit() {
  }

  async guardar() {
    var numero = +(await this.service.guardarEquipo(this.equipo)).text()
    this.equipo.id = numero
    this.usuario.setPasswordHash(this.plain)
    this.usuario.equipo = this.equipo
    console.log(this.usuario)
    this.service.guardarUsuario(this.usuario)
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
