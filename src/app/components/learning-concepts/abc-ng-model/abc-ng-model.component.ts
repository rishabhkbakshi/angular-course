import { Component } from "@angular/core";

@Component({
  selector: 'app-abc-ng-model',
  templateUrl: './abc-ng-model.component.html'
})

export class AbcNgInputComponent {

  displayName = '';

  changeName() {
    this.displayName = 'I am a change value';
  }
}

