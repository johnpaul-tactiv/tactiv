import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../commons/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getUser();
  }

}
