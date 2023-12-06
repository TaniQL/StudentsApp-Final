import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Course } from 'src/app/models/courses';
import { CourseService } from 'src/app/core/services/course.service';
import { CourseEditComponent } from '../course-edit/course-edit.component';
import { MoreInfoFormComponent } from '../more-info-form/more-info-form.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'category', 'profesor', 'action'];
  courses: Course[]=[]
  @ViewChild(MatTable) tabla!: MatTable<any>;
  isAdmin = false;
  userObject!: any
  
  constructor(
    public dialog: MatDialog,
    private courseService: CourseService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getInfoCourses();
    this.authService.getSesion().subscribe( sesion => {
      if(sesion.auth){
        this.userObject = sesion;
        this.isAdmin = this.userObject.user.admin
    }})
  }

  getInfoCourses() {
    this.courseService.getCourse().subscribe((resp) => {
      this.courses = resp
    })
  }

  deleteCourse(id: string){
    this.courseService.deleteCourse(id).subscribe((course: Course) => {
      alert(`${course.id} - ${course.name} eliminado satisfactoriamente`);
      this.ngOnInit();
    });
  }

  editCourse(course: Course){
    const dialogRef = this.dialog.open(CourseEditComponent, {
      width: '300px',
      data: course
    })
    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        alert(`${course.id} - ${course.name} fue editado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }

  moreInfo(course: Course){
    const dialogRef = this.dialog.open(MoreInfoFormComponent, {
      width: '550px',
      data: course
    })
    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        // alert(`${course.id} - ${course.name} fue editado satisfactoriamente`);
        this.ngOnInit();
      }
    })
  }
}
