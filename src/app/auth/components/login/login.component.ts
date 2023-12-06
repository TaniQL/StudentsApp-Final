import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    user: new FormControl('Gabe.Carroll20', [Validators.required]),
    password: new FormControl('mZuUmQvcCGtK38O', [Validators.required]),
    admin: new FormControl(true)
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.formulario){
      const user: User = {
        user: this.formulario.value.user,
        password: this.formulario.value.password,
        admin: this.formulario.value.admin,
        id: '1',
        nationality: this.formulario.value.nationality,
        email: this.formulario.value.email
      }
      this.authService.startSesion(user);
      this.router.navigate(['inicio'])
    }
    
  }

}
