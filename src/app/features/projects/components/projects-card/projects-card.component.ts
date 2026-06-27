import {Component, input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Project} from "../../../../core/models/project.model";
import {ProjectDetailsComponent} from "../project-details/project-details.component";

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [
    NgForOf,
    ProjectDetailsComponent
  ],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {
  project = input.required<Project>()

  isModalOpen = false;
  selectedProject: Project | null = null;

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
}
