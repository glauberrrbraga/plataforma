import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { NgxAuthComponent } from './auth.component';
import { NgxLoginComponent } from './login/login.component';
import { NgxLogoutComponent } from './logout/logout.component';
import { NgxRegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: NgxAuthComponent,
    children: [
      {
        path: 'register',
        component: NgxRegisterComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'register' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {}
