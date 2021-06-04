// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const data = generateMarkdown


const generateHTML = (answers) =>
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>README.md Generator</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
    
                <h1 class="display-4">${answers.title}</h1>
    
                <div>
                    <h2 class="display-4">Description</h2>
                    <ul class="list-group">
                        <li class="list-group-item" id="goal">${answers.goal}</li>
                        <li class="list-group-item">${answers.motivation}</li>
                        <li class="list-group-item">${answers.solution}</li>
                        <li class="list-group-item">${answers.learned}</li>
                        <li class="list-group-item">${answers.special_feature}</li>
                        <li class="list-group-item" id="challenges">${answers.challenges}</li>
                        <li class="list-group-item">${answers.improvement}</li>
                        <li class="list-group-item" id="results">${answers.deployed_link}</li>
                        <li class="list-group-item" id="summary">${answers.summary}</li>
                    </ul>
                </div>
    
                <div>
                    <h2 class="display-4">Table of Contents</h2>
                    <ul class="list-group">
                        <li><a href="#goal" class="list-group-item">Goals</a></li>
                        <li><a href="#challenges" class="list-group-item">Challenges</a></li>
                        <li><a href="#results" class="list-group-item">Results</a></li>
                        <li><a href="#summary" class="list-group-item">Summary</a></li>
                        <li><a href="#installation" class="list-group-item">Installation</a></li>
                        <li><a href="#usage" class="list-group-item">Usage</a></li>
                        <li><a href="#contributions" class="list-group-item">Contributions</a></li>
                        <li><a href="#tests" class="list-group-item">Tests</a></li>
                        <li><a href="#contact" class="list-group-item">Contact Info</a></li>
                    </ul>
                </div>
    
                <div>
                    <h2 class="display-4">Installation</h2>
                    <p id="installation">${answers.github}</p>
                </div>
    
                <div>
                    <h2 class="display-4">Usage</h2>
                    <p id="usage">${answers.usage}</p>
                </div>
    
                <div>
                    <h2 class="display-4">Contributions</h2>
                    <p id="contributions">${answers.contributions}</p>
                </div>
    
                <div>
                    <h2 class="display-4">Tests</h2>
                    <p id="tests">${answers.tests}</p>
                </div>
    
                <h2 id="contact" class="display-4">Contact Info</h2>
                <ul class="list-group">
                    <li class="list-group-item">${answers.github_username}</li>
                    <li class="list-group-item">${answers.github_account}</li>
                    <li class="list-group-item">${answers.email}</li>
                </ul>
    
            </div>
        </div>
    </body>
    
    </html>`;

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
// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);
//     // ];
//     fs.writeFile('index.html', htmlPageContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created index.html!')
//     );
// });

function writeToFile(fileName, data) {
    // TODO: Write the file using the above parameters
}

writeToFile("README.md", data);
//     // TODO: Create a function to write README file
//     function writeToFile('README.md', data) {
// }

// // TODO: Create a function to initialize app
// function init() { }
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log("Inquirer Answers: ", answers);
        });
}
// // Function call to initialize app
init();

