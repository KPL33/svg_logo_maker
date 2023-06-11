//We have initialized 'npm inquirer 8.2.4 for this challenge. Here, we 'require' the 'inquirer' package, which we'll utilize to 'prompt' the user to provide their preferences for their logo. This 'init' also generated our 'package.json' file in the root folder, which enables us to run tests on the generated logo and verify that it meets our acceptance criteria.

const inquirer = require('inquirer');

//Here, we 'require' the 'fs module'. It allows us to 'read' the user's inputs and 'write' a saved .svg file from the inputs.
const fs = require('fs');

//Here, we 'require' the accompanying 'generateLogo'.js file, which stores the user's inputs and 'generate's the content of the user's 'svg logo'.
const generateLogo = require('./lib/generateLogo');

//Here, we declare an array of 'questions' that will prompt the user for — and store — their 'input'..

const questions = [
    {
        type: 'list',
        name: 'logoShape',
        message: 'What shape of logo would you like?',
        choices: ["Triangle", "Circle", "Square"]
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Please enter a hexadecimal value for your logo-color, beginning with the # sign. If you are unfamilir with choosing colors based on hexidecimal value, please visit https://htmlcolorcodes.com/color-picker/ for help: . Or, you may choose colors with basic names (red, green, blue, etc.).'
    },
    {
        type: 'input',
        name: 'logoText',
        message: 'What text would you like to appear on your logo (please limit to 1 to 3 characters)?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color for your text-color.'
    }
];

//Here, we declare a 'function' that 'write's the 'logo.svg.' file, based on the 'logoContent' provided by the user via prompts. Because we want to save one instance each of the Triangle, Circle and Square-shaped logos, we consider 'logoShape' as a paramater. Our other parameter, 'logContent' accounts for the user's other choices.
function writeLogo(logoContent, logoShape) {

    //Here, we establish a naming convention string, "logo_" followed by the 'logoShape' and save this as the 'fileName' of our '.svg' file.
    const fileName = `logo_${logoShape.toLowerCase()}.svg`;

    //Here, we utilize the 'fs' module's built-in 'writeFile' function to save our svg file. We also include 'err' as a possible paramater, in case any error should occur during the writing process.
    fs.writeFile(`./examples/${fileName}`, logoContent, (err) => {
        //'if' an 'err'or occurs, the user is notified of this through a 'console' 'log'.
        if (err) {
            console.error(`Error writing ${fileName} file.`, err);
            //Otherwise, the user is notified that the operation was successful.
        } else {
            console.log(`${fileName} file generated successfully!`);
        }
    });
}

//Here, we declare an 'async'hronous 'function' that 'await's the return of the user's 'responses' to the 'prompt's before executing the remaining code. In this way, we ensure that we can 'generate' and 'write' the 'Logo' file and ensure that it includes all of the user-proivded 'responses'.
async function init() {
    const responses = await inquirer.prompt(questions);
    const logoShape = responses.logoShape.replace(' ', '_').toLowerCase();
    const logoContent = generateLogo(responses);
    writeLogo(logoContent, logoShape);

}

//Once we have acquired all of the necessary components with the 'init' function, we call it and our 'Logo' file generates to our 'examples' folder.
init();