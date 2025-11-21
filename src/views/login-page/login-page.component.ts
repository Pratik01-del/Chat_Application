import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxIntlTelInputModule, SearchCountryField  } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatDialogModule,  NgxIntlTelInputModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
SearchCountryField = SearchCountryField; 
}
