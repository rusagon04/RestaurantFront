import { ClientDto } from "./client.dto";

export class ClientResponse {
  result: string = "";
  message: string = "";
  data: ClientDto[] = [];
}
