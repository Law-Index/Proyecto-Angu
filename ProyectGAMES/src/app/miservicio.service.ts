import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  constructor(private http:HttpClient) { }

  obtenerJuegos() {
    return this.http.get('https://api.rawg.io/api/games?key=5a1d141c628b44419abc4c6bcabd0b94')
  }
}
