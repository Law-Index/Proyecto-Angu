import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-seccion-games',
  templateUrl: './seccion-games.component.html',
  styleUrls: ['./seccion-games.component.css']
})
export class SeccionGamesComponent implements OnInit {

  ListaGeneral:any=""

  constructor(private Servicio:MiservicioService) {

    this.Servicio.obtenerJuegos().subscribe((data)=>{this.ListaGeneral=data})

  }
  



  ngOnInit(): void {

  }

}
