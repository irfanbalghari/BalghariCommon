import { Routes } from '@angular/router';
import { LoginComponent } from './Modules/Auth/Login/Login.component';
import { RegisterComponent } from './Modules/Auth/register/register.component';
import { authGuard } from './Modules/Auth/auth.guard';
import { ContactUsComponent } from './Modules/communication/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'contactus', component: ContactUsComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canMatch: [authGuard],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
