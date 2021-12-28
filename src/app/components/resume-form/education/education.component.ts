import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiServices } from 'src/app/services/api-services.service';
import { EducationFormComponent } from '../resume-dialogs/education-form/education-form.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() resumeId: string;
  @Input() educations: any;

  constructor(private matDialog: MatDialog,
    private apiService: ApiServices,
    private toastr: ToastrService) { }

  displayedColumns: string[] = ['school_name', 'month-year', 'city-state', 'field-degree', 'percentage', 'action'];

  ngOnInit(): void {
  }

  add() {
    this.matDialog.open(EducationFormComponent, {
      width: '90%',
      height: '90%',
      data: {
        educations: this.educations,
        resumeId: this.resumeId
      },
      // disableClose: true
    })
  }

  update(education: any) {
    this.matDialog.open(EducationFormComponent, {
      width: '90%',
      height: '90%',
      data: {
        education: education
      },
      // disableClose: true
    })
  }

  delete(educationId: string) {
    this.apiService.deleteEducation(educationId).subscribe((data) => {
      this.toastr.success('Education deleted sucessfully');
    })
  }
}
