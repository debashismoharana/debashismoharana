import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Repo } from 'src/models/github-repo';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) { }
  getRepos() {
    return this.http.get<Repo>('https://api.github.com/users/debashismoharana/repos');
  }
}
