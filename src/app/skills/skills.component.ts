import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  rating: number;
}

const skills: Skills[] = [
  { name: 'JavaScript', rating: 7 },
  { name: 'Angular 2/4/5/7/8', rating: 7 },
  { name: 'TypeScript', rating: 6 },
  { name: 'HTML', rating: 8 },
  { name: 'CSS', rating: 7 },
  { name: 'Ionic', rating: 7 },
  { name: 'React', rating: 5 },
  { name: 'PrimeNG', rating: 5 },
  { name: 'Python', rating: 5 },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {
  displayedColumns: string[] = ['name', 'rating'];
  dataSource = skills;
}
