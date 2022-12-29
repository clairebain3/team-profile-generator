const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github){
      this.github = github;  
    }
getGithub(){
    return 'https://github.com/' + this.github
}
getRole(){
    return 'Engineer';
}
}
module.exports = Engineer;