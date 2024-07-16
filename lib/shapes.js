const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
class Shape {
    constructor(title, text,textColor,shapeColor){
this.title = title;
this.text = text;
this.textColor = textColor;
this.shapeColor = shapeColor;  
 }



    //   .then(()=> {
    //     return writeFile(
    //         join(__dirname,"..","examples",`${this.title}.svg`),

    //     )
    // //   })
    // };

  createLogo() {
    return inquirer
      .prompt([
        {
            type: 'input',
            name: "title",
            message: "name your logo"
        },
        {
          type: 'input',
          name: 'text',
          message: 'Enter logo text (3 charachter max)',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'enter text color',
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'enter shape color',
        },
      ])
      .then(({ title, text, textColor, shapeColor }) => {
      this.title = title;
      this.text = text;
      this.textColor = textColor;
      this.shapeColor =shapeColor
          if (title && text && textColor && shapeColor) {
          return writeFile(
            join(__dirname, '..',"./examples", `${this.title}.svg`),
            this.render(this.title, this.shapeColor)
          )
        }
      })}};
        class Circle extends Shape{
    constructor(title, text,textColor,shapeColor){
        super(title, text,textColor,shapeColor)
    } 
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
     }
}
class Square extends Shape{
    constructor(title, text,textColor,shapeColor){
        super(title, text,textColor,shapeColor)
    } 
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="50"fill="${this.shapeColor}" /> <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
     }
}
class Triangle extends Shape{
    constructor(title, text,textColor,shapeColor){
        super(title, text,textColor,shapeColor)
    } 
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}}" /> <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
     }
}


// new Circle('SVG', 'white', 'green')
module.exports ={
    Shape,
    Circle,
    Triangle,
    Square
}