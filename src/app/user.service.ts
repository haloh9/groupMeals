import { Injectable } from '@angular/core';

export enum UserRole {
  USER,
  ADMIN
}

export interface User {
  username: string;
  password: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() { }

  login(username: string, password: string) {
    return this.user = {
      username,
      password,
      role: UserRole.USER
    };
  }

  logout() {
    this.user = undefined;
  }

  current(): User {
    return this.user;
  }

  debugSetAdmin() {
    this.user.role = UserRole.ADMIN;
  }

  debugSetUser() {
    this.user.role = UserRole.USER;
  }
}
