const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const distFolder = path.resolve(__dirname, "dist");
const htmlPath = path.join(distFolder, "index.html");


teamArray = []; 

function startPrompts () {
    
    function addTeamMembers () {
        inquirer.prompt([{
            type: "list",
            message: "What type of employee you want to enter",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern","Done"] 
        }]).then(function (userInput) {
            switch(userInput.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default: 
                    htmlGeneration();
            }
        })
    };

    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter the Manager's name:"
            },
            {
                type: "input",
                name: "managerID",
                message: "Enter the Manager's ID number:"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter the Manager's email :"
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "Enter the Manager's office phone number:"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
            teamArray.push(manager);
            addTeamMembers();
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter the Engineer's name:"
            },
            {
                type: "input",
                name: "engineerID",
                message: "Enter the Engineer's ID number:"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter the Engineer's email:"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter the Engineer's GitHub username:"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            addTeamMembers();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter the Intern's name:"
            },
            {
                type: "input",
                name: "internID",
                message: "Enter the Intern's ID number:"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter the Intern's email:"
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the Intern School:"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            addTeamMembers();
        });
    }

    function htmlGeneration() {
        console.log("Congrats! Your team has been created!")

        fs.writeFileSync(htmlPath, generateHTML(teamArray), "utf-8")
    }

    addTeamMembers();
}

startPrompts();