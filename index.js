var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies? (ex: npm i) ",
  },
  {
    type: "input",
    name: "use",
    message: "How is your project used?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project have?",
    choices: ["None", "Apache 2.0", "BSD 3", "GPL 3.0"],
  },
  {
    type: "input",
    name: "contribute",
    message: "How can someone contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "username",
    message: "What's your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {
//   fs.writeFile("README.md", process.argv[2], function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Successfully wrote to readme.md!");
//   });
// }

// // function call to initialize program
// init();

inquirer.prompt(questions);
