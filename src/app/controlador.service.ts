import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';
import { Cita } from 'src/app/modelo/Cita';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
@Injectable({
  providedIn: 'root'
})
export class ControladorService {

  constructor(private httpclient: HttpClient) {}

  public crearCita(datosCita: Cita): Observable<Cita> { 
    return new Observable<Cita>((observer) => {
      this.httpclient.post(environment.backEndBasedURL+"/crearCita", datosCita)
      .subscribe(
        (savedCita: Cita) => {
          savedCita = datosCita
          observer.next(savedCita);
        },
        (err)=> {
          observer.error("Error guardando" + err)
        }
      ) 
    })
  } 

  public actualizarCita(data: Cita): Observable<Cita>{
    console.log(data)
    return new Observable<Cita>((observer) => {
      this.httpclient.post(environment.backEndBasedURL+"/actualizarCita", data)
      .subscribe(
        (updateCita: Cita) => {
          updateCita = data
          observer.next(updateCita);
        },
        (err)=> {
          observer.error("Error guardando" + err)
        }
      ) 
    })
  }
}