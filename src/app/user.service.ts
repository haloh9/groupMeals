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


}
