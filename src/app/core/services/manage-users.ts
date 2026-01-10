import { Injectable } from '@angular/core';
import { Environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { UsersResponse } from '../models/users-response';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/user-details';


@Injectable({
  providedIn: 'root',
})
export class ManageUsers {
  readonly BASE_URL = Environment.baseUrl;
  constructor(private _http: HttpClient) {}

  getUsers(page: number, limit: number): Observable<UsersResponse> {
    const skip = (page - 1) * limit
    return this._http.get<UsersResponse>(`${this.BASE_URL}?limit=${limit}&skip=${skip}`);
  }

  getUserById(id: number) : Observable<UserDetails>{
    return this._http.get<UserDetails>(`${this.BASE_URL}/${id}`);
  }

}
