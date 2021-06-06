// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// const utils = require("utils")
const generateMarkdown = require('./utils/generateMarkdown');
const InputPrompt = require('inquirer/lib/prompts/input');
const { log } = require('console');


// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your project?',
    },
    {
        type: 'input',
        name: 'goal',
        message: 'Describe the goal of your project',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Why did you build this?',
    },
    {
        type: 'input',
        name: 'solution',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'special_feature',
        message: 'What makes your project stand out?',
    },
    {
        type: 'input',
        name: 'challenges',
        message: 'What challenges did you encounter?',
    },
    {
        type: 'input',
        name: 'improvement',
        message: 'What features or improvements do you have planned for the future?',
    },
    {
        type: 'input',
        name: 'deployed_link',
        message: 'Link your deployed project',
    },
    {
        type: 'input',
        name: 'summary',
        message: 'Describe the deployed project link (if included) and summarize your experience building the project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed. Syntax for screenshot: ![alt text](assets/images/screenshot.png)',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter a License. If needed refer to [https://choosealicense.com/](https://choosealicense.com/).',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you wrote tests, provide examples on how to run them here.',
    },
    {
        type: 'input',
        name: 'github_username',
        message: 'Enter your Github username.',
    },
    {
        type: 'input',
        name: 'github_account',
        message: 'Enter your Github account link.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
]

//  }.then(answers => {
//     const {
//         title,
//         description,
//         goal,
//         motivation,
//         solution,
//         learned,
//         special_feature,
//         challenges,
//         improvement,
//         deployed_link,
//         summary,
//         installation,
//         github,
//         usage,
//         contributions,
//         tests,
//         github_username,
//         github_account,
//         email,
//     });

// .then((data) => {
//     const readmeContent = generateMarkdown(data);
//     fs.writeFile('README.md', readmeContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created index.html!')
//     );
// });
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log("Inquirer Answers: ", answers);
            writeToFile("README.md", InputPrompt);
        });
}

function writeToFile(filename, data) {
    const readmeContent = generateMarkdown(data);
    fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}

// TODO: Write the file using the above parameters
// // TODO: Create a function to initialize app

init();     // // Function call to initialize app