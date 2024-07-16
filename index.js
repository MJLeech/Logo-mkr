const { default: Choices } = require('inquirer/lib/objects/choices.js');
const Shapejs = require('./lib/shapes.js');
const inquirer = require('inquirer');
const circle = new Shapejs.Circle()
const square = new Shapejs.Square()
const triangle = new Shapejs.Triangle()
    return inquirer
    .prompt([
    {
        type: "list",
        name:"chooseShape",
        choices: ["circle","triangle","square"]
    },
    
])
.then(({chooseShape, Shapejs, }) => {
    if(chooseShape === "circle" ){
        console.log("Circle selected!")
        circle.createLogo() 
    } else if(chooseShape === "square"){
        console.log("Square selected!")
        square.createLogo() 
    } else if(chooseShape === "triangle"){
            console.log("triangle selected!")
            triangle.createLogo() 
    };
    // if(chooseshape = "triangle")
    //     console.log(chooseShape)
    //     triangle.createLogo() 
    
   }
)
 


//just got the above function to work. need to figure out how to generate the svg file next and duplicate above function