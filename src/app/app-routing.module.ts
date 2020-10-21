import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  // Se acostumbra a dejar comentario como pequeña documentacion
  //asi si implementamos mas rutas, ya sabemos cuales estan tomadas o 
  // se deseamos armar rutas sabes de donde provienen
  // path: '/dashboard' PagesRouting => arma la ruta principal en PagesRputing desprendiendo las hijas
  // path: '/auth' AuthRouting
  // path: '/medicos' MedicosRouting
  // path: '/compras' ComprasRouting

  // path de ruta por default es el de abajo y el que sigue es si se ingresa una ruta que no exista
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
