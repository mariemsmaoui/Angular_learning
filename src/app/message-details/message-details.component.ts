import { Component ,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent {
//parent to child 
  @Input()
  message:any={};
  @Input()
  index:number =-1;
  //send from child to parent 
  @Output()
  delete :EventEmitter<number>=new EventEmitter<number>();
  update :EventEmitter<number>=new EventEmitter<any>();

  onDelete():void{
this.delete.emit(this.index);

  }
    onUpdate(): void {
      this.update.emit(this.message); // Emit the entire message object to the parent component
    }
}
