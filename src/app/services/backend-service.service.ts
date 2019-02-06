import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Equipo } from 'src/domain/Equipo';
import { Fecha } from 'src/domain/Fecha';
import { Service } from './service';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService implements Service {
  API_URL = "http://127.0.0.1:8080/"

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

}
