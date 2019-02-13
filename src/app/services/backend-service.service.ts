import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Equipo } from 'src/domain/Equipo';
import { Fecha } from 'src/domain/Fecha';
import { Service } from './service';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from 'src/domain/Usuario';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService implements Service {
  API_URL = "http://" + environment.server + ":8080/"

  constructor(private http: Http) {
  }

  async unEquipo() {
    const url = this.API_URL + "equipo/"
    const resp = await this.http.get(url).toPromise()
    return Equipo.fromJson(resp.json())
  }

  async unaFecha() {
    const url = this.API_URL + "unaFecha/"
    const resp = await this.http.get(url).toPromise()
    return Fecha.fromJson(resp.json())
  }

  async guardarEquipo(equipo: Equipo) {
    const url = this.API_URL + "nuevoEquipo/"
    const resp = this.http.post(url, equipo)
    return resp.toPromise()
  }

  async guardarUsuario(usuario: Usuario) {
    const url = this.API_URL + "nuevoUsuario/"
    const resp = this.http.post(url, usuario)
    return resp.toPromise()//.catch()
  }

  async getEquipos() {
    const url = this.API_URL + "getEquipos/"
    const resp = await this.http.get(url).toPromise()
    return resp.json().map(Equipo.fromJson)
  }

}
