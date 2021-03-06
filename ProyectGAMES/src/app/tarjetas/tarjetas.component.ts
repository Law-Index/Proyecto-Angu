import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() Nombreportada:string="Megaman Zero Collection";

  @Input() ImagenPortada:string="./assets/megaman.jpg";

  @Input() IDjuego:string=""


  constructor(private Router:Router) {}

  irInfojuegos(){
    this.Router.navigate(["InfoJuegos",this.IDjuego])
  }
  

  ngOnInit(): void { }

}
