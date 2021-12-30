import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-and-container',
  templateUrl: './content-and-container-and-template.component.html',
  styleUrls: ['./content-and-container-and-template.component.scss']
})
export class ContentAndContainerComponent implements OnInit {

  x = [1, 2, 3, 4, 5, 6, 7]
  constructor() { }

  firstExample = "Rishabh";

  ngOnInit(): void {
  }

}
