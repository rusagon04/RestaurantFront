import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/Core/Microservices/Security/Models/User/user.dto';

@Component({
  selector: 'app-login-current-form',
  templateUrl: './login-current-form.component.html',
  styleUrls: ['./login-current-form.component.scss']
})
export class LoginCurrentFormComponent implements OnInit{
  
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
