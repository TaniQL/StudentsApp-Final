import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/models/courses';
import { Students } from 'src/app/models/students';

@Component({
  selector: 'app-more-info-inscriptions',
  templateUrl: './more-info-inscriptions.component.html',
  styleUrls: ['./more-info-inscriptions.component.css']
})
export class MoreInfoInscriptionsComponent implements OnInit {
  curso! : Course
  alumnos: any;

  constructor(
    private cursoService: CourseService,
    private dialogRef: MatDialogRef<MoreInfoInscriptionsComponent>,
    @Inject(MAT_DIALOG_DATA) private course: Course
  ) { }

  ngOnInit(): void {
    this.curso = this.course
    this.alumnos = this.course.Students
  }

}
