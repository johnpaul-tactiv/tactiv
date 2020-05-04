import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';
import { API_AUTH } from '../../constants/api.constants';
import { urlsafe } from '../../utils/http.utils';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  update(data: object) {
    return this.http.post(API_AUTH, data)
      .toPromise()
      .then((resp) => {
        this.auth.setUser();
      })
    ;
  }

  upload(data: object) {
    return this.http.post(urlsafe(API_AUTH, 'upload'), data)
      .toPromise()
      .then((resp) => {
        this.auth.setUser();
      })
    ;
  }
}
