import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-form-component',
  templateUrl: './resume-form-component.component.html',
  styleUrls: ['./resume-form-component.component.scss']
})
export class ResumeFormComponent implements OnInit {

  @Input() resume: any;

  constructor() { }

  ngOnInit(): void {
  }

}
