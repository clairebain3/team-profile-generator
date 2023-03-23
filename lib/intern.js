const Employee = require('./employee');

class Intern extends Employee {
    constructor(school, name, email, id){
        super("Intern", name, email, id)
      this.school = school;  
      this.name = name;
      this.email = email;
      this.id = id;
    }
getSchool(){
    return this.school
}
getRole(){
    // return 'Intern';
    return this.position;
}
}
module.exports = Intern;