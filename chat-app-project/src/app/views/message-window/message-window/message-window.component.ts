import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-window',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-window.component.html',
  styleUrl: './message-window.component.scss'
})
export class MessageWindowComponent {
messageText: string = ''
// messages: string[] = [];
@Output() messageSend = new EventEmitter<string>();

sendMessage(){
   if (this.messageText.trim()) {
      this.messageSend.emit(this.messageText); 
      this.messageText = '';                 
    }
    // console.log(this.messages);
    
}
}
