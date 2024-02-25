import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/Core/Microservices/Security/Models/User/user.dto';

@Component({
  selector: 'app-login-current',
  templateUrl: './login-current.component.html',
  styleUrls: ['./login-current.component.scss']
})
export class LoginCurrentComponent implements OnInit {
  
  @Output("Sigin")
    sigin: EventEmitter<UserDto> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  Sigin(user: UserDto){
    this.sigin.emit(user);
  }
}
