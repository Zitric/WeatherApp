import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styles: []
})
export class DayComponent {

  @Input() dayArray: any[] = [];

  constructor() { }


}
