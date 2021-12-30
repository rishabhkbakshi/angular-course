import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})
export class OnBoardingComponent implements OnInit {
  resume: any;
  isFirstStepCompleted = false;
  isLoader = false;

  constructor(private apiService: ApiServices) { }

  ngOnInit(): void {
    this.apiService.fetchAllResume().subscribe((data: any) => {
      if (data.length) {
        this.resume = data[0];
        this.isFirstStepCompleted = true;
        this.isLoader = false;
      }
    })
  }

}
