import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUtils } from '../components/utility/auth-utils';
import { User } from '../models/user.model';
import { HttpService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  constructor(private httpService: HttpService) { }


  // getUsers(param?: any) {
  //   return this.httpClient.get('https://reqres.in/api/users', { params: param, headers: this.setHeader() })
  //     .pipe(catchError(this.errorHandler.bind(this)));
  // }

  loginAndSetToken(data: { email: string, password: string }): Observable<User> {
    return this.httpService.get('/user/login', data).pipe(map(res => {
      AuthUtils.setAuthToken(res.token);
      return res.user;
    }));
  }

  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.httpService.get('/user/reset/password/email', data);
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<User> {
    return this.httpService.patch('/user/reset/password', data);
  }

  signup(data: {
    email: string, password: string, confirm_password: string,
    name: string, job_category: string, experience_level: string
  }): Observable<User> {
    return this.httpService.post('/user/signup', data);
  }

  fetchMe(): Observable<User> {
    return this.httpService.get('/user/fetch');
  }

  fetchAllResume(): any {
    return this.httpService.get('/resume/all');
  }

  saveResume(data: {
    name: string
  }) {
    return this.httpService.post('/resume/add/resume', data);
  }

  saveOrDelete(image: File, resumeId: string) {
    const formData = new FormData();
    formData.append('profile_image', image);
    return this.httpService.post('/resume/add/image/' + resumeId, formData);
  }

  deleteImage(resumeId: any) {
    return this.httpService.delete('/resume/delete/image/' + resumeId);
  }

  addVideo(resumeId: any, data: {
    video_url: string
  }) {
    return this.httpService.patch('/resume/import/video/' + resumeId, data);
  }

  addContactDetails(data: any, resumeId: string) {
    return this.httpService.post('/resume/add/contactDetails/' + resumeId, data);
  }

  updateContactDetails(data: any, contactDetailId: string) {
    return this.httpService.patch('/resume/update/contactDetails/' + contactDetailId, data);
  }

  addEducation(data: any, resumeId: string) {
    return this.httpService.post('/resume/add/education/' + resumeId, data);
  }

  updateEducation(data: any, educationId: string) {
    return this.httpService.patch('/resume/update/education/' + educationId, data);
  }

  deleteEducation(educationId: string) {
    return this.httpService.delete('/resume/delete/education/' + educationId);
  }

}

