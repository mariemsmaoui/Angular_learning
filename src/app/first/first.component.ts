import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  //inject constructor
  constructor(private service: FirstService) {
    this.messages = this.service.getAllmessages();
    this.isSubmitted = this.messages.length > 0;
  }
  onSubmit() {
    //console.log(this.name)
    this.isSubmitted = true;
   // this.messages.push({
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    console.log(this.messages);
  }
  deleteMessage(index: number): void {
   // this.messages.splice(index, 1);
   this.service.deleteMessage(index);
  }
  updateMessage(updatedMessage: any): void {
    const index = this.messages.findIndex((msg) => msg === updatedMessage);
    if (index !== -1) {
      this.messages[index] = updatedMessage;
    }
  }
}
