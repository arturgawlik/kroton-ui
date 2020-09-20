import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedComponent } from '../authorized.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  {
    path: '', component: AuthorizedComponent, children: [
      { path: 'home', loadChildren: () => import('../../../pages/home/home.module').then(m => m.HomeModule) },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AuthorizedRoutingModule { }
