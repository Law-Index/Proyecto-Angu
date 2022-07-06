import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PantallaJuegosComponent } from './pantalla-juegos/pantalla-juegos.component';


const routes: Routes = [
  {path:"InfoJuegos",component:PantallaJuegosComponent},
  {path:"home",component:PantallaPrincipalComponent},
  {path:"",component:PantallaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
