import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { RatingModule } from 'primeng/rating';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AuthorComponent,
    NotFoundComponent,
    MainComponent,
    AccessDeniedComponent,
    UnderMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ColorPickerModule,
    RatingModule,
    ListboxModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
