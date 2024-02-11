import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ClientResponse } from "../../Models/Client/client.response";
import { firstValueFrom } from "rxjs";
import { ClientRequestPost, ClientRequestPut } from "../../Models/Client/client.request";
import { BaseUrl } from "src/app/Core/Utils/base-url";
import { Microservice } from "src/app/Core/Utils/microservice";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _BaseUrl: string = "";
  private _Microservice: string = Microservice.Restaurant;
  private _Endpoint: string = "Client"

  constructor(private Http: HttpClient) { 
    this._BaseUrl = BaseUrl(this._Microservice);
  }

  Get() {
    const url: string = `${this._BaseUrl}${this._Endpoint}`;
    return firstValueFrom(this.Http.get<ClientResponse>(url));
  }

  Post(clientRequestPost: ClientRequestPost) {
    const url: string = `${this._BaseUrl}${this._Endpoint}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      }),
    };
    return firstValueFrom(this.Http.post<ClientResponse>(url,clientRequestPost,httpOptions));
  }

  Put(codclient: string, clientRequestPut: ClientRequestPut) {
    const url: string = `${this._BaseUrl}${this._Endpoint}/${codclient}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      }),
    };
    return firstValueFrom(this.Http.put<ClientResponse>(url,clientRequestPut,httpOptions));
  }

  Delete(codclient: string){
    const url: string = `${this._BaseUrl}${this._Endpoint}/${codclient}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      }),
    };
    return firstValueFrom(this.Http.delete<ClientResponse>(url,httpOptions));
  }
}