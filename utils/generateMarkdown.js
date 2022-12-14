// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.license}

  ## Table of Contents 
  [Description](#description)<br />
  [Installation Instructions](#installation-instructions)<br />
  [Usage Information](#usage-information)<br />
  [Contributing Guidelines](#contributing-guidelines)<br />
  [Testing Instructions](#testing-instructions)<br />
  [Questions](#questions)<br />
  
  ## Description 
  ${data.Description}
  
  ## Installation Instructions
  ${data.Installation}
  
  ## Usage Information 
  ${data.Usage}

  ## Contributing Guidelines 
  ${data.cont}

  ## Testing Instructions
  ${data.test}

  ## Questions 
  Email Me: ${data.email}
  My Github: https://github.com/${data.username}
  `;
}

module.exports = generateMarkdown;
