import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {NgClass, NgForOf, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgSwitchCase,
    NgSwitch
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  animating = false;

  softSkills = [
    {id: 'web-design', name: 'Web Design'},
    {id: 'front-end', name: 'Front End'},
    {id: 'back-end', name: 'Back End'},
    {id: 'design-thinking', name: 'Design Thinking'},
    {id: 'problem-solving', name: 'Problem Solving'},
    {id: 'computer-literacy', name: 'Computer Literacy'},
  ];

  techSkills = [
    {name: 'Angular', level: 95, color: 'bg-gradient-to-r from-indigo-500 to-violet-500'},
    {name: 'TypeScript', level: 90, color: 'bg-gradient-to-r from-indigo-400 to-indigo-600'},
    {name: 'Tailwind', level: 88, color: 'bg-gradient-to-r from-sky-400 to-indigo-500'},
    {name: 'React', level: 70, color: 'bg-gradient-to-r from-violet-400 to-purple-600'},
    {name: 'Java', level: 70, color: 'bg-gradient-to-r from-indigo-400 to-violet-500'},
    {name: 'Node.js', level: 70, color: 'bg-gradient-to-r from-indigo-400 to-violet-500'},
    {name: 'SQL / DB', level: 65, color: 'bg-gradient-to-r from-violet-500 to-purple-500'},
    {name: 'Electron', level: 65, color: 'bg-gradient-to-r from-indigo-300 to-violet-400'},
    {name: 'Next.js', level: 35, color: 'bg-gradient-to-r from-indigo-300 to-yellow-400'},
    {name: 'Python', level: 30, color: 'bg-gradient-to-r from-indigo-400 to-yellow-500'},
  ];

  tags = [
    'Angular', 'TypeScript', 'Tailwind CSS', 'React',
    'Java', 'Node.js', 'SQL', 'Electron', 'Next.js',
    'Python', 'Git', 'REST APIs', 'Figma', 'HTML5', 'CSS3',
    'SCSS', 'RxJS', 'Postgres SQL', 'Sass', 'SQL Server',
  ];

  ngOnInit(): void {
    setTimeout(() => (this.animating = true), 400);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!this.animating) this.animating = true;
  }
}
