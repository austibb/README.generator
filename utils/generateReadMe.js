// creates an image tag by creating a url with the given license name. returns empty string if unlicensed.
var renderLicenseBadge = license =>
  license !== "None"
    ? `![GitHub license](https://img.shields.io/badge/license-${(license.replace(' ', '&'))}-blue.svg)`
    : '';

// returns a hyperlink to the license section of the README, only if a license exists.
var renderLicenseLink = license =>
  license !== "None" ? `* [License](#license)` : '';

// returns the content of the Licensing portion of the README
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
