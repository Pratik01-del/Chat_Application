import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageWindowComponent } from '../../message-window/message-window/message-window.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, MessageWindowComponent],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent {
messages : string[] = []

onMessageReceived(message: any) {
    this.messages.push(message);
  }
}
