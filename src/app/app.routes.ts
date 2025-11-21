import { Routes } from '@angular/router';
import { DashboardComponent } from '../views/main/dashboard/dashboard.component';
import { LoginPageComponent } from '../views/login-page/login-page.component';
import { LandingPageComponent } from '../views/landing-page/landing-page.component';

export const routes: Routes = [

    {
        path: 'login', component: LoginPageComponent
    },
     {
        path: 'dasboard', component: DashboardComponent
     },
     {
        path: '', component: LandingPageComponent
    },

   
];
