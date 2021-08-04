import { Component, OnInit } from '@angular/core';
import { AuthorModel } from "../models/author.model";
import { ProjectModel } from '../models/project.model';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  value: Date = new Date();
  color: string = '#1976D2';
  val: number = 3;
  names: string = 'John';
  lastname: string = 'Sault';
  get thename() {
    return `${this.names} ${this.lastname}`;
  }
  getTheName(): string {
    return `${this.names} ${this.lastname}`;
  }
  ngOnInit(): void {
  }

  project: ProjectModel = {};
  author: AuthorModel = {};// poruqe todos los cmapos son opcionales
  authors: AuthorModel[] = [];
}
