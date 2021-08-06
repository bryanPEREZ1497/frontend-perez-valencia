import { Injectable } from '@angular/core';
import themes from '../../assets/themes/themes.json';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AppService {
    changeTheme(theme: string) {
        const themePath = themes.find(element => element.name == theme)?.path;
        console.log(themePath);
        const element = document.getElementById('theme-css');
        if (element && themePath) {
            element.setAttribute('href', themePath);
        }
    }

}
