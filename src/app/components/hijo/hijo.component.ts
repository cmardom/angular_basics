import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {BotonesService} from "../../services/botones.service";

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {
  @Input() texto:string="xxx";
  @Input() indice: number=0;
  @Input() evResetHijo:EventEmitter<any>=new EventEmitter();
  @Output() evBotonPulsado:EventEmitter<any>=new EventEmitter();
  yaPulsado:boolean=false;


  constructor(private botonesService:BotonesService){
    console.log(this.texto);


  }
  ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
    this.evResetHijo.subscribe(
      () => this.yaPulsado=false
    )
  }


  botonPulsado(){
    this.evBotonPulsado.emit(this.indice);
    this.yaPulsado=true;
  }
}
