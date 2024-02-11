// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return '';
  }
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license)`;
  } else {
    return '';
  }
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.`;
  } else {
    return '';
  }
}

// Created a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  return `# ${answers.title}


## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${licenseBadge}
${answers.licenseExplanation}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For additional questions, contact ${answers.email}.
GitHub: [${answers.username}](https://github.com/${answers.username})

`;
}

module.exports = generateMarkdown;
