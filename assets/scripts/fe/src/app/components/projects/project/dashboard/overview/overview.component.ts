import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/commons/services/projects/project.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    private proj: ProjectService
  ) { }

  ngOnInit() {
  }

}
