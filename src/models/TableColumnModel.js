const sortDirections = ['asc', 'desc', null]
export default class TableColumnModel {
  constructor(column) {
    this.id = column.id
    this.value = column.value
    this.headerName = column.headerName
    this.sort = column.sort ?? sortDirections[sortDirections.length - 1]
  }

  setNextSortDirection(currentDirection) {
    const nextIndex =
      (sortDirections.indexOf(currentDirection) + 1) % sortDirections.length
    this.sort = sortDirections[nextIndex]
  }

  clearSort() {
    this.sort = sortDirections[sortDirections.length - 1]
  }
}
