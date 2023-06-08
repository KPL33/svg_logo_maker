//To generate the logo and to run tests on the shape parameters chosen by the user that will verify that the user has created a logo that meets our acceptance criteria, we have 'init'ialized 'npm inquirer 8.2.4. This has generated our 'package.json' file in the root of our repository. Here, we 'require' that 'inquirer' package, which we'll utilize to 'prompt' the user for their input. 
const inquirer = require('inquirer');

//Here, we 'require' (import) the accompanying 'generateLogo'.js file. That file stores (and styles) the user's inputs and 'generate's the content of the user's 'svg logo'.
const generateLogo = require('./utils/generateLogo');

//Here, we declare an array of 'questions' (objects) that will prompt the user for — and store — their 'input'. Most are standard 'input' prompts, but because we want to limit the user's input to 1 of 4 choices (for this example), we assign that question regarding the 'license' a 'type' of 'list'. 
const questions = [
    {
        type: 'list',
        name: 'logo shape',
        message: 'What shape of logo would you like?',
        choices: ["Triangle", "Circle", "Square", "None"
        ]
    },
    {
        type: 'input',
        name: 'logo color',
        message: 'What color would you like your logo to be? Please enter a hexidecimal value. If you are unfamilir with choosing colors based on hexidecimal value, please visit this website for help: {.href [cli homepage](https://https://htmlcolorcodes.com/color-picker/)}'
    },
    {
        type: 'input',
        name: 'logo text',
        message: 'What text would you like to appear on your logo (please limit to 1 to 3 characters)?'
    },
    {
        type: 'input',
        name: 'text color',
        message: 'What color would you like the text in your logo to be? Please enter a hexidecimal value. If you are unfamilir with choosing colors based on hexidecimal value, please visit this website for help: {.href [cli homepage](https://https://htmlcolorcodes.com/color-picker/)}'
    }
];
