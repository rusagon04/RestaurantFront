import { ClientRequestPost, ClientRequestPut } from "./client.request";

export class ClientDto {
  codclient: string = "";
  document: string = "";
  typeDocument: string = "";
  name: string = "";
  lastName: string ="";
  contact: string = "";
  address: string = "";
}

export const MapDtoToClientPostRequest = (client: ClientDto): ClientRequestPost => {
  let clientRequestPost: ClientRequestPost = {
    document: client.document,
    typeDocument: client.typeDocument,
    name: client.name ,
    lastName: client.lastName ,
    contact: client.contact ,
    address: client.address ,
    user: ""

  }
  
  return clientRequestPost;
}

export const MapDtoToClientPutRequest = (client: ClientDto): ClientRequestPut => {
  let clientRequestPut: ClientRequestPut = {
    document: client.document,
    typeDocument: client.typeDocument,
    name: client.name ,
    lastName: client.lastName ,
    contact: client.contact ,
    address: client.address ,
    user: ""

  }
  
  return clientRequestPut;
}
