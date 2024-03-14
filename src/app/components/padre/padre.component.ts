import {Component, EventEmitter} from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import {NgFor, NgIf} from "@angular/common";
import {BotonesService} from "../../services/botones.service";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, NgIf, NgFor],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  DIAS:string[]=['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
  ESTACIONES:string[] = ['primavera', 'verano', 'otoño', 'invierno'];
  seleccionado_dias:boolean=true;
  botones_por_pulsar:string[] = [];
  botones_pulsados:string[] = [];
  evResetPadre:EventEmitter<null>= new EventEmitter<null>();

  constructor(){


  }

  seleccionarDias(){
    this.seleccionado_dias = true;
    this.botones_por_pulsar=[...this.DIAS];
    this.botones_pulsados=[];
  }

  seleccionarEstaciones(){
    this.seleccionado_dias=false;
    this.botones_por_pulsar=[...this.ESTACIONES];
    this.botones_pulsados=[];
  }


  hijoPulsado(i:any){
    this.botones_pulsados.push(this.botones_por_pulsar[i]);
  }

  reset(){
    this.botones_pulsados=[];
    this.evResetPadre.emit();
  }



}
