import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { MoreInfoStudentsComponent } from './components/more-info-students/more-info-students.component';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentEditComponent,
    MoreInfoStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StudentsModule { }
