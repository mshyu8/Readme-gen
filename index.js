const inquirer  = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
     name: "title",
     message: "What would you like the title to be?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation for your project",
    },
    {
        type: "input",
        name: "usage",
        message: "Explain the usage of your project",
    },
    {
        type: "list",
        choices: ["MIT", "No License", "Apache 2.0", "GNU v3.0", "Boost Software"],
        name: "license",
        message: "what license would you like to give your product."
    },
    {
        type: "input",
        name: "contributions",
        message: "Any contributiors in your project"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests that you have run on your project",
    },
    {
        type: "list",
        name: "contact",
        choices: ["email"],
        message: "What is your preferred contact method?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    }
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
        .then((answers) => {
            console.log(answers)
           var userAnswers = generateMarkdown(answers)
           console.log(userAnswers) 

           switch(projLicense){
            case 'Apache License 2.0':
              badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
              break;
            case 'GNU General Public License v2.0':
              badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
              break;
            case 'MIT License':
              badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
              break;
            case 'Boost Software License 1.0':
              badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
              break;
            default:
              badge = '';

           }}
           )
       
}



// Function call to initialize app
init();
