import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTableComponent } from './data-table.component';

@NgModule({
  imports: [CommonModule, NgxDatatableModule, FlexLayoutModule, MatIconModule, MatTooltipModule],
  declarations: [
    DataTableComponent
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule {
}
