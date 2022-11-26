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
  
  ## Description 
  ${data.Description}
  
  ## Installation Instructions
  ${data.Installation}
  
  ## Usage Information 
  ${data.Usage}

  ## Contibuting Guidlines 
  ${data.cont}

  ## Testing Instructions
  ${data.test}

  ## Questions 
  Visit my Github Profile for Questions 
  (http:github.com/${data.username}) 
  `;
}

module.exports = generateMarkdown;
