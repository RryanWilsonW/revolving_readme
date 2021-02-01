// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter some installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter the programs usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter Contribution guidelines',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'test'
    },    
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitUsername'
    },
    {
        type: 'input',
        message: 'What is the link to your github repository?',
        name: 'gitLink'
    },
    {
        type: 'input',
        message: 'What is your professional email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your linkedIn Username?',
        name: 'linkedIn'
    },
    {
        type: 'input',
        message: 'How can the user contact you?',
        name: 'contactInfo'
    }
];
//This will grab the inquirer
inquirer .prompt(questions) .then((response) =>
fs.appendFile('README.md',  
`#Title
${response.projectName}

#Table of Contents


#Description, Installation, Usage, Contributing, and Tests
Project Description: ${response.description}

Installation Instructions: ${response.installation}

Usage Information: ${response.usage}

Contribution Guidelines: ${response.contribution}

Test Instructions: ${response.test}

#Questions
GitHub Repository: <a href="${response.gitLink}">${response.gitUsername}</a>
Contact Info: ${response.contactInfo}
Email: ${response.email}  
LinkedIn: ${response.linkedIn}



`,
(err) => err ? console.log(err) : console.log('NEWREADME Generated!!'),
console.log(response)
));

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
