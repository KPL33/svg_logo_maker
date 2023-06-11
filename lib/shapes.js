//Here, we establish a 'parent' 'class' 'Shape'. It holds the attributes that can be inherited by the 3 shape classes with which we're concerned (Triangle, Circle & Square)
class Shape {
    //Here, we 'bind' the 'color' and set it = to an empty string, so that this info. can be appended by the user's choice in our app.
    constructor() {
      this.color = "";
      
    }
    //Here we use a method that will 'set' the fill 'Color' for our shape. Here, our 'setColor' method takes a paramater of 'color'. This 'color' attribute is 'set' by invoking the method and passing a user-entered color value as an argument, the argument being supplied by the user, when prompted in our CLI app.
    setColor(color) {
        this.color = color;
    }
    
}

//Here, the Triangle, Circle and Square classes 'extend' (inherit the attributes of) our parent-class 'Shape' and add to it their own instance-specific attributes, depending on the shape chosen by the user. Each class also 'renders' the shape itself, based on values that are instance-specific to that shape (notes on this can be found below). They retrun an example that qualifies, as each of our shapes would be geometrically-defined. Each shape will also inherit its 'fill' 'color' from the 'Shape' class, since we have set the 'fill' 'color' attribute = to 'this.color'. As the 3 shapes below are extending class 'Shape', 'this' refers to the class 'Shape'.
class Triangle extends Shape {
    //The 'points' attribute of a polygon define the vertices and expect a list of x and y-axis coordinate-pairs. In this case, our coordinates essentially 'draw' a triangle. In this example, on the x-axis, we put a point at 150 and a point at 18, on the y-axis. For the next, x=244, y=182 and for the 3rd point of our triangle, x=56 and y=182. 
    render() {
        return `<polygon points="150, 10 244, 169 56, 169" fill="${this.color}" />`;
    }
}
class Circle extends Shape {
    //Similarly, this 'circle' example puts the 'c'enter of our circle on the 'x'-axis at '25', the 'c'enter on the 'y'-axis at '75'. We also designate '20', for the 'r'adius value.
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}
class Square extends Shape {
    //Lastly, we 'draw' a square by starting at the 'x' and 'y' values below and giving 'width' and 'height' equal values.
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}"/>`;
    }
}

//Here, we export the Triangle, Circle, and Square classes as an {object}, making them available for use in both our test (shapes.test.js) and the CLI app itself (run by invoking index.js).
module.exports = {Triangle, Circle, Square};