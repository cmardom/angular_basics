import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApirestComponent } from './components/apirest/apirest.component';
import { PadreComponent } from './components/padre/padre.component';
import {UsuarioComponent} from "./components/apirest/usuario/usuario.component";




export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'apirest', component: ApirestComponent},
  {path: 'comunicacion', component: PadreComponent},
  {path: 'usuarios/:id', component: UsuarioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
  //hay que poner fullmatch y redirect para la ruta por defecto
//SIEMPRE AL FINAL
];

