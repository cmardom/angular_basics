import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
