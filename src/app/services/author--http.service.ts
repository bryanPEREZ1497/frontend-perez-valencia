import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ProjectModel } from '../models/project.model';
import { AuthorModel } from "../models/author.model";

@Injectable({
    providedIn: 'root'
})
export class AuthorHttpService {

    url = 'http://backend-perez-valencia.test/projects/1/authors';
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<AuthorModel[]> {

        return this.httpClient.get<any>(this.url);

    }

    getOne(id: number): Observable<AuthorModel> {
        return this.httpClient.get<AuthorModel>(this.url + id)

    }
    create(author: AuthorModel) {
        return this.httpClient.post(this.url, author)
    }

    update(id: number, author: AuthorModel) {
        return this.httpClient.put(this.url + id, author)
    }

    delete(id: number) {
        return this.httpClient.delete(this.url + id)
    }
}
