import { ColumnMode } from '@swimlane/ngx-datatable';

import { DataTableDefinition } from './table';

export const tableDefinition: DataTableDefinition = {
    schema: [
      { name: 'name', prop: 'name', flexGrow: 2, class: 'name' },
      { name: 'country', prop: 'country', flexGrow: 1, class: 'country' },
      { name: 'year', prop: 'year', flexGrow: 1, class: 'year' },
      { name: 'user', prop: 'user', flexGrow: 2, class: 'user' }
  ],
  sorts: [{
    prop: 'name',
    dir: 'desc'
  }],
  columnMode: ColumnMode.flex,
  messages: {
    loadingMessage: {
      emptyMessage: 'loading...'
    },
    noResultsMessage: {
      emptyMessage: 'no data'
    }
  }
}

export const tableData = [
  {
    name: 'name 1',
    country: 'UK',
    year: '2020',
    user: 'Anna'
  },
  {
    name: 'name 2',
    country: 'France',
    year: '2010',
    user: 'Pierre'
  }
]
