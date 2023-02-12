import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: '500px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
      data: 'Bazinga',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Obtem alguma info passada no fechamento da modal "result"
      console.log(result)
    });
  }
}

/**
 * O retorno podemos capturar o evento
 * retorna a referência do dialog aberto
 *
 * o result retorna o que foi definido no método close() quando fecha a modal
 *
 */
