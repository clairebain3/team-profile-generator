const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee.js');

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
    const manager = new Manager(answers.Name, answers.Email, answers.id, answers.office)
    fs.writeFile('index.html', generateHTML(manager)),    (err) =>
    // addMore(), 
    // (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  
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
            name: 'EmployeeId',
            message: `Please enter the engineer employee ID`
            },
            {
            type: 'input',
            name: 'OfficeNumber',
            message: `Please enter the engineer office number`
            },
            {
            type: 'input',
            name: 'github',
            message: `Please enter the engineer github name`
            }
        ])
        
        .then((answers)=> {

            switch(answers.type){
                case answers.type = 'engineer':
                    const eng = new Engineer((answers.Name, answers,Email, answers.id, answers.office, answers.github))

            }
            addMore();

            (err) =>
        err ? console.error(err) : console.log('Commit logged!')
        }
        )
    
}

function generateHTML(data) {
    `${data.name}
    ${data.position}
    ID: ${data.id}
    Office Number: ${data.office}

    `;
}

init();