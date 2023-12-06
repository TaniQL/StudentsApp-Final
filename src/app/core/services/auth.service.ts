import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { Auth } from 'src/app/models/auth';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sesionSubject!: BehaviorSubject<Auth>
  private api: string = environment.api

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const auth: Auth = {
      auth: false
    };
    this.sesionSubject = new BehaviorSubject(auth);
  }

  getSesion() {
    return this.sesionSubject.asObservable();
  }

  startSesion(user: User) {
    this.http.get<User[]>(`${this.api}/users`)
    .pipe(
      map((users: User[]) => {
        return users.filter((u: User) => u.user === user.user && u.password === user.password)[0];
      })
    ).pipe(catchError(this.handleError))
    .subscribe((user: User) => {
      if(user){
        const sesion: Auth = {
          auth: true,
          user: {
            user: user.user,
            password: user.password,
            id: user.id,
            admin: user.admin,
            nationality: user.nationality,
            email: user.email
          }
        };
        this.sesionSubject.next(sesion);
        this.router.navigate(['courses/lista'])
      } else {
        alert('Usuario no encontrado')
      }
    })

  }

  endSesion() {
    const sesion: Auth = {
      auth: false
    };
    this.sesionSubject.next(sesion);
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    } else {
      console.warn('Error del lado del servidor', error.status, error.message)
    }
    return throwError(() => new Error('Error en la comunicacion http'))
  }
}
