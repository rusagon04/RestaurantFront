import { Component, OnInit } from '@angular/core';
import { ClientDto, MapDtoToClientPostRequest, MapDtoToClientPutRequest } from 'src/app/Core/Microservices/Restaurant/Models/Client/client.dto';
import { ClientRequestPost, ClientRequestPut } from 'src/app/Core/Microservices/Restaurant/Models/Client/client.request';
import { ClientResponse } from 'src/app/Core/Microservices/Restaurant/Models/Client/client.response';
import { ClientService } from 'src/app/Core/Microservices/Restaurant/Services/Client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss']
})
export class ClientPage implements OnInit{
  
  private _CLients: ClientDto[] = [];
  private _CLient: ClientDto = new ClientDto();

  get Clients() {
    return this._CLients;
  }
  
  get CLient() {
    return this._CLient;
  }
  
  constructor(
    private clientService: ClientService
  ){}
  
  ngOnInit(): void {
    this.SearchClient();
  }

  async SearchClient() { 
    try{

      const clientResponse: ClientResponse = await this.clientService.Get();
      const {result, message, data} = clientResponse;
      
      switch(result){
        case"N":
          alert(message);
          break;
        case"S":
          this._CLients = data;
          break;
        default:
          alert(message);
          break;
      }

    }catch(error){
      alert(error);
    }
  }

  async SaveClient(clientDto: ClientDto){
    try{
      
      let clientRequest: ClientRequestPost = MapDtoToClientPostRequest(clientDto);
      const clientResponse: ClientResponse = await this.clientService.Post(clientRequest);

      const {result, message} = clientResponse;

      switch(result){
        case"N":
          alert(message);
          break;
        case"S":
          alert(message);
          this.SearchClient();
          break;
        default:
          alert(message);
          break
      }

    }catch(error){
      alert(error);
    }
  }

  async UpdateClient(clientDto: ClientDto){
    try{
      
      let clientRequest: ClientRequestPut = MapDtoToClientPutRequest(clientDto);
      const clientResponse: ClientResponse = await this.clientService.Put(this._CLient.codclient, clientRequest);

      const {result, message} = clientResponse;

      switch(result){
        case"N":
          alert(message);
          break;
        case"S":
          alert(message);
          this.SearchClient();
          break;
        default:
          alert(message);
          break
      }

    }catch(error){
      alert(error);
    }
  }

  async DeleteClient(codclient: string){
    try{

      const clientResponse: ClientResponse = await this.clientService.Delete(codclient);
      const {result, message} = clientResponse;
      
      switch(result){
        case"N":
          alert(message);
          break;
        case"S":
          alert(message);
          this.SearchClient();
          
          if(codclient === this._CLient.codclient){
            this.New();
          }

          break;
        default:
          alert(message);
          break
      }

    }catch(error){
      alert(error);
    }
  }

  SelectCLient(client: ClientDto){
    this._CLient = client;
  }

  New(){
    this._CLient = new ClientDto();
  }

}