const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generatePage = require('./src/generatePage')

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'title',
        message: 'What is your job title?',
        choices: ['Manager','Engineer','Intern']
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ["MIT", "BSD3"]
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your application using two to three sentences.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Who can use this application and how?'
      },
    ]);
  };
  
  // const generateREADME = (answers) =>
  // `## Welcome to ${answers.name}!`;
  
  const init = () => {
    promptUser()
      .then((answers) => {
        console.log('Successfully wrote a README file');
        writeFileAsync('./dist/index.html', generatePage(answers));
      })
      .catch((err) => console.error(err));
  };
  
  init();