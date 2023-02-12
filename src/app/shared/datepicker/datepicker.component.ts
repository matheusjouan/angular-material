import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as moment from "moment";


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  // startDate = new Date(2023, 2, 28);
  // minDate = new Date(2023, 1, 28);
  // maxDate = new Date(2023, 3, 28);

  // Utilizando o moment (passamos entre colchetes)
  startDate = moment([2023,2,28])
  minDate = moment([2023, 1, 28]);
  maxDate = moment([2023, 3, 28]);

  constructor(private plataform: Platform) { }

  ngOnInit() {
  }

  get isTouchDevice() {
    return this.plataform.ANDROID || this.plataform.IOS;
  }
}
