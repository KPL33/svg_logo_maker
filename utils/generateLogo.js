//Here, we 'require' the 3 specific shape classes detailed in 'shapes.js', so that they can be referenced to 'generateLogo'.
const { Triangle, Circle, Square } = require('../lib/shapes');

//Here, we create a function that 'switch'es the 'case' of the logo class, depending on the user's response to the 'logoShape' question they receive from 'index.js'.
function getShape(logoShape) {
  switch (logoShape) {
    case 'Triangle': 
      return new Triangle();
    case 'Circle': 
      return new Circle();
    case 'Square': 
      return new Square();
  }
}


//Here, we declare a 'function' that 'generate's the 'Logo', based on the user's 'responses' to the 4 questions in 'index.js'.
function generateLogo(responses) {
  const { logoShape, logoColor, logoText, textColor } = responses;
  //Here we 'get' the 'Shape' from the 'getShape' 'function above and then 'set' the 'Color' of the 'shape', received via the user's response to the 'logoColor' question in 'index.js'.
  const shape = getShape(logoShape);
  shape.setColor(logoColor);
  //Here, we 'render' the 'shape' and create a 300x200 px element that will allow us to view it.
  return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}
  <text x="150" y="120" fill="${textColor}" font-size="50" text-anchor="middle">${logoText}</text>
  </svg>`;
}

//Here we 'export' the 'generateLogo.js' document so that it may be referenced by the 'index.js'.
module.exports = generateLogo;
