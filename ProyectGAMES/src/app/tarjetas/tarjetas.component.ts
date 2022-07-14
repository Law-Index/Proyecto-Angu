import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() Nombreportada:string="Megaman Zero Collection";

  @Input() ImagenPortada:string="./assets/megaman.jpg";


  constructor() { }

  ngOnInit(): void { }

}
