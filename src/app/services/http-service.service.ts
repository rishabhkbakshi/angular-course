import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { AuthUtils } from '../components/utility/auth-utils';
import { User } from '../models/user.model';
import { AlertService } from './alert-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private static authTokenKey = 'auth_token';

  constructor(private httpClient: HttpClient, private alertService: AlertService, private router: Router, @Inject(PLATFORM_ID) private plateformId: any) { }
  baseUrl: string = 'http://localhost:5000/api';

  get(url: string, paramData?: any): Observable<any> {
    const data = { params: paramData, headers: this.getAuthHeaders() };
    return this.httpClient.get(this.baseUrl + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  post(url: string, body: any, isArrayBuffer = false): Observable<any> {
    const options: any = isArrayBuffer ? {
      headers: this.getAuthHeaders(), responseType: 'arraybuffer',
    } : { headers: this.getAuthHeaders() };
    return this.httpClient.post(this.baseUrl + url, body, options).pipe(catchError(this.errorHandler.bind(this)));
  }

  patch(url: string, body: any): Observable<any> {
    return this.httpClient.patch(this.baseUrl + url, body, { headers: this.getAuthHeaders() }).pipe(catchError(this.errorHandler.bind(this)));
  }

  delete(url: string, body?: any): Observable<any> {
    return this.httpClient.request('delete', this.baseUrl + url,
      { body, headers: this.getAuthHeaders() }).pipe(catchError(this.errorHandler.bind(this)));
  }

  private getAuthHeaders() {
    if (isPlatformBrowser(this.plateformId)) {
      return {
        Authorization: `Bearer ${AuthUtils.getAuthToken()}`
      };
    }
  }

  private errorHandler(response: any) {
    if (response.error.isTrusted === true) {
      this.alertService.error('Please connect to the internet');
    } else {
      if (response.status == 404) {
        this.alertService.error('Error (404): ' + response.message);
      } else if (response.status == 400) {
        this.alertService.error('Error (400): ' + response.message);
      } else if (response.status == 500) {
        this.alertService.error('Error (500): ' + response.message);
      } else if (response.status == 504) {
        this.alertService.error('Error (504): ' + response.message);
      } else if (response.status == 422) {
        this.alertService.error('Error (422): ' + response.message);
      } else {
        this.alertService.error('Error in the request');
      }
    }
    return throwError(response.error);
  }
}
