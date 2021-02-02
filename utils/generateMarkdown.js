const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  let licenseBadge = '';
  let firstLicenseLink = '';
  let secondLicenseLink = '';

 function renderLicenseBadge(license) {
  if(license === 'MIT') {
    licenseBadge = 'MIT'
  }
  if (license === 'IBM') {
    licenseBadge = 'IPL 1.0'
  }
  if(license === 'GNU') {
    licenseBadge = 'GPL v3' 
  }
  else {
    licenseBadge = ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    firstLicenseLink = 'https://img.shields.io/badge/License-MIT-yellow.svg'
    secondLicenseLink = 'https://opensource.org/licenses/MIT'
  }
  if (license === 'IBM') {
    firstLicenseLink = 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'
    secondLicenseLink = 'https://opensource.org/licenses/IPL-1.0'
  }
  if(license === 'GNU') {
    firstLicenseLink = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    secondLicenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  }
  else {
    firstLicenseLink = ''
    secondLicenseLink = ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge()
  renderLicenseLink()
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  fs.writeFile(
  'README.md',
  `  
  # Title [![License: {LicenseBadge}]({firstLicenseLink})]({secondLicenseLink})
  ${data.projectName}
  
  ## Table of Contents
  -[Description](#description)
  -[Questions](#questions)
  -[License](#license)
  -[Video](#video)
  
  ## Description
  Project Description: ${data.description}
  
  Installation Instructions: ${data.installation}
  
  Usage Information: ${data.usage}
  
  Contribution Guidelines: ${data.contribution}
  
  Test Instructions: ${data.test}
  
  ## Questions
  GitHub Repository: <a href="${data.gitLink}">${data.gitUsername}</a>
  Contact Info: ${data.contactInfo}
  Email: ${data.email}  
  LinkedIn: ${data.linkedIn}

  ## License
  This page is covered under the license of ${data.license}.

  ## Video
  ![Screen Recording of Project]({data.linkToVideo})

  `,
  (err) => {err ? console.log(err) : console.log('NEWREADME Generated!!')});
}

module.exports = generateMarkdown;

