import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { User } from '../../../commons/models/user.models';
import { UserForm } from '../../../commons/forms/users.forms';
import { UserService } from '../../../commons/services/auth/user.service';
import { AuthService } from '../../../commons/services/auth/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private form: UserForm = new UserForm(new User());
  private imagedata: FormData = new FormData();

  constructor(
    private state: StateService,
    private users: UserService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.form = new UserForm(this.auth.user);
    }, 100);
  }

  onSubmit({ value, valid }: { value: User, valid: boolean}) {
    this.form.submitted = true;
    if (valid) {
      this.users.update(value)
        .then((resp) => {
          this.state.go('profile');
        })
        .catch((err: any) => {
          this.form.errors = err;
        })
      ;
    }
  }

  uploadPhoto() {
    const el = document.querySelector('input[name=image]') as HTMLElement;
    el.click();
  }

  upload($event) {
    const data = new FormData();
    data.append('image', $event.target.files[0]);

    this.users.upload(data)
      .then((resp) => {

      })
    ;
  }

}
