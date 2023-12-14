import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ClientResponse } from "../../Models/Client/client.response";
import { firstValueFrom } from "rxjs";
import { ClientRequestPost, ClientRequestPut } from "../../Models/Client/client.request";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private Http: HttpClient) { }

  Get() {
    const url: string = `http://localhost/RestaurantApi/api/Client`;
    return firstValueFrom(this.Http.get<ClientResponse>(url));
  }

  Post(clientRequestPost: ClientRequestPost) {
    const url: string = `http://localhost/RestaurantApi/api/Client`;
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      }),
    };
    return firstValueFrom(this.Http.post<ClientResponse>(url,clientRequestPost,httpOptions));
  }

  Put(codclient: string, clientRequestPut: ClientRequestPut) {
    const url: string = `http://localhost/RestaurantApi/api/Client/${codclient}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      }),
    };
    return firstValueFrom(this.Http.put<ClientResponse>(url,clientRequestPut,httpOptions));
  }

  Delete(codclient: string){
    const url: string = `http://localhost/RestaurantApi/api/Client/${codclient}`;
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
      }),
    };
    return firstValueFrom(this.Http.delete<ClientResponse>(url,httpOptions));
  }
}