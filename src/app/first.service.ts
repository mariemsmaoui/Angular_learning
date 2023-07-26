import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  messages: Array<any> = [];
  constructor() {
   this.init();
  }
  init(): void {
    this.insert({
      name: 'John',
      email: 'jhon@gmail.com',
      message: 'heyy john ',
    });
    this.insert({
      name: 'mary',
      email: 'mary@gmail.com',
      message: 'heyy mary',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }
  getAllmessages(): any {
    return this.messages;
  }
  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
 
  }


