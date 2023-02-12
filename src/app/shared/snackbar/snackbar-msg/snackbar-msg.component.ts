import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-msg',
  templateUrl: './snackbar-msg.component.html',
  styleUrls: ['./snackbar-msg.component.css']
})
export class SnackbarMsgComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string,
              public matSnackbarRef: MatSnackBarRef<SnackbarMsgComponent>) { }

  ngOnInit() {
  }

  public closeSnackbar() {
    this.matSnackbarRef.dismiss();
  }

}
