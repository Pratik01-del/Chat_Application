import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './views/header/app-header/app-header.component';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CHAT_APP';
  // socket = inject(Socket)
}
