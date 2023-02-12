import { DialogModalComponent } from './dialog/dialog-modal/dialog-modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarMsgComponent } from './snackbar/snackbar-msg/snackbar-msg.component';
import { FormFieldInputComponent } from './formField-input/formField-input.component';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { SnackbarComponent } from './snackbar/snackbar.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { DatatableComponent } from './datatable/datatable.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [
    ButtonsIconsComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponent,
    TabsComponent,
    DatepickerComponent,
    SnackbarComponent,
    SnackbarMsgComponent,
    DialogComponent,
    DialogModalComponent,
    DatatableComponent
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    ButtonsIconsComponent,
    FormFieldInputComponent,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    TabsComponent,
    DatepickerComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' }
  ]
})
export class SharedModule { }
