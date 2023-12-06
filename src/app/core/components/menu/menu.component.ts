import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name!: any
  isAdmin = false
  userObject!: any

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getSesion().subscribe( sesion => {
      if(sesion.auth){
        this.userObject = sesion;
        this.name = this.userObject.user.user
        this.isAdmin = this.userObject.user.admin
    }})
  }
  
  endSesion(){
    this.authService.endSesion();
    localStorage.clear();
  }
}
