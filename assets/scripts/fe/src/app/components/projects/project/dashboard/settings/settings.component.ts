import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { ProjectService } from 'src/app/commons/services/projects/project.service';
import { Project } from 'src/app/commons/models/projects.models';
import { ProjectForm } from 'src/app/commons/forms/projects.forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private form: ProjectForm = new ProjectForm(new Project());
  private done = false;

  constructor(
    private proj: ProjectService,
    private state: StateService
  ) { }

  ngOnInit() {
    // initialize login form.
    // TODO: temporarily add setTimeout to let
    // the data loaded after it is fetched from
    // the backend. NEVER use setTimeout in this
    // type of situation.
    // Issue occur: when page is reloaded.
    setTimeout(() => {
      this.form = new ProjectForm(new Project(this.proj.instance));
    }, 300);
  }

  onSubmit({ value, valid }: { value: Project, valid: boolean}) {
    this.form.submitted = true;
    if (valid) {
      this.proj.update(this.proj.instance.code, value)
        .then((resp) => {
          this.done = true;

          // hide after 5000 milliseconds
          setTimeout(() => {
            this.done = false;
          }, 3000);
        })
        .catch((err: any) => {
          this.form.errors = err;
        })
      ;
    }
  }

}
