import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formField-input',
  templateUrl: './formField-input.component.html',
  styleUrls: ['./formField-input.component.css']
})
export class FormFieldInputComponent implements OnInit {

  fieldName: string = '';

  constructor() { }

  ngOnInit() {
  }

}
