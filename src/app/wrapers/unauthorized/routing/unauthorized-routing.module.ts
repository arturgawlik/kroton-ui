import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizedComponent } from '../unauthorized.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome' },
  {
    path: '', component: UnauthorizedComponent, children: [
      { path: 'welcome', loadChildren: () => import('../../../pages/welcome/welcome.module').then(m => m.WelcomeModule), data: { animation: 1 } },
      { path: 'login', loadChildren: () => import('../../../pages/login/login.module').then(m => m.LoginModule), data: { animation: 2 } },
      { path: 'register', loadChildren: () => import('../../../pages/register/register.module').then(m => m.RegisterModule), data: { animation: 3 } },
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
