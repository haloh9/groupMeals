import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  routerSubscription;
  get user() {
    return this.userService.current();
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerSubscription = this.activatedRoute.url.subscribe(value => {
      if (value[0].path === 'profil' && !this.user) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
