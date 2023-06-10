const {Triangle, Circle, Square} = require ("./shapes.js");

describe('Triangle', () => {
    test('should construct a triangle with correct color', () => {
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualTriangle = triangle.render();
        const expectedTriangle = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
        expect(actualTriangle).toEqual(expectedTriangle);
    });
});

describe('Circle', () => {
    test('should construct a circle with correct color', () => {
        const circle = new Circle();
        circle.setColor("blue");
        const actualCircle = circle.render();
        const expectedCircle = `<circle cx="50" cy="100" r="40" fill="blue" />`;
        expect(actualCircle).toEqual(expectedCircle);
    });
});

describe('Square', () => {
    test('should construct a square with correct color', () => {
        const square = new Square();
        square.setColor("red");
        const actualSquare= square.render();
        const expectedSquare = `<rect x="40" y="40" width="120" height="120" fill="red"/>`;
        expect(actualSquare).toEqual(expectedSquare);
    });
});