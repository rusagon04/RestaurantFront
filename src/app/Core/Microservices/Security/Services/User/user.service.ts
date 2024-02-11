import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequestLogin } from '../../Models/User/user.request';
import { UserResponse } from '../../Models/User/user.response';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { }

  Login(userRequestLogin: UserRequestLogin){
    const url: string = "http://localhost/RestaurantSecurity/api/User/Login";
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      }),
    };
    
    return firstValueFrom(this.Http.post<UserResponse>(url, userRequestLogin, httpOptions));
  }
}
