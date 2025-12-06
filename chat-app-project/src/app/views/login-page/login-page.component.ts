import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { NgxIntlTelInputModule, SearchCountryField  } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatDialogModule,  NgxIntlTelInputModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
isVerify: boolean = false
searchFields = [SearchCountryField.Name, SearchCountryField.DialCode]; 
separateDialCode = true;
placeholderTxt = "Enter mobile number";

constructor(
  private route: Router,
  private dialogRef: MatDialogRef<LoginPageComponent>
){}

getUser(){
  this.isVerify = true
}
getData(){
  console.log('asdasdansah');
  
}
verifyOtp(){
  this.route.navigate(['dashboard'])
  console.log('working');
  this.dialogRef.close()
  
}
}
