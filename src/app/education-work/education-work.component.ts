import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-work',
  templateUrl: './education-work.component.html',
  styleUrls: ['./education-work.component.scss']
})
export class EducationWorkComponent implements OnInit {
  breakpointTitle: number;
  breakpointDesc: number;
  rowHeight;
  constructor() { }

  ngOnInit() {
    this.breakpointTitle = (window.innerWidth <= 600) ? 1 : 4;
    this.breakpointDesc = (window.innerWidth <= 600) ? 1 : 3;
  }
  onResize(event) {
    this.breakpointTitle = (window.innerWidth <= 600) ? 1 : 4;
    this.breakpointDesc = (window.innerWidth <= 600) ? 1 : 3;
  }

}
