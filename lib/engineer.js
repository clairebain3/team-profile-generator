const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github, name, email, id){
        super("Engineer", name, email, id)
      this.github = github;  
      this.email = email;
      this.name = name;
      this.id = id;
    }
getGithub(){
    return 'https://github.com/' + this.github
}
getRole(){
    return 'Engineer';
}
}
module.exports = Engineer;