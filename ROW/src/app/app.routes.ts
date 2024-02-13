import { Routes } from '@angular/router';
import { LoginComponent } from './Modules/Auth/Login/Login.component';
import { RegisterComponent } from './Modules/Auth/register/register.component';

export const routes: Routes = [
   { 
    path: '',
    component: LoginComponent
   },
   { 
   path: 'register',
   component: RegisterComponent 
   }
];
