import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule, RouterModule],
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  navItems = [
    {id: 'home', label: 'Home', path: '/', exact: true},
    {id: 'about', label: 'Sobre mí', path: '/about', exact: false},
    {id: 'projects', label: 'Proyectos', path: '/projects', exact: false},
    {id: 'skills', label: 'Habilidades', path: '/skills', exact: false},
    {id: 'contact', label: 'Contacto', path: '/contact', exact: false},
  ];
}
