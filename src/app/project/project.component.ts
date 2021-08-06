import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { City } from "../models/city.model";
import { ProjectHttpService } from '../services/project--http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { AppService } from '../services/app.service';
import themes from '../../assets/themes/themes.json';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  //Para componentes de primeng
  // checked: boolean = false;
  // cities: City[];
  // selectedCity: City | undefined;
  themes: any;
  selectedTheme: any;

  selectedProject: ProjectModel = {};// poruqe todos los cmapos son opcionales
  projects: ProjectModel[] = [];
  formProject: FormGroup;

  constructor(private projectHttpService: ProjectHttpService,
    private formBuilder: FormBuilder,
    public messageService: MessageService,
    private appService: AppService,
  ) {
    //para un componente de primeng
    // this.cities = [
    //   { name: 'New York', code: 'NY' },
    //   { name: 'Rome', code: 'RM' },
    //   { name: 'London', code: 'LDN' },
    //   { name: 'Istanbul', code: 'IST' },
    //   { name: 'Paris', code: 'PRS' }
    // ];
    this.formProject = this.newFormGroupProject();
  }

  ngOnInit(): void {
    this.getProjects();
  }
  newFormGroupProject(): FormGroup {
    return this.formBuilder.group(
      {
        id: [null],
        code: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(3)]],
        date: [null],
        description: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(3)]],
        approved: [null, [Validators.required]],
        title: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(3)]],
      }
    )
  }
  getProjects() {
    return this.projectHttpService.getAll()
      .subscribe(response => {
        this.projects = response.data
      },
        e => this.messageService.error(e)
      )
  }
  getProject() {
    return this.projectHttpService.getOne(2)
      .subscribe(
        response => this.selectProject = response.data,
        e => this.messageService.error(e)
      )
  }
  storeProject(project: ProjectModel) {
    return this.projectHttpService.store(project)
      .subscribe(response => {
        console.log(response)
        this.saveProject(response.data)
      },
        e => this.messageService.error(e)
      )
  }
  deleteProject(project: ProjectModel) {
    return this.projectHttpService.delete(project.id)
      .subscribe(response => {
        console.log(response)
        this.removeProject(project)
      },
        e => this.messageService.error(e)
      )
  }
  updateProject(project: ProjectModel) {
    return this.projectHttpService.update(project.id, project)
      .subscribe(response => {
        this.saveProject(project)
        this.messageService.success(response)
      },
        e => this.messageService.error(e)
      )
  }
  selectProject(project: ProjectModel) {
    console.log(project);
    this.formProject.patchValue(project);
  }
  removeProject(project: ProjectModel) {
    this.projects = this.projects.filter(element => element.id !== project.id);
  }
  onSubmit(project: ProjectModel) {
    if (this.formProject.valid) {
      if (project.id) {
        this.updateProject(project);
      } else {
        this.storeProject(project);
      }
      this.formProject.reset()
    } else {
      this.formProject.markAllAsTouched()
    }
  }
  saveProject(project: ProjectModel) {
    const index = this.projects.findIndex(element => element.id === project.id)
    if (index === -1) {
      this.projects.push(project)
    }
    this.projects[index] = project
  }

  //
  get idField() {
    return this.formProject.controls['id'];
  }
  get codeField() {
    return this.formProject.controls['code'];
  }
  get titleField() {
    return this.formProject.controls['title'];
  }
  get descriptionField() {
    return this.formProject.controls['description'];
  }
  get approvedField() {
    return this.formProject.controls['approved'];
  }
  get dateField() {
    return this.formProject.controls['date'];
  }
  changeTheme(theme: string) {
    this.appService.changeTheme(theme);
  }
}
