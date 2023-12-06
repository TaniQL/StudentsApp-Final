import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/models/courses';
import { MoreInfoInscriptionsComponent } from '../more-info-inscriptions/more-info-inscriptions.component';

@Component({
  selector: 'app-inscriptions-list',
  templateUrl: './inscriptions-list.component.html',
  styleUrls: ['./inscriptions-list.component.css']
})
export class InscriptionsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'profesor', 'action'];
  courses: Course[]=[]
  @ViewChild(MatTable) tabla!: MatTable<any>;
  constructor(
    public dialog: MatDialog,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getInfoCourses();
  }

  getInfoCourses() {
    this.courseService.getCourse().subscribe((resp) => {
      this.courses = resp
    })
  }

  showStudents(course: Course){
    const dialogRef = this.dialog.open(MoreInfoInscriptionsComponent, {
      width: '1000px',
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
