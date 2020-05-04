import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { ProjectService } from 'src/app/commons/services/projects/project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private proj: ProjectService,
    private state: StateService
  ) { }

  async ngOnInit() {
    await this.proj.getProject(this.state.params.code);
  }

}
