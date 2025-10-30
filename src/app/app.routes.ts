import { Routes } from '@angular/router';
import { DashboardComponent } from '../views/main/dashboard/dashboard.component';
import { LoginPageComponent } from '../views/login-page/login-page.component';

export const routes: Routes = [

    {
        path: '', component: LoginPageComponent
    },

    {
        path: 'dashboard', component: DashboardComponent
    }
];
