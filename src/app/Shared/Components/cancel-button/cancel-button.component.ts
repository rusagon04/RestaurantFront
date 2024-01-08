import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss']
})
export class CancelButtonComponent implements OnInit{
  
  private _ClassButton: string = "btn btn-danger me-3";
  private _LabelButton: string = "";
  
  @Output("Click")
  click: EventEmitter<void> = new EventEmitter();

  @Input("ClassButton")
  set ClassButton( classButton: string){
    this._ClassButton = classButton ? classButton : "btn btn-danger me-3";
  }

  @Input("LabelButton")
  set LabelButton( labelButton: string){
    this._LabelButton = labelButton ? labelButton : "";
  }

  get ClassButton(){
    return this._ClassButton;
  }

  get LabelButton(){
    return this._LabelButton;
  }
  
  ngOnInit(): void {
  }

  Click(){
    this.click.emit();
  }

}
