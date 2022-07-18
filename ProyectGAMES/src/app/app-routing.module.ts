import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PantallaJuegosComponent } from './pantalla-juegos/pantalla-juegos.component';
import { PantallaSearchComponent } from './pantalla-search/pantalla-search.component';

const routes: Routes = [
  {path:"InfoJuegos/:id",component:PantallaJuegosComponent},
  {path:"home",component:PantallaPrincipalComponent},
  {path:"search/:id",component:PantallaSearchComponent},
  {path:"",component:PantallaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
