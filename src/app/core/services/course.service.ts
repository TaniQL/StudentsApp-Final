import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/courses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.api}/courses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

  newCourse(course: Course) {
    return this.http.post<Course>(`${this.api}/courses`, course);
  }

  editCourse(course: Course) {
    return this.http.put<Course>(`${this.api}/courses/${course.id}`, course)
  }

  deleteCourse(id: string) {
    return this.http.delete<Course>(`${this.api}/courses/${id}`)
  }

}
