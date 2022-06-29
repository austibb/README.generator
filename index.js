// packages and files needed for program to function
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateReadMe');

// array of the prompts the user will see when running this program
const prompts = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project name:',
        default: 'My Project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the appropriate license for your project:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        default: "None",
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What commands should the user run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What commands should the user run to test the project?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please list considerations for the user to account for when using this app:',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Can users contribute to the repo? If so, how?',
    },
];

// creates a new file with the given file name and file content
let writeToFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data);

// initialization function
function init() {
    inquirer
        .prompt(prompts)
        .then((response) => {
            console.log('Generating README...');
            writeToFile('README.md', generateReadMe({ ...response }));
            console.log('File created! Good luck with your project.');
        });
}

init();
