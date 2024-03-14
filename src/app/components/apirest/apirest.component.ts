import { Component } from '@angular/core';
import {NgClass, NgFor, NgIf} from "@angular/common";
import {DatabaseService, Equipo, Grupo, Usuario} from "../../services/database.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-apirest',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink],
  templateUrl: './apirest.component.html',
  styleUrl: './apirest.component.css'
})
export class ApirestComponent {
  //Variables de instancia (puedes usarlas o no)
  grupos:Grupo[]=[];
  idGrupoSeleccionado:number=-1;
  equipos:Equipo[] = [];
  idEquipoSeleccionado:number=-1;
  usuarios:Usuario[] = [];
  siguienteIdUsuario:number=1;
  errorDB:boolean=false;

  constructor(private dbService:DatabaseService) {
    this.mostrarGrupos();
  }


  //Métodos de instancia (puedes usarlos o no)
  mostrarGrupos(){
    this.dbService.getGrupos().subscribe(data => this.grupos=(data as Grupo[]));
  }


  mostrarEquiposGrupo(grupo:Grupo){
    this.dbService.getEquiposGrupo(grupo).subscribe(data => this.equipos=(data as Equipo[]));
    this.idGrupoSeleccionado = grupo.id;
  }

  mostrarUsuariosEquipo(equipo:Equipo){
    this.dbService.getUsuariosEquipo(equipo).subscribe(data => this.usuarios=(data as Usuario[]));
    this.idEquipoSeleccionado = equipo.id;
  }

  limpiarGrupos(){
    this.idGrupoSeleccionado=-1;
    this.equipos=[];
    this.idEquipoSeleccionado=-1;
    this.usuarios=[];
  }

  limpiarEquipos(){
    this.idEquipoSeleccionado=-1;
    this.usuarios=[];
  }

  borrarUsuario(usuario:any){
    //Mensaje de confirmación de borrado (incluir el nombre del usuario
    //en la pregunta)
    let resp:boolean=confirm(`¿Desea eliminar el usuario? ${usuario.nombre}`);
    if(resp){
      this.dbService.deleteUsuario(usuario).subscribe({
        next: () =>
          this.usuarios= this.usuarios.filter(u => u.id != usuario.id),
        error: () => this.setErrorDB()
      })
    }
  }

  setErrorDB(){
    this.errorDB=true;
    setTimeout(()=> {
      this.errorDB=false;
    }, 1500);
  }

}
