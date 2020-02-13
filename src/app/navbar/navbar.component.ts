import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  get currentUser() {
    return this.userService.current();
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.currentUser);
  }
}
