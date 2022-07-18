import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-info-juegos',
  templateUrl: './info-juegos.component.html',
  styleUrls: ['./info-juegos.component.css']
})
export class InfoJuegosComponent{
  mostrar:string=""
  ocultar:string=""
  valorDelLink:string=""
  informacionRecibida:any=""


  constructor(private ruta:ActivatedRoute,private servicio:MiservicioService) { 
    this.ruta.params.subscribe((data:any)=>{
      this.valorDelLink=data.id
      this.servicio.obtenerInformacionD(this.valorDelLink).subscribe((info:any)=>{
        this.informacionRecibida=info
      })
    })
  }
}
  
