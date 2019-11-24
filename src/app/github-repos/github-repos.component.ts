import { Component, OnInit } from '@angular/core';

import { GithubReposService } from '../../services/github-repos.service';
import { Repo } from '../../models/github-repo';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {
  myRepos: Repo;
  constructor(private githubService: GithubReposService) { }

  ngOnInit() {
    this.getGithubRepos();
  }

  getGithubRepos() {
    this.githubService.getRepos().subscribe((response) => {
      this.myRepos = response;
      console.log(this.myRepos);
    }, (error) => {

    });

  }

}
