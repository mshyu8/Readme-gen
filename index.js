const inquirer  = require("inquirer");
const fs = require("fs");


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


    inquirer
    .prompt(questions)
        .then((answers) => {
         //   console.log(answers)
         //  var userAnswers = generateMarkdown(answers)
         //  var badge =  renderLicenseBadge(answers)
         //  console.log(userAnswers) 
         //  console.log(badge)

         let displayBadge = (answers.license == "MIT")
           ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
           : (answers.license == "Apache 2.0")
           ? '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
           : (answers.license == "GNU v3.0")
           ? '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
           : (answers.license == "Boost Software")
           ? '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
           : '';
           
           
              

           fs.writeFile("README.md",
           
           `
           # ${answers.title} ${displayBadge}

           ## Description
           
           ${answers.description}
         
           ## Table of Contents (Optional)
           
           If your README is long, add a table of contents to make it easy for users to find what they need.
           
           - [Installation](#installation)
           - [Usage](#usage)
           - [Credits](#credits)
           - [License](#license)
           
           ## Installation
         
           ${answers.installation}
           
           ## Usage
         
           ${answers.usage}
           
           ## Credits
         
           ${answers.contributions}
           
           ## License
         
           ${answers.license}
           
           ## Tests
         
           ${answers.tests}
         
           ## Contact Me
         
           If you have questions, please reach out to me via ${answers.contact}. My email is ${answers.email}, and this is my [github profile.](www.github.com/${answers.github})
           
           `
           , (err) => (err)? console.log(err) : console.log("README successfully created!"));

           

          }
        );
       






