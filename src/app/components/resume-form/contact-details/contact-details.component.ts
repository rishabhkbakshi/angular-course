import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailFormComponent } from '../resume-dialogs/contact-detail-form/contact-detail-form.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contactDetails: any;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog) {
    console.log(this.contactDetails)
  }

  ngOnInit(): void {
  }

  openContactForm() {
    this.matDialog.open(ContactDetailFormComponent, {
      width: '90%',
      height: '90%',
      data: {
        contactDetails: this.contactDetails,
        resumeId: this.resumeId
      },
      // disableClose: true
    })
  }

}
