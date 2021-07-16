import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges
} from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { isEqual } from 'lodash';

import { DataTable, DataTableMessages } from './data-table';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements DataTable, OnChanges {
  @Input() data!: any;
  @Input() sorts!: any;
  @Input() schema!: any;
  @Input() loadingIndicator = false;
  @Input() reorderable = true;
  @Input() shadowed = false;
  @Output() selectedRowEmit = new EventEmitter<any>();
  @Output() mouseWheelClickRowEmit = new EventEmitter<any>();
  @Input() columnMode: ColumnMode = ColumnMode.force;
  @Input() headerHeight = 50;
  @Input() footerHeight = 0;
  @Input() rowHeight = 0;
  @Input() scrollbarV = false;
  @Input() scrollbarH = false;
  @Input() selectionType: SelectionType = SelectionType.single;
  @Input() selectableClass = true;
  @Input() isLoadingData = false;
  @Input() messages!: DataTableMessages;
  @Input() selected: any[] = [];
  @Input() rowSelected = -1;
  selectedItem: any;

  ngOnChanges(changes: SimpleChanges) {
    if (this.rowSelected > -1 && changes.data && changes.data.currentValue && changes.data.currentValue.length &&
      changes.data.currentValue.length > 0 && changes.data.currentValue.length > this.rowSelected) {
      this.selected = [...changes.data.currentValue[this.rowSelected]];
      this.data = [...this.data];
    }
  }

  onSelect(event: any) {
    this.selectedRowEmit.emit(event.selected[0]);
  }

  onMouseSelect(event: any) {
    if (event && this.selectedItem && event.which === 2) {
      this.mouseWheelClickRowEmit.emit(this.selectedItem);
    }
  }

  getRowClass(row: any) {
    return { 'search-results-table-row': true };
  }

  getRowClassSelectable = (row: any) => {
    if (this.rowSelected > -1 && this.data && this.data.length && this.data.length > 0 && this.data[this.rowSelected] &&
      isEqual(row, this.data[this.rowSelected])) {
      return {
        'table-row-selected': true
      };
    }
    return {
      'search-results-table-row': !this.selectableClass,
      'table-row-no-selectable': this.selectableClass
    };
  }

  markItem(event: any, row: any) {
    if (event && event.which === 2) {
      this.selectedItem = row;
    }
  }

  getMessage() {
    return this.messages && this.messages.loadingMessage && this.messages.noResultsMessage ?
      (this.isLoadingData ? this.messages.loadingMessage : this.messages.noResultsMessage) : '';
  }

  selectFieldValue(row: any, prop: any) {
    if (row && prop) {
      const propArray = prop.split('.');
      return propArray.length > 1 && row[propArray[0]] ? row[propArray[0]][propArray[1]] : row[prop];
    }
  }
}
