import { Component, Inject, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menssage.dialog',
  templateUrl: './message.dialog.html',
  styleUrls: ['./message.dialog.scss']
})
export class MessageDialog implements OnInit{
  
  @Input()dialogMsg: string = "";

  get ExclamationIcon(): IconDefinition {
    return faCircleExclamation;
  }
  
  ngOnInit(): void {}

}
