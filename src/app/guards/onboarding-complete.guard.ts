import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ApiServices } from '../services/api-services.service';

@Injectable()
export class OnBoardingCompleteGuard implements CanActivate {
  constructor(private apiService: ApiServices, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const user$ = this.apiService.fetchMe();
    return user$.pipe(filter(data => !!data), map(data => {
      if (data.onboarding === 200) {
        return true;
      } else {
        this.router.navigate(['on-boarding']);
      }
    }));
  }
}
