// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
 
  switch(data.license){
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
    case 'No License':
      badge = '';
      break;
    default:
      badge = '';

   }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  # ${data.title} ${data.license}

  ## Description
  
  ${data.description}

  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ## Credits

  ${data.contributions}
  
  ## License

  ${data.license}
  
  ## Tests

  ${data.tests}

  ## Contact Me

  If you have questions, please reach out to me via ${data.contact}. My email is ${data.email}, and this is my [github profile.](www.github.com/${data.github})
  
  
`;
}

module.exports = generateMarkdown;
