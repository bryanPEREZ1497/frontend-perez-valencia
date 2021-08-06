import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ProjectModel } from '../models/project.model';
import { ServerResponse } from '../models/server-response';
import { Handler } from '../exceptions/handler';
import { environment } from '../../environments/environment';
import { MessageService } from './message.service';
@Injectable({
    providedIn: 'root'
})
export class ProjectHttpService {
    API_URL_PRIVATE: string = environment.API_URL_PRIVATE;
    API_URL_PUBLIC: string = environment.API_URL_PUBLIC;

    constructor(private httpClient: HttpClient
    ) { }

    getAll(): Observable<ServerResponse> {
        const url = this.API_URL_PUBLIC + 'projects';
        return this.httpClient.get<ServerResponse>(url)
            .pipe(
                map(response => response),
                catchError(Handler.render)
            )

    }

    getOne(id: number): Observable<ServerResponse> {
        const url = this.API_URL_PUBLIC + 'projects/' + id;
        return this.httpClient.get<ServerResponse>(url + id)
            .pipe(
                map(response => response),
                catchError(Handler.render)
            )

    }
    store(project: ProjectModel): Observable<ServerResponse> {
        const url = this.API_URL_PUBLIC + 'projects'
        return this.httpClient.post<ServerResponse>(url, project)
            .pipe(
                map(response => response),
                catchError(Handler.render)
            )

    }

    update(id: number | undefined, project: ProjectModel): Observable<ServerResponse> {
        const url = this.API_URL_PUBLIC + 'projects/' + id;
        return this.httpClient.put<ServerResponse>(url, project)
            .pipe(
                map(response => response),
                catchError(Handler.render)
            )
    }

    delete(id: number | undefined): Observable<ServerResponse> {
        const url = this.API_URL_PUBLIC + 'projects/' + id;
        return this.httpClient.delete<ServerResponse>(url)
            .pipe(
                map(response => response),
                catchError(Handler.render)
            )
    }
    changeState(id: number | undefined, project: ProjectModel) {
        const url = this.API_URL_PUBLIC + 'project/' + id;
        return this.httpClient.patch<ServerResponse>(url, project)
            .pipe(
                map(response => response),
                catchError(Handler.render)
            )
    }
}
