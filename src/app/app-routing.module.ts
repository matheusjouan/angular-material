import { DatatableComponent } from './shared/datatable/datatable.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { DatepickerComponent } from './shared/datepicker/datepicker.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { ProgressSpinnerComponent } from './shared/progress-spinner/progress-spinner.component';
import { FormFieldInputComponent } from './shared/formField-input/formField-input.component';
import { ButtonsIconsComponent } from './shared/buttons-icons/buttons-icons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'buttons', component: ButtonsIconsComponent },
  { path: 'form', component: FormFieldInputComponent },
  { path: 'progress', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'table', component: DatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
