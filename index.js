var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
inquirer
  .prompt([
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
      message:
        "What command should be run to install dependencies? (ex: npm i) ",
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
      message: "What command should be run to run tests? (ex: npm run test)",
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
  ])

  .then((response) => {
    var readme = `
# ${response.title}

${response.description}

## Install
${response.install}

## Usage
${response.use}

## Licenses
${response.license}

## Contributing 
${response.contribute}

## Testing
${response.tests}

## Author
* Github: ${response.username}
* Email: ${response.email}
`;

    fs.writeFile("testREADME.md", readme, (err) => {
      if (err) {
        throw err;
      }
    });
  });
