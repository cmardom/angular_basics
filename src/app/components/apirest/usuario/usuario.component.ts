import { Component } from '@angular/core';
import {DatabaseService, Equipo, Usuario} from '../../../services/database.service';
import {ActivatedRoute, Router} from "@angular/router";
import {reduce} from "rxjs";
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuario={
    id: -1,
    nombre: "",
    equipo: -1,
    passwd: ""
  };

  equipos:Equipo[]=[];

  esNuevo=true;
  siguienteIdUsuario:number=1;

  constructor(private dbService:DatabaseService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {

    activatedRoute.params.subscribe((p) => {
      let id: number;
      id = Number(p['id'])
      //busca usuario por id con el parametro de la url

      if (id >= 0) {
        this.esNuevo = false;
        //si existe lo recoge en la variable usuario
        dbService.getUsuario(id).subscribe((data)=>{
          this.usuario = data as Usuario;
        })
      } else {
        //si no
        dbService.getUsuarios().subscribe(data => {
          this.siguienteIdUsuario = (data as Usuario[]).map(u => u.id).reduce(
            (a,b) => (a > b) ? a : b) + 1;
          // reduce los IDs de usuario mapeados a un solo valor, que es el ID más grande encontrado.
          //Luego se suma 1 para obtener el siguiente ID disponible para un nuevo usuario.
            this.usuario.id = this.siguienteIdUsuario;
        })
      } /*fin else*/
    });

    dbService.getEquipos().subscribe((data) =>
      this.equipos=(data as Equipo[])
    );

  }


  enviar(formulario:NgForm){
    if (formulario.valid){
      if (this.esNuevo){
        this.dbService.crearUsuario(this.usuario).subscribe(u=>
        this.router.navigate(['/apirest']))
      } else {
        this.dbService.actualizarUsuario(this.usuario).subscribe(u=>
        this.router.navigate(['/apirest']))
      }
    }
  }

  cancelar(){
    this.router.navigate(['/apirest']);

  }
}
