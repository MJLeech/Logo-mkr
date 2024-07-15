const { default: Choices } = require('inquirer/lib/objects/choices.js');
const Shapejs = require('./lib/shapes.js');
const inquirer = require('inquirer');
const circle = new Shapejs.Circle()
const square = Shapejs.Square
const triangle = Shapejs.Triangle
    return inquirer
    .prompt([
    {
        type: "list",
        name:"chooseShape",
        choices: ["circle",triangle,square]
    },
])
.then(({chooseShape, Shapejs}) => {
    if(chooseShape = "circle" )
        console.log(chooseShape)
        circle.createLogo() 
   }
)
 


//just got the above function to work. need to figure out how to generate the svg file next and duplicate above function