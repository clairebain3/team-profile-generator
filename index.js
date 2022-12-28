const inquirer = require('inquirer');
const fs = require('fs');



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
    const manager = new Manager(answers.Name, answers,Email, answers.id, answers.office)
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
                addEmployee('engineer');
            break;
            case answers.continue = 'Add an intern':
                addEmployee('intern');
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

function addEmployee(type){
        inquirer
        .prompt([
            {
             type: 'input',
             name: 'mName',
             message: `Please enter the ${type} name`
            },
            {
            type: 'input',
            name: 'mEmail',
            message: `Please enter the ${type} email`
            },
            {
            type: 'input',
            name: 'mEmployeeId',
            message: `Please enter the ${type} employee ID`
            },
            {
            type: 'input',
            name: 'mOfficeNumber',
            message: `Please enter the ${type} office number`
            },
        
        
        ])
        .then((answers)=> {
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