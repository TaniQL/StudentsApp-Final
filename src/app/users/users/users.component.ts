import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]=[]

  constructor(private usersSrv: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.usersSrv.getUsers().subscribe((resp) => {
      this.users = resp
    })
  }
}
