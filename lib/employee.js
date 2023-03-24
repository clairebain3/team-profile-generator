class Employee {
    constructor(position, name, email,id){
    this.position = position;
    this.name = name;
    this.email = email;
    this.id = id;
    // this.office = office;
    }
    Employee.getName = function() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}
    module.exports = Employee;
