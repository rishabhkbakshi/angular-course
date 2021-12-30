import { Component } from "@angular/core";

@Component({
  selector: 'app-abc-input',
  templateUrl: './abc-input.component.html'
})

export class AbcInputComponent {

  username = '';
  displayName = '';

  getUserName(data: any) {
    this.username = data.target.value;
  }

  setUserName() {
    this.displayName = this.username;
  }
}

