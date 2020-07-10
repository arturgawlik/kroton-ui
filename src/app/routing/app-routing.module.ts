import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedShellGuard } from './authorized-shell.guard';
import { AuthModule } from '../utils/auth/auth.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'login', loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('../wrapers/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule
  ],
  exports: [RouterModule],
  providers: [
    AuthorizedShellGuard
  ]
})
export class AppRoutingModule { }
