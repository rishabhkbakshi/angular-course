import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { AuthUtils } from '../components/utility/auth-utils';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private static authTokenKey = 'auth_token';

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) { }
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
    return {
      Authorization: `Bearer ${AuthUtils.getAuthToken()}`
    };
  }

  private errorHandler(response: any) {
    if (response.error.isTrusted === true) {
      this.toastr.error('Please connect to the internet');
    } else {
      if (response.status == 404) {
        this.toastr.error('Error (404): ' + response.message);
      } else if (response.status == 400) {
        this.toastr.error('Error (400): ' + response.message);
      } else if (response.status == 500) {
        this.toastr.error('Error (500): ' + response.message);
      } else if (response.status == 504) {
        this.toastr.error('Error (504): ' + response.message);
      } else if (response.status == 422) {
        this.toastr.error('Error (422): ' + response.message);
      } else {
        this.toastr.error('Error in the request');
      }
    }
    return throwError(response.error);
  }
}
