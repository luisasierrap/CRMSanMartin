import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCitaComponent } from './cita/crear-cita/crear-cita.component';
import { AcercaDeComponent } from './info/acerca-de/acerca-de.component';
import { ServiciosComponent } from './info/servicios/servicios.component';
import {ImgMainComponent} from './content/img-main/img-main.component';
import { AnadircitaComponent } from './cita/anadircita/anadircita.component';
import { ModificarcitaComponent } from './cita/modificarcita/modificarcita.component';
import { EliminarcitaComponent } from './cita/eliminarcita/eliminarcita.component';


const routes: Routes = [
  {path: 'cita/crearCita',component:CrearCitaComponent},
  {path: 'cita/anadirCita',component:AnadircitaComponent},
  {path: 'cita/modificarCita',component:ModificarcitaComponent},
  {path: 'cita/eliminarCita', component:EliminarcitaComponent},
  {path: 'info/acercaDe',component:AcercaDeComponent},
  {path: 'info/Servicios',component:ServiciosComponent},
  {path: 'home',component:ImgMainComponent},
  {path: '',redirectTo:'/home', pathMatch:'full'},
  {path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
