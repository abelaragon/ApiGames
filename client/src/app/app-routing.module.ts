import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent} from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { GameDetalleComponent } from './components/game-detalle/game-detalle.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/games/view',
    pathMatch:'full'
  },
  {
     path:'games',
     component: GameListComponent
  },
  {
    path:'games/add',
    component: GameFormComponent
  },
  {
    path:'games/edit/:id',
    component: GameFormComponent
  },
  {
    path:'games/view',
    component: GameViewComponent
  },
  {
    path:'games/view/detalleProducto/:id',
    component: GameDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
