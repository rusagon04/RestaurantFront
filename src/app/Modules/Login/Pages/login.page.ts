import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapLoginPostRequest, UserDto } from 'src/app/Core/Microservices/Security/Models/User/user.dto';
import { UserRequestLogin } from 'src/app/Core/Microservices/Security/Models/User/user.request';
import { UserResponse } from 'src/app/Core/Microservices/Security/Models/User/user.response';
import { UserService } from 'src/app/Core/Microservices/Security/Services/User/user.service';
import { SessionService } from 'src/app/Core/Services/Session/session.service';
import { ErrorMessageService } from 'src/app/Dialogs/error-message/error-message.service';
import { MessageService } from 'src/app/Dialogs/menssage/message.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit{
  
  constructor(
    private router: Router,
    private userService: UserService,
    private messageService: MessageService,
    private errorMessageService: ErrorMessageService,
    private sessionService: SessionService
  )
  {}
  ngOnInit(): void {}

  async Sigin(userDto: UserDto){

    try{

      let userRequestLogin: UserRequestLogin = MapLoginPostRequest(userDto.user, userDto.password);
      const userResponse: UserResponse = await this.userService.Login(userRequestLogin);

      const {result, data, message} = userResponse;

      switch(result){
        case"N":
          this.messageService.openDialog(message);
          break;
        case"S":
          this.sessionService.setToken(data[0].token);
          this.router.navigate(["/Home"]);
          break;
        default:
          this.messageService.openDialog(message);
          break;
      }

    }catch(error){
      this.errorMessageService.openDialog(error);
    }
  }

}
