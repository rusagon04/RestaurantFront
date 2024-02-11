import { UserDto } from "./user.dto";

export class UserResponse {
  result: string = "";
  message: string = "";
  data: UserDto[] = [];
}
