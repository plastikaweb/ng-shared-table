import { Component } from '@angular/core';

import { of } from 'rxjs';

import { tableData, tableDefinition } from './table-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  searchResults$ = of(tableData);
  dataTableBuilder$ = of(tableDefinition);

  selectSearchItem(item: any) {
    console.log(item)
  }
}
