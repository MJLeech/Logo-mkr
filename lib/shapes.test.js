const shapes = require('./shapes.js');
const circle = new shapes.Circle;
const triangle = new shapes.Triangle;
const square = new shapes.Square;
test('tests circle input',() =>{
    circle.shapeColor = "blue"
  expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`);
});
test('tests triangle input',() =>{
    triangle.shapeColor = "blue"
  expect(triangle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /> <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`);
});
test('tests square input',() =>{
    square.shapeColor = "blue"
  expect(square.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="50"fill="blue" /> <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`);
});