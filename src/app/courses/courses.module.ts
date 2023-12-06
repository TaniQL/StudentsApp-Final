import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { MoreInfoFormComponent } from './components/more-info-form/more-info-form.component';
import { MaterialModule } from '../shared/material.module';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoursesListComponent,
    MoreInfoFormComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CoursesModule { }
