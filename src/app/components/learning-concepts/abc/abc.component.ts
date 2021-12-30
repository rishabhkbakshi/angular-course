import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss']
})
export class AbcComponent implements OnInit {

  constructor() { }

  ddData = ['Rishabh', 'Ramesh', 'Raju'];
  name = 'Rishabh';
  id = 10;
  isDisable = false;
  title = 'span';
  Value = '200000';
  messages: any[] = ['Message 1' , 'Message 2', 'Message 0'];
  messageMapping:
    { [k: string]: string } = { '=0': 'No messages.', '=1': 'One message.', 'other': '# messages.' };

  ngOnInit(): void {
  }

  getUserName() {
    return this.name;
  }

  enableButton() {
    this.isDisable = !this.isDisable;
  }

  changeTheSpan() {
    this.isDisable = !this.isDisable;
    if (this.name == 'Rishabh') {
      this.name = 'Bakshi';
    } else {
      this.name = 'Rishabh';
    }

  }

  onEditVideo(title: any) {
    console.log(title);
    console.log('on edit video called');
  }

  onChange(dd: any) {
    console.log(dd);
  }

}
