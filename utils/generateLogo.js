const { Shape, Triangle, Circle, Square } = require('../lib/shapes');

//Here, we create a function that 'switch'es the 'shape' ('case') of the logo, depending on what the user selects.
function getShape(logoShape) {
  switch (logoShape) {
    case 'Triangle':
      return new Triangle();
    case 'Circle':
      return new Circle();
    case 'Square':
      return new Square();
    default:
      return new Shape();
  }
}

function generateLogo(responses) {
  const { logoShape, logoColor, logoText, textColor } = responses;
  const shape = getShape(logoShape);
  shape.setColor(logoColor);
  shape.setText(logoText);
  shape.setTextColor(textColor);
  const logoSVG = shape.render();
  return logoSVG;
}

//Here we 'export' this js document so that it may be referenced by the 'index.js'.
module.exports = generateLogo;
