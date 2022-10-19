// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const question = [
    {
      type: 'input',
      message: 'What is the name of your application repository?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the Description of your program?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation instructions for your program?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is your program Usage for?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What is the Table of contribution guidelines of your program?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Is there any test instructions?',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'Is there any License to your program?',
        name: 'license',
        choices: ['MIT License', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0'],
      },
      {
        type: 'input',
        message: 'What is your github Username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
      }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            throw err; 
        }
        console.log("README.md created")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(question).then((data) => {
        writeToFile("./example/README.md", data)
    })
}

// Function call to initialize app
init();
