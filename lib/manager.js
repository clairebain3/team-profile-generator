const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(officeNumber, position, name, email, id, office) {
    super(position, name, email,id, office)
    this.officeNumber = officeNumber;
    this.position = position;
    this.email = email;
    this.id = id;
    this.office = office;
    }
    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;