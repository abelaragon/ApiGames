import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

import { GamesService } from './services/games.service';
import { GameViewComponent } from './components/game-view/game-view.component';
import { GameDetalleComponent } from './components/game-detalle/game-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    GameViewComponent,
    GameDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }