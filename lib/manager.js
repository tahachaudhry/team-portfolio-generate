// importing Employee constructor to be extended by Manager
const Employee = require("./employee");

// Using the Employee constructor to extend Manager constructor requirements 
class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;