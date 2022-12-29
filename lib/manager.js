const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(officeNumber) {
    super(position, name, email,id, office)
    this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;