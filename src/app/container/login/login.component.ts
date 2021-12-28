import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, takeWhile } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  users: any;
  displayedColumns: string[]
  isLoader: boolean = false;
  isAlive = true;

  myBaheviour = new BehaviorSubject('hello');
  public myObserver: Observable<any>;

  constructor(
    private apiService: ApiServices,
    private toastrSer: ToastrService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
    this.buySugarFromShop();
  }

  ngOnInit(): void {
    const param: any = {
      page: 2
    };
    // this.apiService.getUsers(param).subscribe((response: any) => {
    //   this.displayedColumns = ['id', 'email', 'first_name', 'last_name', 'avatar'];
    //   this.users = response?.data;
    //   console.log(this.users);
    // }, (error) => {
    //   console.log(error.message);
    // })
  }

  ngOnDestroy() {
    this.isAlive = false;
  }


  onLogin() {
    console.log(this.loginForm);

    this.myObserver = new Observable((data) => {
      data.next(this.loginForm.value);
      data.next('hello');
    })

    this.myObserver.subscribe((data) => {
      console.log(data);
    })


    if (this.loginForm.valid && this.loginForm.touched) {
      console.log("called");
    }

    const mapOper = this.loginForm.valueChanges.pipe(map((data) => data.email), debounceTime(500), distinctUntilChanged());
    mapOper.subscribe((data) => {
      console.log(data);
    })

    const filterOper = this.loginForm.valueChanges.pipe(filter((data) => {
      if (data.email == 'rbakshi@astegic.com') {
        return true;
      } else {
        return false;
      }
    }));
    filterOper.subscribe((data) => {
      console.log(data);
    })

    this.myBaheviour.next(this.loginForm.value);
    this.isLoader = true;

    let request$ = this.apiService.loginAndSetToken(this.loginForm.value) as Observable<User>;
    request$.pipe(takeWhile(() => this.isAlive),
      filter(res => !!res)).subscribe((data) => {
        this.isLoader = false;
        this.toastrSer.success('user is logged-in sucessfully');
        this.router.navigate(['verify'], { queryParams: { email: data.email } });
      }, (error) => {
        this.toastrSer.error(error.message);
        this.isLoader = false;
      });
  }

  buySugarInBulk() {
    return new Observable(emitter => {
      emitter.next('Sugar Purchased');
    })
  }

  buySugarInQuantity(quantity: any) {
    return new Observable(emitter => {
      emitter.next('Sugar with Quantity: ' + quantity + ' is here for you');
    })
  }

  buySugarFromShop() {
    // this.buySugarInBulk().subscribe((data) => {
    //   this.buySugarInQuantity('1 KG').subscribe((data) => {
    //     console.log(data);
    //   })
    // })
    const switchMapObser = this.buySugarInBulk().pipe(switchMap((data) => {
      return this.buySugarInQuantity('1 KG');
    }))
    switchMapObser.subscribe((data) => {
      console.log(data);
    })
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
