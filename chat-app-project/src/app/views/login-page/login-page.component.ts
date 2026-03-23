import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { NgxIntlTelInputModule, SearchCountryField  } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatDialogModule,  NgxIntlTelInputModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  constructor(
    private route: Router,
    private dialogRef: MatDialogRef<LoginPageComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  
  ){}

isVerify: boolean = false
isNewUser: boolean = false
// searchFields = [SearchCountryField.Name, SearchCountryField.DialCode]; 
separateDialCode = true;
placeholderTxt = "Enter mobile number";
username = new FormControl('');
password = new FormControl('');
confirmPwd = new FormControl('');

ngOnInit(): void {
  console.log(this.dialogData);
  
}

login(){
  // this.isVerify = true
}
getData(){
  console.log('asdasdansah');
  
}
// verifyOtp(type: string){
//   if(type === 'old'){
//   this.route.navigate(['dashboard'])
//   console.log('working');
//   this.dialogRef.close()
//   }else{
//     this.isNewUser = true
//   }
// }

register(){
  localStorage.setItem('user', this.username.value ?? '')
  this.route.navigate(['dashboard'])
  console.log('working');
  this.dialogRef.close()
}
}
