import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faCircleExclamation, faRoadCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.dialog.html',
  styleUrls: ['./confirm-message.dialog.scss']
})
export class ConfirmMessageDialog implements OnInit{
  
  @Input()dialogMsg: string = "";

  get CheckIcon(): IconDefinition {
    return faCircleCheck;
  }
  
  ngOnInit(): void {}

}