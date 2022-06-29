// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var renderLicenseBadge = license =>
  license !== "None"
    ? `![GitHub license](https://img.shields.io/badge/license-${(license.replace(' ', '&'))}-blue.svg)`
    : '';

// Create a function that returns the license link
// If there is no license, return an empty string
var renderLicenseLink = license =>
  license !== "None" ? `* [License](#license)` : '';

// Create a function that returns the license section of README
// If there is no license, return an empty string
var renderLicenseSection = license =>
  license !== "None"
    ? `This project is licensed under the ${license}`
    : 'This project is not licensed.';

// Create a function to generate markdown for README
var generateMarkdown = data =>
  `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command(s):
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}

  ## Licensing
  
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributions}
  
  ## Testing
  
  To run tests, run the following command(s):
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  
`;

module.exports = generateMarkdown;
