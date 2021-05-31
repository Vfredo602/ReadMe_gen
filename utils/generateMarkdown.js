// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeString;
  switch (license) {
    case "Apache":
      badgeString =
        "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "GNU GPL v3":
      badgeString =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "MIT":
      badgeString =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    default:
      badgeString = "";
      break;
  }
  return badgeString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
  function renderLicenseLink(license) {
    let linkString;
    switch (license) {
      case "Apache":
        linkString = "https://opensource.org/licenses/Apache-2.0";
        break;
      case "GNU GPL v3":
        linkString = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case "MIT":
        linkString = "https://opensource.org/licenses/MIT";
        break;
      default:
        linkString = "";
        break;
    }
    return linkString;
  }


// write more markdown.
// if they choose a license....
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let statement = `This project uses the following license: [${license}](${renderLicenseLink(
    license
  )}).`;
  return statement;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badgeString = renderLicenseBadge(data.license);
  let statement = renderLicenseSection(data.license);
  return `
// # license
// ${data.license}
${badgeString}
# Title
${data.title} 
# Table of Contents 
  -   [Installation](#Installation)
  -   [Usage](#Usage)
  -   [Contributing](#Contributing)
  -   [Questions](#Questions)
  -   [License](#License) 
# Installation
${data.installation} 
# Usage
${data.usage}
# Contribution 
${data.contribution}
# Questions
[${data.github}](https://github.com/${data.github}) 
${data.email}

# License 
${statement}`;
}

module.exports = generateMarkdown;
