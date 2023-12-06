import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { Auth } from './models/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
sesion$!: Observable<Auth>;

constructor(
  private authService: AuthService
){}

ngOnInit(){
  this.sesion$ = this.authService.getSesion();
}

endSesion(){
  this.authService.endSesion()
}
}
