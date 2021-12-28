import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-contact-detail-form',
  templateUrl: './contact-detail-form.component.html',
  styleUrls: ['./contact-detail-form.component.scss']
})

export class ContactDetailFormComponent implements OnInit {

  contactDetailForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ContactDetailFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiServices
  ) {

    console.log(data);
  }

  ngOnInit(): void {

    const first_name = this.data.contactDetails ? this.data.contactDetails.first_name : null;
    const last_name = this.data.contactDetails ? this.data.contactDetails.last_name : null;
    const phone_number = this.data.contactDetails ? this.data.contactDetails.phone_number : null;
    const linkedin_url = this.data.contactDetails ? this.data.contactDetails.linkedin_url : null;
    const website_url = this.data.contactDetails ? this.data.contactDetails.website_url : null;
    const email = this.data.contactDetails ? this.data.contactDetails.email : null;
    const address = this.data.contactDetails ? this.data.contactDetails.address : null;
    const city = this.data.contactDetails ? this.data.contactDetails.city : null;
    const state = this.data.contactDetails ? this.data.contactDetails.state : null;
    const zip_code = this.data.contactDetails ? this.data.contactDetails.zip_code : null;
    const country = this.data.contactDetails ? this.data.contactDetails.country : null;
    const summary = this.data.contactDetails ? this.data.contactDetails.summary : null;

    this.contactDetailForm = new FormGroup({
      first_name: new FormControl(first_name, Validators.required),
      last_name: new FormControl(last_name, Validators.required),
      phone_number: new FormControl(phone_number, Validators.required),
      linkedin_url: new FormControl(linkedin_url),
      website_url: new FormControl(website_url),
      email: new FormControl(email, [Validators.required, Validators.email]),
      address: new FormControl(address, Validators.required),
      city: new FormControl(city, Validators.required),
      state: new FormControl(state, Validators.required),
      zip_code: new FormControl(zip_code, Validators.required),
      country: new FormControl(country, Validators.required),
      summary: new FormControl(summary, Validators.required)
    })
  }

  save() {
    if (this.contactDetailForm.valid) {
      const addObsvr$ = this.apiService.addContactDetails(this.contactDetailForm.value, this.data.resumeId);
      addObsvr$.subscribe((data) => {
        this.dialogRef.close();
      })
    }
  }

  update() {
    console.log(this.contactDetailForm.get('email'))
    if (this.contactDetailForm.valid) {
      const updateObsvr$ = this.apiService.updateContactDetails(this.contactDetailForm.value, this.data.contactDetails._id);
      updateObsvr$.subscribe((data) => {
        this.dialogRef.close();
      })
    }
  }
}
