import TableColumnModel from './TableColumnModel.js'

export default class TableModel {
  constructor(columns) {
    this.columns = columns.map((column) => new TableColumnModel(column))
    this.rows = []
  }

  get flatRows() {
    return this._flattenRows(this.rows)
  }

  get sortedRows() {
    const column = this.columns.find((col) => col.sort != null)
    if (!column) {
      return JSON.parse(JSON.stringify(this.rows))
    }
    const { id, sort: sortDirection } = column

    const clonedRows = JSON.parse(JSON.stringify(this.rows))
    this._sortRowsRecursively(clonedRows, id, sortDirection)

    return clonedRows
  }

  setRows(rows) {
    this.rows = rows
  }

  addRow(newRow, parent) {
    if (parent) {
      const parentRow = this.flatRows.find((row) => row.id === parent.id)
      parentRow.subordinates.push(newRow)
    } else {
      this.rows.push(newRow)
    }
  }

  changeTableSort(id) {
    this.columns.forEach((column) => {
      if (column.id === id) {
        column.setNextSortDirection(column.sort)
      } else {
        column.clearSort()
      }
    })
  }

  _sortRowsRecursively(rows, id, direction) {
    rows.sort(({ [id]: a }, { [id]: b }) =>
      this._compareValues(a, b, direction)
    )
    rows.forEach((row) => {
      if (row.subordinates?.length) {
        this._sortRowsRecursively(row.subordinates, id, direction)
      }
    })
  }

  _compareValues(a, b, direction) {
    if (direction === 'desc') {
      ;[a, b] = [b, a]
    }
    if (typeof a === 'string') {
      return a.localeCompare(b)
    }
    return a - b
  }

  _flattenRows(rows) {
    return rows.reduce(
      (acc, row) => acc.concat(row, this._flattenRows(row.subordinates)),
      []
    )
  }
}
