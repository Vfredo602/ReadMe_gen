// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the url to your Github?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please give instructions for the installation of this app.",
  },
  {
    type: "input",
    name: "usage",
    message: "how would you use this repository?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are your contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "Please give us the test instructions.",
  },
  {
    type: "list",
    name: "license",
    choices: ["Apache", "MIT", "GPL", "None"],
    message: "Which license would you like to use?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName), data);
}
// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
