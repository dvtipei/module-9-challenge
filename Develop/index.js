// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: '(required) What is your full name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your full name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: '(required) What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: '(required) What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: '(required) Provide the title of the app to add it to the README.md file',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Please enter your project\'s title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: '(required) Provide a description of your app, i.e. the what, why, and how:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmRunNormally',
        message: '(required) From the terminal, does the app run with the typical "npm start" command?',
        default: true
    },
    {
        type: 'input',
        name: 'runCommand',
        message: 'Type how the user should run the app from the terminal:',
        when: ({ confirmRunNormally }) => {
            if (!confirmRunNormally) {
                return true;
            } else {
                return false;
            }
        },
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter something for how the user should run the app.');
            }
        }
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'What license is this project made under? Select one (default is none):',
        choices: ['GNU GPLv3', 'GNU LGPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'none'],
        default: 'none'
    },
    {
        type: 'input',
        name: 'projectContribute',
        message: '(required) Provide guidelines for how others may contribute to this project:',
        validate: contributeGuidelines => {
            if (contributeGuidelines) {
            return true;
            } else {
            console.log('Please provide usage instructions!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectTests',
        message: '(required) Provide test descriptions for this app:',
        validate: contributeGuidelines => {
            if (contributeGuidelines) {
            return true;
            } else {
            console.log('Please provide test description!');
            return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('Writing the README.md file is complete. Have a look at it!')
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userAnswers => {
    return generateMarkdown(userAnswers);
})
.then(markdownContent => {
    writeToFile(`C:\Users\Redux\Documents\class-stuff\class-docs\module-9-challenge\Develop\generateMarkdown.js`, markdownContent);
})
.catch(err => {
    console.log('The error is: ', err);
});
