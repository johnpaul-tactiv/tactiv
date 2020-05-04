import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { CreateService } from 'src/app/commons/services/projects/create.service';
import { Project } from 'src/app/commons/models/projects.models';
import { ProjectForm } from 'src/app/commons/forms/projects.forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private form: ProjectForm = new ProjectForm(new Project());
  private done = false;

  constructor(
    private proj: CreateService,
    private state: StateService
  ) { }

  ngOnInit() {
    this.form = new ProjectForm(new Project());
  }

  onSubmit({ value, valid }: { value: Project, valid: boolean }) {
    this.form.submitted = true;
    if (valid) {
      this.proj.create(value)
        .then((resp) => {
          this.state.go('overview', {code: resp[`code`]});
        })
        .catch((err: any) => {
          this.form.errors = err;
        })
      ;
    }
  }

}
