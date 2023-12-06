import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from 'src/app/core/services/students.service';
import { Students } from 'src/app/models/students';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  formStudent!: FormGroup
  constructor(
    private studentsService: StudentsService,
    private dialogRef: MatDialogRef<StudentEditComponent>,
    @Inject(MAT_DIALOG_DATA) private students: Students
  ) { }

  ngOnInit(): void {
    this.formStudent = new FormGroup({
      firstName: new FormControl(this.students.firstName),
      lastName: new FormControl(this.students.lastName),
      email: new FormControl(this.students.email),
      status: new FormControl(this.students.status),
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  editStudent(){
    const s: Students = {
      id: this.students.id,
      firstName: this.formStudent.value.firstName,
      lastName: this.formStudent.value.lastName,
      status: this.formStudent.value.status,
      email: this.formStudent.value.teacher,
    }
    this.studentsService.editStudent(s).subscribe((students: Students) => {
      this.dialogRef.close(students);
    });
  }
}
