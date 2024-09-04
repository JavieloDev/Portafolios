import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLinkActive} from "@angular/router";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzImageDirective} from "ng-zorro-antd/image";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    NzIconDirective,
    NzImageDirective,
    NgOptimizedImage
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

}
