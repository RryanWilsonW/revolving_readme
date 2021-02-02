// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    const questions = [
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName'
        },
        {
            type: 'checkbox',
            message: 'What type of license would you like?',
            name: 'license',
            choices: ['GNU', 'IBM', 'MIT', 'None']
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
    inquirer.prompt(questions)
    .then (response => {generateMarkdown(response)})
    .catch(err => {err ? console.log(err) : console.log('NEWREADME Generated!!')});
}

// Function call to initialize app
init();
