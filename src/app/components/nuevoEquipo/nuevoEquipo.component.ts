import { Component, OnInit, ViewChild } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { Equipo } from 'src/domain/Equipo';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import { Usuario } from 'src/domain/Usuario';
import { FormControl, Validators } from '@angular/forms';

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

  nombreFormControl = this.crearFormControl()

  usuarioAsignadoFormControl = this.crearFormControl()

  passwordFormControl = this.crearFormControl()

  constructor(private service: MockService) { //BackendServiceService //MockService 
    this.equipo = new Equipo()
    this.usuario = new Usuario()
    this.updateEquipos()
  }

  ngOnInit() {
  }

  crearFormControl() {
    return new FormControl('', [
      Validators.required
    ]);
  }

  hayErrores() {
    return this.noLlenoCampo(this.nombreFormControl) || this.noLlenoCampo(this.usuarioAsignadoFormControl) || this.noLlenoCampo(this.passwordFormControl)
  }

  noLlenoCampo(formControl: FormControl) {
    return formControl.hasError('required')
  }

  async guardar() {
    try {
      //validar acá
      var numero = +(await this.service.guardarEquipo(this.equipo)).text()
      this.equipo.id = numero
      this.usuario.setPasswordHash(this.plain)
      this.usuario.equipo = this.equipo
      this.service.guardarUsuario(this.usuario)
    } catch (error) {
      console.log(error)
    } finally {
      // Las llamadas a los servicios ponerlas acá
    }
    console.log(this.formularioCompleto())
    this.updateEquipos()
  }

  async updateEquipos() {
    this.equipos = await this.service.getEquipos()
  }

  getEquipos() {
    return this.equipos
  }

  isReady() {
    return this.equipos != undefined
  }

  formularioCompleto() {
    // return this.equipo.nombre != undefined &&
    //   this.usuario.username != undefined &&
    //   this.usuario.passwordHash != undefined
    return true
  }

}
