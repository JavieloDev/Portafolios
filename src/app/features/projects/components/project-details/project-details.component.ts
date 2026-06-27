import {Component, EventEmitter, input, output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Project} from "../../../../core/models/project.model";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './project-details.component.html',
})
export class ProjectDetailsComponent {

  project = input<Project | null>(null)

  closeDetails = output<void>();

  closeModal() {
    this.closeDetails.emit()
  }

}
