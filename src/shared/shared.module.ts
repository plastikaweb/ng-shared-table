import { NgModule } from '@angular/core';

import { DataTableModule } from './components/data-table/data-table.module';

@NgModule({
  imports: [
    DataTableModule
  ],
  exports: [
    DataTableModule
  ]
})
export class SharedModule {}
