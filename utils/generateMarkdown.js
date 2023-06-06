//Here, we create a function that 'switch'es the 'license' badge that will display in the 'README', based on which 'license' ('case') is selected by the user.
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Eclipse': 
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    default:
      return 'None'
  }
}


//Here, we declare a 'function' that 'generate's 'markdown' language for the 'README', based on the user's 'responses'. We have also styled the content, via built-in markdown elements. The information gathered here is what renders in our template.
function generateMarkdown(responses) {
  const title = `<span style="color: yellow;">***${responses.title}***</span>`;
  return `# ${title}

  ${renderLicenseBadge(responses.license)}

  ## Description
  ${responses.description}
  
  <br />

  ***

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [GitHub](#github)
  7. [Email](#email)
  
  ***

  <br />
  
  <section id="installation"/>
  
  ## Installation Instructions
  ${responses.installation}

  <br />
  <section id="usage"/>

  ## Usage
  ${responses.usage}

  <br />
  <section id="license"/>

  ## Licenses
  This application is covered under the following license (for a link to more info. about this license, please click the badge at top of this README):
  
  ${responses.license}

  <br />
  <section id="contributing"/>

  ## Contributors To This Application
  ${responses.contributing}

  <br />
  <section id="tests"/>

  ## Testing Instructions
  ${responses.tests}

  <br />
  <section id="github"/>

  ## Questions? Contact the Developer on GitHub... 
  ${responses.github}

  <br />
  <section id="email"/>

  ## ...or via Email
  ${responses.email}

`;
}

//Here we 'export' this js document so that it may be referenced by the 'index.js'.
module.exports = generateMarkdown;
