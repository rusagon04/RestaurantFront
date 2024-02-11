import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/Core/Microservices/Security/Models/User/user.dto';

@Component({
  selector: 'app-login-current',
  templateUrl: './login-current.component.html',
  styleUrls: ['./login-current.component.scss']
})
export class LoginCurrentComponent {
  
  private userDto: UserDto = new UserDto();
  
  form: FormGroup = new FormGroup({});

  @Output("Sigin")
    sigin: EventEmitter<UserDto> = new EventEmitter();


  get FieldUser(): FormControl {
    return this.form.get("user") as FormControl;
  }
  
  get FieldPassword(): FormControl {
    return this.form.get("password") as FormControl;
  }

  constructor(private formBuilder: FormBuilder){
    this.FormBuilder();
  }

  ngOnInit(): void {
    
  }

  private FormBuilder() {
    this.form = this.formBuilder.group({
      user: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  Sigin(){
    if(!this.form.valid){
      return;
    }

    this.sigin.emit(this.form.value);
  }

}
