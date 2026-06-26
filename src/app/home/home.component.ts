import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    RouterLink
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

}
