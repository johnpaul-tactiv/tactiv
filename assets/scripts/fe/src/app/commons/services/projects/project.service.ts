import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../../models/projects.models';
import { API_PROJECTS } from '../../constants/api.constants';
import { urlsafe } from '../../utils/http.utils';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: any;
  public instance: Project = new Project();

  constructor(
    private http: HttpClient
  ) { }

  getProjects() {
    return this.http.get(API_PROJECTS)
      .toPromise()
      .then((resp) => {
        this.projects = resp;
      })
    ;
  }

  getProject(code: string) {
    return this.http.get(urlsafe(API_PROJECTS, code))
      .toPromise()
      .then((resp) => {
        this.instance = new Project(resp);
      })
    ;
  }

  update(code: string, data: object) {
    return this.http.post(urlsafe(API_PROJECTS, code), data)
      .toPromise()
    ;
  }
}
