const { Triangle, Circle, Square } = require('../lib/shapes');

//Here, we create a function that 'switch'es the 'shape' ('case') of the logo, depending on what the user selects.
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


//Here, we declare a 'function' that 'generate's the 'Logo' language for the 'README', based on the user's 'responses'. We have also styled the content, via built-in markdown elements. The information gathered here is what renders in our template.
function generateLogo(responses) {
  const { logoShape, logoColor, logoText, textColor } = responses;
  const shape = getShape(logoShape);
  shape.setColor(logoColor);

  let transform;
  if (logoShape === 'Triangle') {
    transform = 'translate(125 140)'; // Adjust translation for triangle shape
  } else if (logoShape === 'Circle') {
    transform = 'translate(25 75)'; // Adjust translation for circle shape
  } else if (logoShape === 'Square') {
    transform = 'translate(25 25)'; // Adjust translation for square shape
  }

  return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text fill="${textColor}" font-size="20" text-anchor="middle" transform="${transform}">${logoText}</text>
</svg>`;
}

//Here we 'export' this js document so that it may be referenced by the 'index.js'.
module.exports = generateLogo;
