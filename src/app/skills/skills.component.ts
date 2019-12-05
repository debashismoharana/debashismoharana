import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  svgName: string;
  rating: number;
}

export interface Tools {
  name: string;
  svgName: string;
  link: string;
}

const skills: Skills[] = [
  { name: 'JavaScript', svgName: 'javascript', rating: 7 },
  { name: 'Angular 2/4/5/7/8', svgName: 'angular', rating: 7 },
  { name: 'TypeScript', svgName: 'typescript', rating: 6 },
  { name: 'HTML', svgName: 'html5', rating: 8 },
  { name: 'CSS', svgName: 'css3', rating: 7 },
  { name: 'Ionic', svgName: 'ionic', rating: 7 },
  { name: 'React', svgName: 'react', rating: 5 },
  { name: 'Python', svgName: 'python', rating: 5 },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {
  displayedColumns: string[] = ['name', 'rating'];
  dataSource = skills;
  tools: Tools[];
  constructor() {
    this.tools = [
      {name: 'Visual Studio Code', svgName: 'visualstudiocode', link: 'https://code.visualstudio.com/'},
      {name: 'XCode', svgName: 'xcode', link: 'https://developer.apple.com/xcode/'},
      {name: 'GitHub', svgName: 'github', link: 'https://desktop.github.com/'},
      {name: 'Gitlab', svgName: 'gitlab', link: 'https://about.gitlab.com/'},
      {name: 'Jenkins', svgName: 'jenkins', link: 'https://jenkins.io/'},
      {name: 'Postman', svgName: 'postman', link: 'https://www.getpostman.com/'},
      {name: 'Jupyter', svgName: 'jupyter', link: 'https://jupyter.org/'},
      {name: 'Firebase', svgName: 'firebase', link: 'https://firebase.google.com/'},
      {name: 'Microsoft Excel', svgName: 'microsoftexcel', link: 'https://products.office.com/en-in/excel'},
      {name: 'Wordpress', svgName: 'wordpress', link: 'https://wordpress.org/download/'},
      {name: 'JQuery', svgName: 'jquery', link: 'https://jquery.com/'},
      {name: 'Flutter', svgName: 'flutter', link: 'https://flutter.dev/'},
      {name: 'Redux', svgName: 'redux', link: 'https://redux.js.org/'},
      {name: 'Bootstrap', svgName: 'bootstrap', link: 'https://getbootstrap.com/'},
      {name: 'Material Design', svgName: 'materialdesign', link: 'https://material.angular.io/'},
  ];
  }
}
