import { Injectable } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { Equipo } from 'src/domain/Equipo';
import { Set } from 'src/domain/Set';
import { Service } from './service';
import { Usuario } from 'src/domain/Usuario';
import { Body } from '@angular/http/src/body';
import { ResponseOptions } from '@angular/http';



@Injectable({
  providedIn: 'root'
})

export class MockService implements Service {
  local: Equipo = new Equipo({ "nombre": "River", "urlEscudo": "../../../assets/logos/0002.png" })
  visitante: Equipo = new Equipo({ "nombre": "Boca", "urlEscudo": "../../../assets/logos/0001.png" })

  equipos: Equipo[]
  usuario: Usuario

  constructor() {
    this.equipos = [this.local, this.visitante]
  }

  fecha = new Fecha({
    "local": this.local,
    "visitante": this.visitante,
    "fechaHoraInicio": new Date(2018, 3, 20, 23, 30),
    "lugar": "Estadio Único",
    "iniciado": true,
    "sets": [new Set({ "puntosLocal": 19, "puntosVisitante": 25 }),
    new Set({ "puntosLocal": 25, "puntosVisitante": 18 }),
    new Set({ "puntosLocal": 18, "puntosVisitante": 25 }),
    new Set({ "puntosLocal": 27, "puntosVisitante": 25 }),
    new Set({ "puntosLocal": 15, "puntosVisitante": 13, "puntosParaGanar": 15 })
    ]
  })

  unEquipo() {
    throw new Error("Method not implemented.");
  }

  async unaFecha() {
    return this.fecha

  }

  async guardarEquipo(equipo: Equipo) {
    this.equipos.push(equipo)
    const response = new Response()
    return response
  }

  getEquipos() {
    return this.equipos
  }

  async guardarUsuario(usuario: Usuario) {
    this.usuario = usuario
  }

}
