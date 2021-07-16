import { ColumnMode } from '@swimlane/ngx-datatable';

export interface DataTableBuilder {
  getDataTable(): DataTableRow[];
  getDefaultSorting(): SortInfo[];
  getColumnMode(): string;
  getMessages(): DataTableMessages;
}

export interface DataTableDefinition {
  schema: DataTableRow[];
  sorts: SortInfo[];
  columnMode: ColumnMode;
  messages: DataTableMessages;
}

export interface DataTableRow {
  name: string;
  prop: string;
  class?: string;
  colWidth?: number;
  flexGrow?: number;
  comparator?: any;
  icons?: any;
}

export interface SortInfo {
  prop: string;
  dir: string;
}

export interface DataTableMessage {
  emptyMessage: string;
}

export interface DataTableMessages {
  loadingMessage: DataTableMessage;
  noResultsMessage: DataTableMessage;
}

export interface DataTable {
  data: any;
  sorts: SortInfo[];
  schema: DataTableRow[];
  loadingIndicator?: boolean;
  reorderable?: boolean;
  shadowed?: boolean;
  footerHeight?: number;
  headerHeight?: number;
  rowHeight?: number | string;
  scrollbarV?: boolean;
  scrollbarH?: boolean;
  selectionType?: string;
  selectableClass?: boolean;
  columnMode?: string;
  messages?: DataTableMessages;
  onSelect?(data: any): void;
  onMouseSelect?(data: any): void;
  getRowClass(row: any): any;
}
