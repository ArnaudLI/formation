import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';


import { AuthService } from './../auth/auth.service'



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {







  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.authService.isAuth) {
      console.log('j\'ai le droit de me connecter')
      return true
    } else {
      console.log('je n\'ai pas le droit')
      this.router.navigate(['auth'])
    }
  }

  constructor(private authService: AuthService, private router: Router) { }
}
