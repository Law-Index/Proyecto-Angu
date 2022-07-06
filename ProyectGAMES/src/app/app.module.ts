import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeccionGamesComponent } from './seccion-games/seccion-games.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { PantallaJuegosComponent } from './pantalla-juegos/pantalla-juegos.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { InfoJuegosComponent } from './info-juegos/info-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeccionGamesComponent,
    TarjetasComponent,
    PantallaJuegosComponent,
    PantallaPrincipalComponent,
    InfoJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
