import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [AcercaDeComponent, ServiciosComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    AcercaDeComponent,ServiciosComponent
  ]
})
export class InfoModule { }
