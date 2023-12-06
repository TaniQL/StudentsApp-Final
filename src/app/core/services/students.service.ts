import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from 'src/app/models/students';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(`${this.api}/students`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  };

  newCourse(students: Students) {
    return this.http.post<Students>(`${this.api}/students`, students);
  }

  editStudent(students: Students) {
    return this.http.put<Students>(`${this.api}/students/${students.id}`, students)
  }

  deleteStudent(id: string) {
    return this.http.delete<Students>(`${this.api}/students/${id}`)
  }


}
