import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from '../utils/auth/auth.module';
import { AuthorizedShellGuard, UnAuthorizedShellGuard } from './guards';

const routes: Routes = [
  { path: '', loadChildren: () => import('../wrapers/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule), canActivateChild: [UnAuthorizedShellGuard] },
  { path: '', loadChildren: () => import('../wrapers/authorized/authorized.module').then(m => m.AuthorizedModule), canActivateChild: [AuthorizedShellGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // AuthModule
  ],
  exports: [RouterModule],
  providers: [
    // AuthorizedShellGuard,
    // UnAuthorizedShellGuard
  ]
})
export class AppRoutingModule { }
