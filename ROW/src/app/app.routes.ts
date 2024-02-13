import { Routes } from '@angular/router';
import { LoginComponent } from './Modules/Auth/Login/Login.component';
import { RegisterComponent } from './Modules/Auth/register/register.component';
import { authGuard } from './Modules/Auth/auth.guard';

export const routes: Routes = [
   { 
    path: 'login',
    component: LoginComponent
   },
   { 
   path: 'register',
   component: RegisterComponent 
   },
   {
      path: 'dashboard',
      loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m=>m.DashboardModule),
      canMatch: [authGuard]
  },
  {
   path: '**',
   component: LoginComponent
  }
];
