import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgZorroModule} from "./ng-zorro/ng-zorro.module";
import {es_ES, NZ_I18N} from "ng-zorro-antd/i18n";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers:[
    provideClientHydration(),
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
