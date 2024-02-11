import { UserRequestLogin } from "./user.request";

export class UserDto {
    user: string = "";
    password: string = "";
    name: string = "";
    contact: string = "";
    token: string = "";
}

export const MapLoginPostRequest = (user: string, password: string): UserRequestLogin => {
    let userRequestLogin: UserRequestLogin = {
        user: user,
        password: password
    };

    return userRequestLogin;
}
