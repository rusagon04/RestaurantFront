import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.scss']
})
export class ConfirmButtonComponent implements OnInit{
  
  private _ClassButton: string = "btn btn-warning";
  private _LabelButton: string = "";

  @Output("Click")
    click: EventEmitter<void> = new EventEmitter();

  @Input("ClassButton")
    set ClassButton( classButton: string){
      this._ClassButton = classButton ? classButton : "btn btn-warning";
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
