// Imported required packages
// 'fs', 'path', 'inquirer', './utils/generateMarkdown'
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for user input
const questions = [
  {
    // question object for github user name
    type: 'input',
    message: 'Enter GitHub username:',
    name: 'github',
  },
  {
      // question object for email
      type: 'input',
      message: 'Enter email address:',
      name: 'email',
  },
  {
      // question object for project name
      type: 'input',
      message: 'Enter project name:',
      name: 'title',
  },
  {
      // question object for the description
      type: 'input',
      message: 'Enter project description:',
      name: 'description',
  },
  {
      // question object for license
      type: 'list',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache', 'GPL', 'BSD', 'ISC', 'N/A'],
      name: 'license',
  },
  {
      // question object for the installation instruction with default
      type: 'input',
      message: 'Enter installation instructions:',
      name: 'installation',
  },
  {
      // question object for test with default
      type: 'input',
      message: 'Enter test instructions:',
      name: 'test',
  },
  {
      // question object for usage of the repo
      type: 'input',
      message: 'Enter usage information:',
      name: 'usage',
  },
  {
      // question object for contributing to the repo
      type: 'input',
      message: 'Enter contribution information:',
      name: 'contribution',
  },
];

// Function to write README file using the user input
function writeToFile(data) {

  // TODO:
  // fs write function to create the README.md file
  // path package can be used to create the file path

  fs.writeFile("./assets/generated_readmes/README.md", data, (err) =>
    err ? console.error(err) : console.log('README.md file created!')
  );

}

// Function to initialize app
function init() {

  // TODO:
  // call inquirer prompt method for questions
  // inside .then callback
  // call generateMarkdown passing answer object as input argument
  // call writeFile passing file name and the returned value from generateMarkdown function as input arguments

  inquirer.prompt(questions).then((data) => {
    writeToFile( generateMarkdown(data));
  });
}

init();
