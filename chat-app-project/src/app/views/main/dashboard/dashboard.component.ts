import { Component } from '@angular/core';
import { AppHeaderComponent } from '../../header/app-header/app-header.component';
import { MessageWindowComponent } from '../../message-window/message-window/message-window.component';
import { ChatWindowComponent } from '../../chat-window/chat-window/chat-window.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AppHeaderComponent, MessageWindowComponent, ChatWindowComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  user = localStorage.getItem('user')
}
