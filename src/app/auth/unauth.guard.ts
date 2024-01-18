import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getCurrentUser } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor( private _router: Router ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return getCurrentUser()
            .then(() => {
              this._router.navigate(['auth/sign-in']);
              return false;
            })
            .catch(() => {
              return true;
            });
  }
}
