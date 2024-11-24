export default class EmployeeModel {
  constructor(employee = {}) {
    this.id = employee.id ?? EmployeeModel.generateId()
    this.name = employee.name ?? ''
    this.phone = this.applyPhoneMask(employee.phone ?? '')
    this.subordinates = Array.isArray(employee.subordinates)
      ? employee.subordinates.map(
          (subordinate) => new EmployeeModel(subordinate)
        )
      : []
  }

  setName(newName) {
    this.name = newName || ''
  }

  setPhone(newPhone) {
    this.phone = this.applyPhoneMask(newPhone || '')
  }

  applyPhoneMask(input) {
    const allowedChars = /[^0-9()+\- ]/g
    const cleanedInput = input.replace(allowedChars, '')

    return cleanedInput
  }

  static generateId() {
    return String(Date.now()) + Math.floor(Math.random() * 10000)
  }
}
