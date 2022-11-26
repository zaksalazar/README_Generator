// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What would you like to name your file?",
    name: "fileName",
  },

  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },

  {
    type: "input",
    message: "What is your project all about?",
    name: "Description",
  },

  {
    type: "input",
    message: "Briefly describe your installation instructions",
    name: "Installation",
  },

  {
    type: "input",
    message: "Briefly describe your project Useage Information",
    name: "Usage",
  },

  {
    type: "input",
    message: "What are the Contributing Guidlines of your project",
    name: "cont",
  },

  {
    type: "input",
    message: "What are the Testing Instructions of your project",
    name: "test",
  },

  {
    type: "input",
    message: "What is your GitHub Username",
    name: "username",
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },

  {
    type: "list",
    message: "What kind of liscense would you like?",
    name: "license",
    choices: [
      {
        name: "MIT",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "ISC",
        value:
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      },
      {
        name: "Apache",
        value:
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "Boost",
        value:
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      },
      {
        name: "BSD",
        value:
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      },
      {
        name: "CC0",
        value:
          "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
      },
      {
        name: "Mozilla Public",
        value:
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      },
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((respose) => {
    const md = generateMarkdown(respose);
    writeToFile("README.md", md);
  });
}

// Function call to initialize app
init();
