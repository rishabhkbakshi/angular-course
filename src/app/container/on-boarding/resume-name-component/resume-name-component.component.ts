import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-resume-name-component',
  templateUrl: './resume-name-component.component.html',
  styleUrls: ['./resume-name-component.component.scss']
})
export class ResumeNameComponentComponent implements OnInit {
  resumeForm: FormGroup
  isLoader = false;
  @Input() isCompleted = false;

  constructor(private apiService: ApiServices) { }

  ngOnInit(): void {
    this.resumeForm = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
  }

  createResume() {
    this.isLoader = true;
    if (this.resumeForm.valid) {
      this.apiService.saveResume(this.resumeForm.value).subscribe((data) => {
        if (data) {
          this.isCompleted = true;
          this.isLoader = false;
        }
      }, (error) => {
        this.isLoader = false;
      });
    }

  }

}
