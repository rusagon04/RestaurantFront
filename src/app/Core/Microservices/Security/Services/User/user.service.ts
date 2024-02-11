import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequestLogin } from '../../Models/User/user.request';
import { UserResponse } from '../../Models/User/user.response';
import { firstValueFrom } from 'rxjs';
import { BaseUrl } from 'src/app/Core/Utils/base-url';
import { Microservice } from 'src/app/Core/Utils/microservice';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _BaseUrl: string = "";
  private _Microservice: string = Microservice.Security;
  private _Endpoint: string = "User"

  constructor(private Http: HttpClient) {
    this._BaseUrl = BaseUrl(this._Microservice);
   }

  Login(userRequestLogin: UserRequestLogin){
    const url: string = `${this._BaseUrl}${this._Endpoint}/Login`;
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      }),
    };
    
    return firstValueFrom(this.Http.post<UserResponse>(url, userRequestLogin, httpOptions));
  }
}
