const Employee = require('./employeeClass');

class Intern extends Employee {
    constructor(school){
        super(name, id, email);
        this.school = school;
    };
    getSchool() {
        return this.school
    };
    getRole() {
        return 'Intern'
    };
};

module.exports = Intern;