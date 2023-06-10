const {Triangle, Circle, Square} = require ("./shapes.js");

describe('Triangle', () => {
    test('should construct a triangle with correct color', () => {
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualTriangle = triangle.render();
        const expectedTriangle = `<polygon points="150, 50 244, 214 56, 214" fill="green" />`;
        expect(actualTriangle).toEqual(expectedTriangle);
    });
});

describe('Circle', () => {
    test('should construct a circle with correct color', () => {
        const circle = new Circle();
        circle.setColor("blue");
        const actualCircle = circle.render();
        const expectedCircle = `<circle cx="150" cy="150" r="100" fill="blue" />`;
        expect(actualCircle).toEqual(expectedCircle);
    });
});

describe('Square', () => {
    test('should construct a square with correct color', () => {
        const square = new Square();
        square.setColor("red");
        const actualSquare= square.render();
        const expectedSquare = `<rect x="50" y="50" width="200" height="200" fill="red"/>`;
        expect(actualSquare).toEqual(expectedSquare);
    });
});