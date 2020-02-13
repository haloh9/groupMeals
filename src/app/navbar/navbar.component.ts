import { Component, OnInit, HostListener } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @HostListener('document:keydown.alt.k')
  setAdmin() {
    if (this.userService.current())
      this.userService.debugSetAdmin();
    console.log('SET ADMIN');
  }
  @HostListener('document:keydown.alt.y')
  setUser() {
    if (this.userService.current())
      this.userService.debugSetUser();
    console.log('SET USER');
  }

  get currentUser() {
    return this.userService.current();
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.currentUser);
  }

  logout() {
    this.userService.logout();
  }
}
