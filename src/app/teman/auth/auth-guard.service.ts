import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
        .then((authenticated: boolean) => {
            console.log(" authenticated "+authenticated)
            if(authenticated) {
                return true;
            } else {
                this.router.navigate(['/home']);
            }
        })
    }

  

}
