import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'projects',
        component: ProjectComponent
    },
    {
        path: 'authors',
        component: AuthorComponent
    },
    {
        path: 'not-found', component: NotFoundComponent
    },
    {
        path: '**', redirectTo: '/not-found'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
