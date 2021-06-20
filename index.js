const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./src/generateMarkdown');
const Engineer = require("./lib/engineerClass"); 
const Manager = require("./lib/managerClass"); 
const Intern = require("./lib/internClass"); 

const team = [];

const addNewMember = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: `Which type of employee would you like to add?`,
      choices: ["Intern", "Engineer", "No More Please"]
    },
  ]).then(({ choice }) => {
    switch (choice) {
      case "Intern":
        makeIntern();
        break;
      case "Engineer":
        makeEngineer();
        break;
      default:
        buildTeam();
        break;
    }
  });
}

const askManagerQs = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `What the manager's name?`
    },
    {
      type: 'input',
      name: 'id',
      message: `What the manager's employee ID?`
    },
    {
      type: 'input',
      name: 'email',
      message: `What the manager's email address?`
    },
    {
      type: 'input',
      name: 'office',
      message: `What the manager's office number?`
    },
  ]);
};

const askInternQs = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `What the intern's name?`
    },
    {
      type: 'input',
      name: 'id',
      message: `What the intern's employee ID?`
    },
    {
      type: 'input',
      name: 'email',
      message: `What the intern's email address?`
    },
    {
      type: 'input',
      name: 'school',
      message: `What the intern's school?`
    },
  ]);
};

const askEngineerQs = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `What the engineer's name?`
    },
    {
      type: 'input',
      name: 'id',
      message: `What the engineer's employee ID?`
    },
    {
      type: 'input',
      name: 'email',
      message: `What the engineer's email address?`
    },
    {
      type: 'input',
      name: 'github',
      message: `What the engineer's github?`
    },
  ]);
};

const init = () => {
  askManagerQs()
    .then((answers) => {
      console.log('Success!');
      //construct a Manager obj
      const newManager = new Manager(answers.name, answers.id, answers.email, answers.office);
      //push the obj into team
      team.push(newManager);
      //ask the user what they watn
      addNewMember();
    })
};

const makeIntern = () => {
  askInternQs()
    .then((answers) => {
      console.log('Success!');
      //construct a Intern obj
      const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
      //push the obj into team
      team.push(newIntern);
      //ask the user what they watn
      addNewMember();
    })
};

const makeEngineer = () => {
  askEngineerQs()
    .then((answers) => {
      console.log('Success!');
      //construct a Engineer obj
      const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      //push the obj into team
      team.push(newEngineer);
      //ask the user what they watn
      addNewMember();
    })
};

const buildTeam = () => {
  fs.writeFile(path.join(__dirname, 'dist/index.html'), generateMarkdown(team), function (err) {
    if (err) throw err;
  });
}

init();