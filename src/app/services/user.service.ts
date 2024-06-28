import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user-interface';
import { environment } from 'src/environment/environment';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrlBase}${environment.apiKey}${environment.apiUser}`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user._id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
