import { TestBed } from '@angular/core/testing';

import { GithubReposService } from './github-repos.service';

describe('GithubReposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubReposService = TestBed.get(GithubReposService);
    expect(service).toBeTruthy();
  });
});
