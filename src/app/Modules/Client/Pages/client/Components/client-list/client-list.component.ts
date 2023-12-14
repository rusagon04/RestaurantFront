import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ClientDto } from 'src/app/Core/Microservices/Restaurant/Models/Client/client.dto';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit{

  private _Clients: ClientDto[] = [];

  @Output("SelectClient")
    selectClient: EventEmitter<ClientDto> = new EventEmitter()
    
  @Output("DeleteClient")
    deleteClient: EventEmitter<string> = new EventEmitter()

  @Input("Clients")
  set Clients(clients: ClientDto[]){
    this._Clients = clients ? clients : [];
  }

  get Clients() {
    return this._Clients;
  }

  get Icon(): IconDefinition{
    return faTrashCan;
  }

  constructor(){}
  
  ngOnInit(): void {}

  ClickClient(client: ClientDto){
    this.selectClient.emit(client);
  }

  DeleteClient(codclient: string){
    this.deleteClient.emit(codclient);
  }

}
