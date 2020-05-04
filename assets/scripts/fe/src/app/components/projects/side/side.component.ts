import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/commons/services/projects/project.service';

@Component({
  selector: 'app-projects-sidebar',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor(
    private proj: ProjectService
  ) { }

  ngOnInit() {
  }

}
