import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './components/learning-concepts/abc/abc.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { SignUpComponent } from './container/signup/signup.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AuthGuard } from './guards/auth.guard';
import { AnonGuard } from './guards/anon.guard';
import { OnBoardingComponent } from './container/on-boarding/on-boarding.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerificationInCompleteGuard } from './guards/verification-incomplete.guard';
import { VerificationCompleteGuard } from './guards/verification-complete.guard';
import { OnBoardingInCompleteGuard } from './guards/onboarding-incomplete.guard';
import { OnBoardingCompleteGuard } from './guards/onboarding-complete.guard';
import { LogoutComponent } from './container/logout/logout.component';
import { NotFoundComponent } from './container/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', canActivate: [AnonGuard], children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: '', component: LoginComponent }
    ]
  }, {
    path: '', canActivate: [AuthGuard, VerificationInCompleteGuard], children: [
      { path: 'verify', component: VerificationComponent }
    ]
  }, {
    path: '', canActivate: [AuthGuard, VerificationCompleteGuard, OnBoardingInCompleteGuard], children: [
      { path: 'on-boarding', component: OnBoardingComponent }
    ]
  }, {
    path: '', canActivate: [AuthGuard,  VerificationCompleteGuard, OnBoardingCompleteGuard], children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }, {
    path: 'logout', component: LogoutComponent
  }
  , {
    path: '**', component: NotFoundComponent
  }
  , { path: 'kak', component: AbcComponent }
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
