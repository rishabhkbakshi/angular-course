import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-verify',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  email: string = '';
  constructor(private activeRoute: ActivatedRoute) {
    const email$ = activeRoute.queryParams.pipe(map((data) => {
      return data.email;
    }))
    email$.subscribe((email) => {
      this.email = email;
    })
  }

  ngOnInit(): void { }
}
