import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-compo',
  templateUrl: './input-compo.component.html',
  styleUrls: ['./input-compo.component.scss']
})
export class InputCompoComponent implements OnInit, DoCheck {

  selectedValue = 'all';
  dd: any;
  @Input() title: any;
  @Input() desc: any;
  @Input() url: any;
  @Input() loadDD: any;
  @Output() editVideo = new EventEmitter<any>();
  @Output() onDDChange = new EventEmitter<any>();

  constructor() {
    console.log('----Constructor----');
  }

  ngOnInit(): void {
    console.log('----ngOnInit----');
  }

  ngOnChanges() {
    console.log('----OnChange----');
  }

  ngDoCheck() {
    console.log('----ngDoCheck----');
  }

  onEditVideo() {
    this.editVideo.emit(this.title);
  }

  onChange() {
    this.onDDChange.emit(this.dd);
  }

}
