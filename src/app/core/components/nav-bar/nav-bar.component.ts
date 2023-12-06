import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name!: any

  constructor(
  ) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('Nombre');
  }

}
