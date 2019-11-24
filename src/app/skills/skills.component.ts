import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  rating: number;
}

const skills: Skills[] = [
  { name: 'Angular', rating: 7 },
  { name: 'JavaScript', rating: 7 },
  { name: 'HTML', rating: 8 },
  { name: 'CSS', rating: 7 },
  { name: 'Ionic', rating: 7 },
  { name: 'React', rating: 5 },
  { name: 'PrimeNG', rating: 5 },
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
