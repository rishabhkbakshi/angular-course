import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ApiServices } from '../services/api-services.service';

@Injectable()
export class VerificationCompleteGuard implements CanActivate {
  constructor(
    private router: Router,
    private apiService: ApiServices
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.apiService.fetchMe().pipe(filter(data => !!data), map(data => {
      if (data.verified) {
        return true;
      } else {
        this.router.navigate(['verify']);
      }
    }));
  }
}
