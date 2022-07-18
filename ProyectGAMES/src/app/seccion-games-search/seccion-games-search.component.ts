import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-seccion-games-search',
  templateUrl: './seccion-games-search.component.html',
  styleUrls: ['./seccion-games-search.component.css']
})
export class SeccionGamesSearchComponent implements OnInit {

  valordeJuego:string=""
  
  juegoEspecifico:any=""

  constructor(private route:ActivatedRoute, private servicio:MiservicioService) {
    this.route.params.subscribe((data:any)=>{
      this.valordeJuego=data.id
      this.servicio.obtenerSearch(this.valordeJuego).subscribe((info:any)=>{
        this.juegoEspecifico=info
      })
    })
   }
  ngOnInit(): void {
  }

}
