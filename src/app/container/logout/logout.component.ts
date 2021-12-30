import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router,
    private apiService: ApiServices) {
    this.apiService.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {

  }

}
