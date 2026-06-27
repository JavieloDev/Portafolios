import {Component, ViewEncapsulation} from '@angular/core';
import {NzImageDirective} from "ng-zorro-antd/image";
import {NzModalComponent, NzModalContentDirective} from "ng-zorro-antd/modal";
import {Project} from "../../core/models/project.model";
import {NgForOf, NgIf} from "@angular/common";
import {ProjectsCardComponent} from "./components/projects-card/projects-card.component";
import {ProjectDetailsComponent} from "./components/project-details/project-details.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NzImageDirective,
    NzModalComponent,
    NzModalContentDirective,
    NgIf,
    NgForOf,
    ProjectsCardComponent,
    ProjectDetailsComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  selectedProject: Project | null = null;
  isModalOpen = false;
  selectedCategory: string = 'all';
  currentSlide = 0;

  projects: Project[] = [
    {
      id: 'etecsa',
      title: 'ETECSA',
      subtitle: 'Telecomunicaciones de Cuba',
      description: 'Desarrollo de interfaces y gestión de bases de datos para el sistema de telecomunicaciones.',
      longDescription: [
        'Desarrollo de interfaces utilizando Java para el sistema de gestión de telecomunicaciones.',
        'Creación y administración de bases de datos SQL para integrar diferentes módulos del sistema.'
      ],
      image: '/assets/279259196_357446243105064_4831179506431986353_n.png',
      coverImage: '/assets/hq720.jpg',
      technologies: ['Java', 'SQL', 'Oracle'],
      category: 'work',
      year: '2020',
      location: 'Cuba',
      range: 'Junior Programmer',
      featured: true
    },
    {
      id: 'desoft',
      title: 'DESOFT',
      subtitle: 'Empresa de Software',
      description: 'Plataforma para gestión de errores en bases de datos y desarrollo de aplicaciones web.',
      longDescription: [
        'Creación de plataforma para gestión de errores e incidencias en bases de datos del sistema contable Versat Sarasola.',
        'Diseño web utilizando React Js y Ant-Design como librería de componentes.',
        'Desarrollo de API REST con Node Js usando Express y Sequelize.'
      ],
      image: '/assets/descarga.png',
      coverImage: '/assets/1689-desoft-cuba-desoft.jpg',
      technologies: ['React', 'Node.js', 'Express', 'Sequelize', 'Ant-Design'],
      category: 'work',
      year: '2021 - 2023',
      location: 'Cuba',
      range: 'Junior Programmer',
      featured: true
    },
    {
      id: 'logicplaces',
      title: 'LogicPlaces',
      subtitle: 'Company',
      description: 'Diseño de sitios web y administración de bases de datos para plataforma de adserving.',
      longDescription: [
        'Diseño de sitios web utilizando Angular como framework de desarrollo.',
        'Creación y administración de bases de datos con Node Js y PostgreSQL.',
        'Trabajo en lógica y diseño de módulos para plataforma de adserving optimizada y escalable.'
      ],
      image: '/assets/Frame 462.jpg',
      coverImage: '/assets/logicplaces_cover.jpg',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind'],
      category: 'work',
      year: '2023',
      location: 'Spain',
      range: 'Junior Programmer',
      featured: true,
      demoUrl: 'https://logicplaces.com'
    }
  ];

  get filteredProjects(): Project[] {
    return this.selectedCategory === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === this.selectedCategory);
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  nextSlide(): void {
    const total = this.featuredProjects.length;
    this.currentSlide = (this.currentSlide + 1) % total;
  }

  prevSlide(): void {
    const total = this.featuredProjects.length;
    this.currentSlide = (this.currentSlide - 1 + total) % total;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
