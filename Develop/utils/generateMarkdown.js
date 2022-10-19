// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var badge = ""; 
var link = "";

function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'GNU Lesser General Public License v3.0': 
      badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
      break;
    case 'Mozilla Public License 2.0': 
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    case 'GNU Affero General Public License v3.0': 
      badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
      break;
    case 'The Unlicense': 
      badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      break;
    case 'Apache License 2.0': 
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GNU General Public License v3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    default:
      badge = ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT License':
      link = 'https://api.github.com/licenses/mit'
      break;
    case 'GNU Lesser General Public License v3.0': 
      link = 'https://api.github.com/licenses/lgpl-3.0'
      break;
    case 'Mozilla Public License 2.0': 
      link = 'https://api.github.com/licenses/mpl-2.0'
      break;
    case 'GNU Affero General Public License v3.0': 
      link = 'https://api.github.com/licenses/agpl-3.0'
      break;
    case 'The Unlicense': 
      link = 'https://api.github.com/licenses/unlicense'
      break;
    case 'Apache License 2.0': 
      link = 'https://api.github.com/licenses/apache-2.0'
      break;
    case 'GNU General Public License v3.0':
      link = 'https://api.github.com/licenses/gpl-3.0'
      break;
    default:
      link = ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseLink(license);
  renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data.license);
  return `
  # ${data.title}

  ## Description 
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

 <a name="installation"></a>
 # Installation 

 ${data.installation}

 <a name="usage"></a>
 # Usage  

 ${data.usage}

 <a name="contributing"></a>
 # Contributing

 ${data.contributing}

 <a name="tests"></a>
 # Tests

 ${data.tests}

 <a name="license"></a>
 # License 

 ${badge}\n
 ${link}
 
 <a name="questions"></a>
 # Questions 

 If you have any questions according to the program feel free to ask questions through Github or Email. \n

 Github: ${data.username}\n
 Email: ${data.email}

`;
}

module.exports = generateMarkdown;
