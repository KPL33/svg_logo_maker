//In the command line, we have 'init'ialized 'npm inquirer 8.2.4, which generated our 'package.json' file in the root of our repository. Here, we 'require' that 'inquirer' package, which we'll utilize to 'prompt' the user for their input.
const inquirer = require('inquirer'); 

//Here, we 'require' the 'fs module', which provides built-in functions that will allow us to read the user's inputs and eventually write them to our 'README' template.
const fs = require('fs');

//Here, we 'require' (import) the accompanying 'generateMarkdown'.js file. That file stores (and styles) the user's inputs and 'generate's the content of our 'Markdown' ('README' file).
const generateMarkdown = require('./utils/generateMarkdown');

//Here, we declare an array of 'questions' (objects) that will prompt the user for — and store — their 'input'. Most are standard 'input' prompts, but because we want to limit the user's input to 1 of 4 choices (for this example), we assign that question regarding the 'license' a 'type' of 'list'. 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please give your project a title.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know to use this application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project include?',
        choices: ["MIT", "Apache", "Eclipse", "None"
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command does the user need to use, in order to run tests?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

//Here, we declare a 'function' that 'write's the 'README.md' file, based on the 'readmeContent' provided by the user, through the prompts.
function writeREADME(readmeContent) {
    //This 'function' utilizes the 'fs' module's built-in 'writeFile' function to 'write' the 'readmeContent'. We also include 'err' as a possible paramater, in case any error should occur during the writing process.
    fs.writeFile('Professional_README.md', readmeContent, (err) => {
        //'if' an 'err'or occurs, the user is notified of this through a 'console' 'log'.
        if (err) {
            console.error('Error writing README file:', err);
            //Otherwise, the user is notified that the operation was successful.
        } else {
            console.log('README file generated successfully!');
        }
    });
}
//Here, we declare an 'async'hronous 'function' that 'await's the return of the user's 'responses' to the 'prompt's before executing the remaining code. In this way, we ensure that we can 'generate' the 'Markdown' and 'write' the 'README' file that will include all of the user-proivded 'responses'.
async function init() {
    const responses = await inquirer.prompt(questions);
    console.log(responses);
    const readmeContent = generateMarkdown(responses);
    writeREADME(readmeContent);

}

//Once we have acquired all of the necessary components with the 'init' function, we call it and our 'README' file generates in our root folder.
init();