import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AuthService } from 'src/app/core/services/auth.service';
import { CourseService } from 'src/app/core/services/course.service';
import { StudentsService } from 'src/app/core/services/students.service';
import { Students } from 'src/app/models/students';
import { MoreInfoStudentsComponent } from '../more-info-students/more-info-students.component';
import { StudentEditComponent } from '../student-edit/student-edit.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'profesor', 'action'];
  students: Students[]=[]
  @ViewChild(MatTable) tabla!: MatTable<any>;
  isAdmin = false;
  userObject!: any

  constructor(
    public dialog: MatDialog,
    private studentService: StudentsService,
    private courseService: CourseService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getSesion().subscribe( sesion => {
      if(sesion.auth){
        this.userObject = sesion;
        this.isAdmin = this.userObject.user.admin
    }})
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((resp) => {
      this.students = resp
    })
  }

  deleteStudent(id: string){
    this.studentService.deleteStudent(id).subscribe((student: Students) => {
      alert(`${student.id} - ${student.firstName} ${student.lastName} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }

  editStudent(student: Students){
    const dialogRef = this.dialog.open(StudentEditComponent, {
      width: '300px',
      data: student
    })
    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        alert(`${student.id} - ${student.firstName} ${student.lastName}fue editado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }

  moreInfoStudents(student: Students){
    const dialogRef = this.dialog.open(MoreInfoStudentsComponent, {
      width: '500px',
      data: student
    })
    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        this.ngOnInit();
      }
    })
  }

}
