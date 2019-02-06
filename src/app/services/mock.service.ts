import { Injectable } from '@angular/core';
import { Fecha } from 'src/domain/Fecha';
import { Equipo } from 'src/domain/Equipo';
import { Set } from 'src/domain/Set';
import { Service } from './service';



@Injectable({
  providedIn: 'root'
})

export class MockService implements Service {
  local: Equipo = new Equipo({ "nombre": "River", "urlEscudo": "../../../assets/logos/0002.png" })
  visitante: Equipo = new Equipo({ "nombre": "Boca", "urlEscudo": "../../../assets/logos/0001.png" })

  constructor() { }

  fecha = new Fecha({
    "local": this.local,
    "visitante": this.visitante,
    "fechaHoraInicio": new Date(2018, 3, 20, 23, 30),
    "lugar": "Estadio Único",
    "iniciado": true,
    "sets": [new Set(19, 22), new Set(25, 18), new Set(18, 25), new Set(25, 27), new Set(28, 26)]
  })

  unEquipo() {
    throw new Error("Method not implemented.");
  }

  async unaFecha() {
    return this.fecha

  }

}
