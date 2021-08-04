import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { City } from "../models/city.model";
import { ProjectHttpService } from '../services/project--http.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  checked: boolean = false;
  cities: City[];

  selectedCity: City | undefined;

  constructor(private projectHttpService: ProjectHttpService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  project: ProjectModel = {};// poruqe todos los cmapos son opcionales
  projects: ProjectModel[] = [];
  // constructor(private projectHttpService: ProjectHttpService) {
  // this.project = {
  //   id: 12,
  //   code: 'asac',
  //   date: new Date(),
  //   description: 'sdfsaj',
  //   appoved: true,
  //   title: 'sifds'
  // }
  // this.projects.push(this.project);
  // this.projects.push(this.project);
  // this.projects.push(this.project);
  // this.projects.push(this.project);
  // this.projects.push(this.project);
  // this.projects.push(this.project);
  // }



  ngOnInit(): void {
    this.getProjects();
  }
  getProjects() {
    return this.projectHttpService.getAll()
      .subscribe(data => {
        this.projects = data
      },
        e => console.log(e))
  }
  getProject() {
    return this.projectHttpService.getOne(2)
      .subscribe(response => {
        console.log(response)

      }, e => console.log(e))
  }

}
