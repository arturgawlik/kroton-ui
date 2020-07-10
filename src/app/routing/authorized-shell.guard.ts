import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedShellGuard implements CanActivateChild {

  constructor(private router: Router, private auth: AngularFireAuth) {
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.user.pipe(
        map(u => {
          if (u) {
            this.router.navigate(['/']);
            return false;
          }
          else {
            return true;
          }
        })
      )
  }
  
}
