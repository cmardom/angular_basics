import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotonesService {
  private botonesDias: any[]=[
    {indice :1, texto: "lunes"},
    {indice :2, texto: "martes"},
    {indice :3, texto: "miércoles"},
    {indice :4, texto: "jueves"},
    {indice :5, texto: "viernes"},
    {indice :6, texto: "sábado"},
    {indice :7, texto: "domingo"},



  ]

  botonesChanged:EventEmitter<any>;

  constructor() {
    this.botonesChanged = new EventEmitter<any>();
  }

  getBotonesDias():any[]{
    return Array.from(this.botonesDias);
  }
}
