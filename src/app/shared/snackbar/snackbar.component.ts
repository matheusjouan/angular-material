import { SnackbarMsgComponent } from './snackbar-msg/snackbar-msg.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {
  }

  // Podemos trabalhar com Observables

  public openSnackbar() {
    const snackBar = this.snackbar.open('Hello Guys!', 'Close', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    })

    snackBar.afterDismissed().subscribe(_ => console.log('Dismissed'));
  }

  public openSnackbarFromComponent() {
    this.snackbar.openFromComponent(SnackbarMsgComponent, {
      data: 'Hiiiiiiiiiiiiiiiiii',
      horizontalPosition: 'center',
      verticalPosition: 'top',
      // duration: 2000
    });
  }

}
