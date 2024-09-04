import {Component, ViewEncapsulation} from '@angular/core';
import {NzImageDirective} from "ng-zorro-antd/image";
import {NzModalComponent, NzModalContentDirective} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NzImageDirective,
    NzModalComponent,
    NzModalContentDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  isVisible = false;
  isVisible1 = false;
  isVisible2 = false;
  titleHtml = '<h5><span>ETECSA</span></h5>';
  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }
  showModal1(): void {
    this.isVisible1 = true;
  }
  showModal2(): void {
    this.isVisible2 = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisible1 = false;
    this.isVisible2 = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisible1 = false;
    this.isVisible2 = false;
  }
}
