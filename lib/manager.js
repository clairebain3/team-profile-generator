const Employee = require('./employee.js');

class Manager extends Employee {
    constructor( officeNumber, name, email, id) {
    super("Manager", name, email, id)
    this.officeNumber = officeNumber;
    // this.position = "Manager"
    // this.position = position;
    this.email = email;
    this.id = id;
    this.name = name

    }
    getRole(){
        // return 'Manager';
        return this.position
    }
}
module.exports = Manager;