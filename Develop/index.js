// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Created an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about using the repo?',
    },
];

// Created a function to write README file
function writeToFile(fileName, data) {
    // Use path.join to create a complete file path
    const filePath = path.join(process.cwd(), fileName);

    // Write the README content to the file
    fs.writeFileSync(filePath, data);

    console.log(`README.md has been successfully generated at ${filePath}`);
}

// Created a function to initialize app
function init() {
    try {
        // Prompt the user with questions
        const answers = await inquirer.prompt(questions);

        // Generate the README content
        const readmeContent = generateMarkdown(answers);

        // Write the README file
        writeToFile('README.md', readmeContent);
    } catch (error) {
        console.error('Error initializing the app:', error);
    }
}

// Function call to initialize app
init();
