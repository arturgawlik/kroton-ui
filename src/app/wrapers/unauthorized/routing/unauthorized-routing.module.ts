import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizedComponent } from '../unauthorized.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome' },
  {
    path: '', component: UnauthorizedComponent, children: [
      { path: 'welcome', loadChildren: () => import('../../../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'login', loadChildren: () => import('../../../pages/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('../../../pages/register/register.module').then(m => m.RegisterModule) },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class UnAuthorizedRoutingModule { }
