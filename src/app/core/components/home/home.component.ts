import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userObject!: any
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getSesion().subscribe( sesion => {
      if(!sesion.auth){
        this.router.navigate(['auth/login'])
      } else {
        this.userObject = sesion;
        sessionStorage.setItem('Nombre', this.userObject.user.user)
      }
    })
  }

}
