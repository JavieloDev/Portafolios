import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule} from "@angular/router";
import {NzMenuDirective, NzMenuItemComponent} from "ng-zorro-antd/menu";
import {NgZorroModule} from '../ng-zorro/ng-zorro.module';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroModule
  ]
})
export class SharedModule { }
