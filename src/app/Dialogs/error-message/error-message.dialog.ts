import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.dialog.html',
  styleUrls: ['./error-message.dialog.scss']
})
export class ErrorMessageDialog implements OnInit{
  
  @Input()dialogMsg: string = "";

  get XIcon(): IconDefinition {
    return faCircleXmark;
  }
  
  ngOnInit(): void {}

}