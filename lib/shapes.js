//Here, we establish a 'parent' 'class' 'Shape'. It holds the attributes that our 3 shape classes (Triangle, Circle & Square) have in common and allows them allow to inheret these attributes, cutting down on redundancy.
class Shape {
    //Here, we 'bind' the 'color' to 'this' ('class Shape') and set it = to an empty string, so that this info can be appended for all 3 shapes, by the user's choice in our app.
    constructor() {
      this.color = "";
      
    }
    //Here we use a method that will 'set' the fill 'Color' for our shape. Here, our 'setColor' method takes a paramater of 'color'. This 'color' attribute is 'set' by invoking the method and passing a user-entered color value as an argument.
    setColor(color) {
        this.color = color;
    }
    
}

//Here, the Triangle, Circle and Square classes 'extend' (inherit the attributes of) our parent-class 'Shape' and add to them their own instance-specific attributes, depending on the shape chosen by the user. Each class also 'renders' the shape itself, based on values that are instance-specific to that shape. They return an example that qualifies, as each of our shapes would be geometrically-defined. Each shape will also inherit its 'fill' 'color' from the 'Shape' class, since we have set the 'fill' 'color' attribute = to 'this.color'. As the 3 shapes below are extending class 'Shape', 'this' refers to the class 'Shape'.
class Triangle extends Shape {
    //The 'points' attribute of a 'polygon' define the vertices and expect a list of x and y-axis coordinate-pairs (separated by commas, below). In this case, our coordinates 'draw' a triangle. 
    render() {
        return `<polygon points="150, 10 244, 169 56, 169" fill="${this.color}" />`;
    }
}
class Circle extends Shape {
    //Similarly, we draw a 'circle' by putting the 'c'enter of our circle at coordinates of 'cx' and 'cy', with 'r' being the 'radius', in pixels.
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}
class Square extends Shape {
    //Lastly, we 'draw' a 'rect'angle with = side lengths, giving us a square.
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}"/>`;
    }
}

//Here, we export the Triangle, Circle, and Square classes as an {object}, making them available for use in both our test (shapes.test.js) and the CLI app itself.
module.exports = {Triangle, Circle, Square};