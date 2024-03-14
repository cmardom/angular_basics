import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//ENDPOINTS
const GRUPOSURL="http://localhost:3000/grupos"
const EQUIPOSURL="http://localhost:3000/equipos"
const USUARIOSURL="http://localhost:3000/usuarios"

const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) {

  }

  //Métodos (incluir tipos correctos en los argumentos)
  getGrupos():Observable<Object>{
    let url= `${GRUPOSURL}`;
    return this.http.get(url, HTTPOPTIONS);
  }

  getEquipos():Observable<Object>{
    let url = `${EQUIPOSURL}`
    return this.http.get(url, HTTPOPTIONS);
  }

  getUsuario(id:any):Observable<Object>{
    let url = `${USUARIOSURL}`
    return this.http.get(url, HTTPOPTIONS)

  }

  getUsuarios():Observable<Object>{
    let url=`${USUARIOSURL}`;
    return this.http.get(url, HTTPOPTIONS);
  }

  getEquiposGrupo(g:Grupo):Observable<Object>{
    let url = `${EQUIPOSURL}?grupo=${g.id}`;
    return this.http.get(url, HTTPOPTIONS);
  }

  getUsuariosEquipo(e:Equipo):Observable<Object>{
    let url = `${USUARIOSURL}?equipo=${e.id}`;
    return this.http.get(url, HTTPOPTIONS);
  }

  crearUsuario(u:Usuario):Observable<Object>{
    let url=`${USUARIOSURL}/${u.id}`;
    return this.http.put(url, u, HTTPOPTIONS);
  }

  actualizarUsuario(u:Usuario):Observable<Object>{
    let url = `${USUARIOSURL}/${u.id}`;
    return this.http.put(url, u, HTTPOPTIONS);
  }

   deleteUsuario(u:Usuario):Observable<any>{
    let  url =`${USUARIOSURL}/${u.id}`;
    return this.http.delete(url);
   }
}

//INTERFACES
export interface Grupo {
  id: number,
  nombre: string
}

export interface Equipo {
  id: number,
  nombre: string,
  presupuesto: number,
  grupo: number
}

export interface Usuario {
  id: number,
  nombre: string,
  passwd: string,
  equipo: number
}
