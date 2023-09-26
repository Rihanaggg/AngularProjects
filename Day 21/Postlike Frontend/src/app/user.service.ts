import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

 
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/forum/users');;
  }
}
