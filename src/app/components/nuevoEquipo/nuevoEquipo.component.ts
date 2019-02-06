import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NuevoEquipoComponent implements OnInit {

  equipo: Equipo

  constructor(private mockService: MockService) { }

  ngOnInit() {
    this.equipo = new Equipo()
  }

  guardar() {
    this.mockService.guardarEquipo(this.equipo)
  }

  equipos() {
    return this.mockService.getEquipos()
  }

}
