import { Component, OnInit, Input } from '@angular/core';
import { UserService, UserRole } from '../../user.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant: any;
  get isAdmin() {
    return this.userService.current() && (this.userService.current().role === UserRole.ADMIN);
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
