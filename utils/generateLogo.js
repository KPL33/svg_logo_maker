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
  const logoShape = `${responses.logoShape}`;
  return `${logoShape}
  ${responses.logoColor}
  ${responses.logoText}
  ${responses.textColor}
`;
}

//Here we 'export' this js document so that it may be referenced by the 'index.js'.
module.exports = generateLogo;
