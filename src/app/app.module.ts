import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ModuleComponent } from './module/module.component';
import {SharedModule} from './shared/shared.module';
import {ContentModule} from './content/content.module';
import {CitaModule} from './cita/cita.module';
import {InfoModule} from './info/info.module';


@NgModule({
  declarations: [
    AppComponent,
    
    //ModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ContentModule,
    CitaModule,
    InfoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
