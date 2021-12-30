import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {

  educationForm: FormGroup;

  monthArray = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  constructor(
    public dialogRef: MatDialogRef<EducationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiServices
  ) {
    console.log(data);
  }


  ngOnInit(): void {
    const schoolName = this.data.education ? this.data.education.school_name : null;
    const city = this.data.education ? this.data.education.city : null;
    const state = this.data.education ? this.data.education.state : null;
    const field = this.data.education ? this.data.education.field : null;
    const degreeType = this.data.education ? this.data.education.degree_type : null;
    const graduationMonth = this.data.education ? this.data.education.graduation_month : null;
    const graduationYear = this.data.education ? this.data.education.graduation_year : null;
    const percentage = this.data.education ? this.data.education.percentage : null;
    this.educationForm = new FormGroup({
      school_name: new FormControl(schoolName, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      field: new FormControl(field, [Validators.required]),
      degree_type: new FormControl(degreeType, [Validators.required]),
      graduation_month: new FormControl(graduationMonth, [Validators.required]),
      graduation_year: new FormControl(graduationYear, [Validators.required]),
      percentage: new FormControl(percentage, [Validators.required]),
    });
  }

  save() {
    if (this.educationForm.valid) {
      const addObserver$ = this.apiService.addEducation(this.educationForm.value, this.data.resumeId);
      addObserver$.subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }

  update() {
    if (this.educationForm.valid) {
      const updateObserver$ = this.apiService.updateEducation(this.educationForm.value, this.data.education._id);
      updateObserver$.subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }

}
