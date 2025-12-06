import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
constructor(private dialog: MatDialog){}
  login(){
    const dialogRef = this.dialog.open(LoginPageComponent, {
        // width: '500px',
        // height: '500px',
        // background-color: #6a6dea
        
      // disableClose: true
    });
  }
}
