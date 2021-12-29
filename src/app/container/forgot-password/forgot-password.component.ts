import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert-service.service';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  isLoader: boolean = false;
  hidePasswordFields: boolean = false;

  constructor(
    private apiService: ApiServices,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      code: new FormControl(null, []),
      new_password: new FormControl(null, []),
      confirm_password: new FormControl(null, []),
    });
  }

  sendEmail() {
    if (this.forgotPasswordForm.valid) {
      this.isLoader = true;
      this.apiService.sendResetPasswordEmail(this.forgotPasswordForm.value).subscribe((response) => {
        this.hidePasswordFields = true;
        this.forgotPasswordForm.controls["code"].setValidators([Validators.required]);
        this.forgotPasswordForm.controls["new_password"].setValidators([Validators.required]);
        this.forgotPasswordForm.controls["confirm_password"].setValidators([Validators.required]);
        this.alertService.success('Email is sent sucessfully to this => ' + this.forgotPasswordForm.get('email')?.value);
        this.isLoader = false;
      }, (error) => {
        this.alertService.error(error.message);
        this.isLoader = false;
      })
    }
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  changePassword() {
    if (this.forgotPasswordForm.valid) {
      this.isLoader = true;
      this.apiService.resetPassword(this.forgotPasswordForm.value).subscribe((response) => {
        this.alertService.success('Password reset sucessfully');
        this.goToLogin();
        this.isLoader = false;
      }, (error) => {
        this.alertService.error(error.message);
        this.isLoader = false;
      })
    }
  }

}
