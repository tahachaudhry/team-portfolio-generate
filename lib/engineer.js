// importing the Employee constructor to be extended by Engineer
const Employee = require("./employee");

// Engineer constructor, which will extend the Employee Constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
    super(name, id, email);

    this.github = github
}

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;