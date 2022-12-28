class Employee {
    constructor(position, name, email,id, office){
    this.position = position;
    this.name = name;
    this.email = email;
    this.id = id;
    this.office = office;
    }
    getName() {
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
