import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientDto } from 'src/app/Core/Microservices/Restaurant/Models/Client/client.dto';

@Component({
  selector: 'app-current-client',
  templateUrl: './current-client.component.html',
  styleUrls: ['./current-client.component.scss']
})
export class CurrentClientComponent implements OnInit{

  private _Client: ClientDto =  new ClientDto();

  form: FormGroup = new FormGroup({});

  @Output("Cancel")
    cancel: EventEmitter<void> = new EventEmitter();
  
  @Output("SaveClient")
    saveClient: EventEmitter<ClientDto> = new EventEmitter();

  @Output("UpdateClient")
    updateClient: EventEmitter<ClientDto> = new EventEmitter();

  @Input("Client")
  set Client(client: ClientDto){
    this._Client = client ? client : new ClientDto();
    
    this.form.patchValue(this._Client);
  }

  get Client(): ClientDto {
    return this._Client;
  }

  get FieldCodClient(): FormControl {
    return this.form.get("codclient") as FormControl;
  }

  get FieldDocument(): FormControl {
    return this.form.get("document") as FormControl;
  }

  get FieldTypeDocument(): FormControl {
    return this.form.get("typeDocument") as FormControl;
  }

  get FieldName(): FormControl {
    return this.form.get("name") as FormControl;
  }

  get FieldLastName(): FormControl {
    return this.form.get("lastName") as FormControl;
  }

  get FieldContact(): FormControl {
    return this.form.get("contact") as FormControl;
  }

  get FieldAddress(): FormControl {
    return this.form.get("address") as FormControl;
  }
  
  constructor(private formBuilder: FormBuilder){
    this.FormBuilder();
  }

  ngOnInit(): void {
    
  }

  private FormBuilder() {
    this.form = this.formBuilder.group({
      codclient: [{ value: "", disabled: true }],
      document: ["", [Validators.required]],
      typeDocument: [ "", [Validators.required]],
      name: [ "", [Validators.required]],
      lastName: ["", [Validators.required]],
      contact: ["", [Validators.required]],
      address: ["", [Validators.required]]
    });
  }

  Cancel(){
    this.cancel.emit();
  }

  SaveClient(){
    if(!this.form.valid){
      return;
    }

    this.saveClient.emit(this.form.value);
  }

  UpdateClient(){
    if(!this.form.valid){
      return;
    }

    this.updateClient.emit(this.form.value);
  }
  
}