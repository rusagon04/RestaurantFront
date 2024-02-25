import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor{
  
  _ClassInput: string = "form-control shadow bg-body rounded";
  _PlaceHolder: string = "";
  _Label: string = "";
  _Type: string = "text";
  _CurrentValue: string | number = "";
  
  onChange = (_: any) => { };
  onTouch = () => { };

  @Input("ClassInput")
  set ClassInput(classInput: string){
    this._ClassInput = classInput ? classInput : "form-control shadow bg-body rounded";
  }

  @Input("PlaceHolder")
  set PlaceHolder(placeHolder: string){
    this._PlaceHolder = placeHolder ? placeHolder : "";
  }

  @Input("Label")
  set Label(label: string){
    this._Label = label ? label : "";
  }

  @Input("Type")
  set Type(type: string){
    this._Type = type ? type : "text";
  }
  
  get ClassInput(){
    return this._ClassInput;
  }

  get PlaceHolder(){
    return this._PlaceHolder;
  }

  get Label(){
    return this._Label;
  }

  get Type(){
    return this._Type;
  }

  get CurrentValue(){
    return this._CurrentValue;
  }

  constructor() {}


  ngOnInit(): void { }

  ChangeValue(e: any) {
    this._CurrentValue = e.target.value;
    this.onTouch();
    this.onChange(this._CurrentValue);
  }

  writeValue(value: string | number): void {
    this._CurrentValue = value ? value : "";
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
