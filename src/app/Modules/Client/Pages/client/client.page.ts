import { Component, OnInit } from '@angular/core';
import { ClientDto, MapDtoToClientPostRequest, MapDtoToClientPutRequest } from 'src/app/Core/Microservices/Restaurant/Models/Client/client.dto';
import { ClientRequestPost, ClientRequestPut } from 'src/app/Core/Microservices/Restaurant/Models/Client/client.request';
import { ClientResponse } from 'src/app/Core/Microservices/Restaurant/Models/Client/client.response';
import { ClientService } from 'src/app/Core/Microservices/Restaurant/Services/Client/client.service';
import { ConfirmMessageService } from 'src/app/Dialogs/confirm-message/confirm-message.service';
import { ErrorMessageService } from 'src/app/Dialogs/error-message/error-message.service';
import { MessageService } from 'src/app/Dialogs/menssage/message.service';

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
    private clientService: ClientService,
    private messageService: MessageService,
    private confirmMessageService: ConfirmMessageService,
    private errorMessageService: ErrorMessageService
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
          this.messageService.openDialog(message);
          break;
        case"S":
          this._CLients = data;
          break;
        default:
          this.messageService.openDialog(message);
          break;
      }

    }catch(error){
      this.errorMessageService.openDialog(error);
    }
  }

  async SaveClient(clientDto: ClientDto){
    try{
      
      let clientRequest: ClientRequestPost = MapDtoToClientPostRequest(clientDto);
      const clientResponse: ClientResponse = await this.clientService.Post(clientRequest);

      const {result, message} = clientResponse;

      switch(result){
        case"N":
          this.messageService.openDialog(message);
          break;
        case"S":
          this.confirmMessageService.openDialog("Cliente registrado con exito");
          this.SearchClient();
          break;
        default:
          this.messageService.openDialog(message);
          break
      }

    }catch(error){
      this.errorMessageService.openDialog(error);
    }
  }

  async UpdateClient(clientDto: ClientDto){
    try{
      
      let clientRequest: ClientRequestPut = MapDtoToClientPutRequest(clientDto);
      const clientResponse: ClientResponse = await this.clientService.Put(this._CLient.codclient, clientRequest);

      const {result, message} = clientResponse;

      switch(result){
        case"N":
          this.messageService.openDialog(message);
          break;
        case"S":
          this.confirmMessageService.openDialog("Cliente modificado con exito");
          this.SearchClient();
          break;
        default:
          this.messageService.openDialog(message);
          break
      }

    }catch(error){
      this.errorMessageService.openDialog(error);
    }
  }

  async DeleteClient(codclient: string){
    try{

      const clientResponse: ClientResponse = await this.clientService.Delete(codclient);
      const {result, message} = clientResponse;
      
      switch(result){
        case"N":
          this.messageService.openDialog(message);
          break;
        case"S":
          this.confirmMessageService.openDialog("Cliente eliminado con exito");
          this.SearchClient();
          
          if(codclient === this._CLient.codclient){
            this.New();
          }

          break;
        default:
          this.messageService.openDialog(message);
          break
      }

    }catch(error){
      this.errorMessageService.openDialog(error);
    }
  }

  SelectCLient(client: ClientDto){
    this._CLient = client;
  }

  New(){
    this._CLient = new ClientDto();
  }

}