import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  constructor(private http:HttpClient) { }

  obtenerJuegos() {
    return this.http.get("https://api.rawg.io/api/games?key=b901a884c5f54458bc7e2151edc65748")
  }

  obtenerSearch(Busqueda:string) {
    return this.http.get(`https://api.rawg.io/api/games?key=b901a884c5f54458bc7e2151edc65748&search=${Busqueda}`)
  }

  obtenerInformacionD(id:string) {
    return this.http.get(`https://api.rawg.io/api/games/${id}?key=b901a884c5f54458bc7e2151edc65748`)
  }
}
