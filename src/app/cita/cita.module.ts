import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import {RouterModule} from '@angular/router';
import { AnadircitaComponent } from './anadircita/anadircita.component';
import { ModificarcitaComponent } from './modificarcita/modificarcita.component';
import { EliminarcitaComponent } from './eliminarcita/eliminarcita.component';
@NgModule({
  declarations: [CrearCitaComponent, AnadircitaComponent, ModificarcitaComponent, EliminarcitaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CitaModule { }
