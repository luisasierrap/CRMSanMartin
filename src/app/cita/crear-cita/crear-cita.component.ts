import { Component, OnInit } from '@angular/core';
import { Cita} from "src/app/modelo/Cita";

import { ControladorService } from "src/app/controlador.service";
import { environment } from 'src/environments/environment';
import  * as M from "materialize-css";


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  
  lista_de_citas: object;
  cita:Cita={
    IDOdontologo:0,
    IDPaciente:0,
    Fecha:"",
    Hora:""
  }

  arrayFecha = []
  fecha_= null;
  opcionesOdontologo:any = []

  constructor(private controlador:ControladorService,private httpclient: HttpClient) { }

  ngOnInit(){
    this.httpclient.get(environment.backEndBasedURL+'/listarCita').subscribe(response => {
      this.lista_de_citas = response;
    }); 

    this.httpclient.get(environment.backEndBasedURL+'/listaOdontologo').subscribe(response_o=>{
      this.opcionesOdontologo=response_o;
    });
    var datepicker= document.querySelectorAll('.datepicker');
    var instancesdp = M.Datepicker.init(datepicker, {
      format:'yyyy-mm-dd'
    });

    var timepicker= document.querySelectorAll('.timepicker');
    var instancestp= M.Timepicker.init(timepicker, {
      twelveHour:false
    });  

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
    }); 
    
  } 
  dataToModal(data: Cita){
      this.cita = data;
  }

  datatoDelete(data: Cita){
    this.cita = data;
  }
  actualizarCita(data){
      var selectf= document.getElementById('fecha_up');
      var instancesselect = M.Datepicker.getInstance(selectf);
      this.cita.Fecha=instancesselect.toString();
  
      var selecth= document.getElementById('hora_up');
      var instancesh = M.Timepicker.getInstance(selecth);
      this.cita.Hora=instancesh.time;
  
      this.controlador.actualizarCita(this.cita).subscribe(observer=>
        {alert(observer)})
  }
  eliminarCita(data){ 
    this.controlador.eliminarCita(data).subscribe(observer=>
      {alert(observer)})
  }

}


