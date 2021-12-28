import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModuleModule } from './mat-module/mat-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './container/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from './container/signup/signup.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AuthGuard } from './guards/auth.guard';
import { AnonGuard } from './guards/anon.guard';
import { OnBoardingComponent } from './container/on-boarding/on-boarding.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerificationInCompleteGuard } from './guards/verification-incomplete.guard';
import { VerificationCompleteGuard } from './guards/verification-complete.guard';
import { OnBoardingCompleteGuard } from './guards/onboarding-complete.guard';
import { OnBoardingInCompleteGuard } from './guards/onboarding-incomplete.guard';
import { ResumeNameComponentComponent } from './container/on-boarding/resume-name-component/resume-name-component.component';
import { UploadComponent } from './container/tabs/upload/upload.component';
import { UploadImageComponent } from './container/tabs/upload-image/upload-image.component';
import { UploadYoutubeLinkComponent } from './container/tabs/upload-youtube-link/upload-youtube-link.component';
import { LearningConceptsModule } from './components/learning-concepts/learning-concepts.module';
import { ResumeFormComponent } from './container/resume-form-component/resume-form-component.component';
import { ContactDetailsComponent } from './components/resume-form/contact-details/contact-details.component';
import { ContactDetailFormComponent } from './components/resume-form/resume-dialogs/contact-detail-form/contact-detail-form.component';
import { EducationComponent } from './components/resume-form/education/education.component';
import { EducationFormComponent } from './components/resume-form/resume-dialogs/education-form/education-form.component';
import { Truncate } from './pipes/truncate';
import { LogoutComponent } from './container/logout/logout.component';
import { NotFoundComponent } from './container/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    DashboardComponent,
    ResumeNameComponentComponent,
    UploadComponent,
    UploadImageComponent,
    UploadYoutubeLinkComponent,
    ResumeFormComponent,
    ContactDetailsComponent,
    ContactDetailFormComponent,
    EducationComponent,
    EducationFormComponent,
    Truncate,
    LogoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModuleModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    LearningConceptsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      enableHtml: true
    })
  ],
  providers: [
    AuthGuard,
    AnonGuard,
    VerificationInCompleteGuard,
    VerificationCompleteGuard,
    OnBoardingCompleteGuard,
    OnBoardingInCompleteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
