import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../../models/projects.models';
import { API_PROJECTS } from '../../constants/api.constants';
import { urlsafe } from '../../utils/http.utils';


@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(
    private http: HttpClient
  ) { }

  create(data) {
    return this.http.post(API_PROJECTS, data)
      .toPromise()
    ;
  }
}
