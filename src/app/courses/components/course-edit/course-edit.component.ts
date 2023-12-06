import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/models/courses';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  formCourse!: FormGroup
  constructor(
    private cursoService: CourseService,
    private dialogRef: MatDialogRef<CourseEditComponent>,
    @Inject(MAT_DIALOG_DATA) private course: Course
  ) { }

  ngOnInit(): void {
    this.formCourse = new FormGroup({
      name: new FormControl(this.course.name),
      dateStart: new FormControl(this.course.dateStart),
      dateEnd: new FormControl(this.course.dateEnd),
      teacher: new FormControl(this.course.teacher),
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  editCourse(){
    const c: Course = {
      id: this.course.id,
      name: this.formCourse.value.name,
      dateStart: this.formCourse.value.dateStart,
      dateEnd: this.formCourse.value.dateEnd,
      teacher: this.formCourse.value.teacher,
    }
    this.cursoService.editCourse(c).subscribe((curso: Course) => {
      this.dialogRef.close(curso);
    });
  }
}
