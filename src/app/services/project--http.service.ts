import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ProjectModel } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectHttpService {
    
    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<ProjectModel[]> {
        return this.httpClient.get<any>('http://backend-perez-valencia.test/projects')

    }

    getOne(id: number): Observable<ProjectModel> {
        return this.httpClient.get<ProjectModel>('http://backend-perez-valencia.test/project/' + id)

    }
    create(project: ProjectModel) {
        return this.httpClient.post('http://backend-perez-valencia.test/projects', project)
    }

    update(id: number, project: ProjectModel) {
        return this.httpClient.put('http://backend-perez-valencia.test/projects/' + id, project)
    }

    delete(id: number) {
        return this.httpClient.delete('http://backend-perez-valencia.test/projects/' + id)
    }
}
