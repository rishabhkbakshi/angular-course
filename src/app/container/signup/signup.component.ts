import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert-service.service';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isLoader: boolean = false;

  constructor(
    private apiService: ApiServices,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirm_password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      job_category: new FormControl(null, Validators.required),
      experience_level: new FormControl(null, Validators.required)
    });
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      this.isLoader = true;
      this.apiService.signup(this.signUpForm.value).subscribe((response) => {
        this.alertService.success('user is created sucessfully');
        this.isLoader = false;
        this.router.navigate(['']);
      }, (error) => {
        this.alertService.error(error.message);
        this.isLoader = false;
      })
    }
  }

  goToLogin() {
    this.router.navigate(['']);
  }
}
