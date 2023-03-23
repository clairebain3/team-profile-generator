const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee.js');
const generateHTML = require('./utils/generateHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');



function init() {
inquirer
.prompt([
    {
     type: 'input',
     name: 'Name',
     message: 'Please enter the manager name'
    },
    {
    type: 'input',
    name: 'Email',
    message: 'Please enter the manager email'
    },
    {
    type: 'input',
    name: 'id',
    message: 'Please enter the manager employee ID'
    },
    {
    type: 'input',
    name: 'office',
    message: 'Please enter the manager office number'
    },


])

.then((answers)=> {
    newManager(answers)
//     fs.writeFile('./dist/index.html', generateHTML(answers), (err) =>
//     err ? console.error(err) : console.log('Commit logged!')
//   );
  addMore();
}
)
}

function addMore() {
    inquirer
    .prompt([
        {
        type: 'list',
        name: 'continue',
        message: 'What woud you like to do next?',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finished building team'



        ]
        }


    ])
    .then((answers)=> {
        switch(answers.continue) {
            case answers.continue = 'Add an engineer':
                console.log('ok');
                addEngineer();
            break;
            case answers.continue = 'Add an intern':
                addIntern();
            break;
            case answers.continue = 'Finished building team':
                // generateHTML();

            break;
            default: console.log('answers.continue')
        }
        (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    }
    )
}

function addEngineer(){
        inquirer
        .prompt([
            {
             type: 'input',
             name: 'Name',
             message: `Please enter the engineer name`
            },
            {
            type: 'input',
            name: 'Email',
            message: `Please enter the engineer email`
            },
            {
            type: 'input',
            name: 'id',
            message: `Please enter the engineer employee ID`
            },
            {
            type: 'input',
            name: 'github',
            message: `Please enter the engineer github name`
            }
        ])
        
        .then((answers)=> {
            newEngineer(answers)

        //     fs.writeFile('./dist/employees.html', generateHTML(answers), (err) =>
        //     err ? console.error(err) : console.log('Commit logged!')
        //   );

            
            addMore();

        //     (err) =>
        // err ? console.error(err) : console.log('Commit logged!')
        }
        )
    
}
function addIntern(){
    inquirer
    .prompt([
        {
         type: 'input',
         name: 'Name',
         message: `Please enter the intern name`
        },
        {
        type: 'input',
        name: 'Email',
        message: `Please enter the intern email`
        },
        {
        type: 'input',
        name: 'id',
        message: `Please enter the engineer employee ID`
        },
        {
        type: 'input',
        name: 'school',
        message: `Please enter the intern school`
        }
    ])
    
    .then((answers)=> {

    //     fs.writeFile('./dist/employees.html', generateHTML(answers), (err) =>
    //     err ? console.error(err) : console.log('Commit logged!')
    //   );
    newIntern(answers)

        
        addMore();

    //     (err) =>
    // err ? console.error(err) : console.log('Commit logged!')
    }
    )

}

function newEngineer (data) {
    createEng = new Engineer(data.github, data.Name, data.Email, data.id)
    console.log(createEng)
    fs.writeFile('./dist/employees.html', generateHTML(createEng), (err) =>
            err ? console.error(err) : console.log('Commit logged!')
          );
}

function newManager (data) {
    console.log(data.Name)
    createManager = new Manager(data.office, data.Name, data.Email, data.id)
    console.log(createManager)
    fs.writeFile('./dist/employees.html', generateHTML(createManager), (err) =>
            err ? console.error(err) : console.log('Commit logged!')
          );
}


function newIntern (data) {
    console.log(data.Name)
    createInt = new Intern(data.school, data.Name, data.Email, data.id)
    console.log(createInt)
    fs.writeFile('./dist/employees.html', generateHTML(createInt), (err) =>
            err ? console.error(err) : console.log('Commit logged!')
          );
}
init();