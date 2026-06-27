import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {AboutComponent} from "./features/about/about.component";
import {ProjectsComponent} from "./features/projects/projects.component";
import {SkillsComponent} from "./features/skills/skills.component";
import {ContactoComponent} from "./features/contacto/contacto.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,

  },
  {
    path: 'projects',
    component: ProjectsComponent,

  },
  {
    path: 'skills',
    component: SkillsComponent,

  },
  {
    path: 'contact',
    component: ContactoComponent,

  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
