import { Component, OnInit } from '@angular/core';
import { ControladorService } from "src/app/controlador.service";
import { Cita} from "src/app/modelo/Cita";
import  * as M from "materialize-css";
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-anadircita',
  templateUrl: './anadircita.component.html',
  styleUrls: ['./anadircita.component.css']
})
export class AnadircitaComponent implements OnInit {

  model:any=0;

  cita:Cita={
    IDOdontologo:0,
    IDPaciente:0,
    Fecha:"",
    Hora:""
  }
 
  opcionesPaciente:any = []
  opcionesOdontologo:any = []

  constructor(private controlador:ControladorService,private httpclient: HttpClient) { }

  ngOnInit() {
    var select= document.querySelectorAll('select');
    var instancesselect = M.FormSelect.init(select, {});
    
    var datepicker= document.querySelectorAll('.datepicker');
    var instancesdp = M.Datepicker.init(datepicker, {
      format:'yyyy-mm-dd'
    });

    var timepicker= document.querySelectorAll('.timepicker');
    var instancestp= M.Timepicker.init(timepicker, {
      twelveHour:false
    });  

    this.httpclient.get(environment.backEndBasedURL+'/listaPaciente').subscribe(response_p => {
      this.opcionesPaciente = response_p;
    });

    this.httpclient.get(environment.backEndBasedURL+'/listaOdontologo').subscribe(response_o=>{
      this.opcionesOdontologo=response_o;
    });
  }

  guardarCita()
  { 
    var selectf= document.getElementById('fecha');
    var instancesselect = M.Datepicker.getInstance(selectf);
    this.cita.Fecha=instancesselect.toString();

    var selecth= document.getElementById('hora');
    var instancesh = M.Timepicker.getInstance(selecth);
    this.cita.Hora=instancesh.time;

    this.controlador.crearCita(this.cita).subscribe(observer=>
      {alert(observer)})
  }

}
