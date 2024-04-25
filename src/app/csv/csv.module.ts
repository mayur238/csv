import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FormComponent } from './components/form/form.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { CsvRoutingModule } from './csv-routing.module';
import { CsvComponent } from './components/csv/csv.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataTableComponent,
    FormComponent,
    ActionButtonsComponent,
    CsvComponent,
  ],
  imports: [CommonModule, CsvRoutingModule, FormsModule],
})
export class CsvModule {}
