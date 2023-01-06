// requires Employee.js constructor
const Employee = require("../lib/employee");

// creating test to check employee object
test("creates an Employee", () => {
    const employee = new Employee("Damian Garzi", 10, "damian@lol.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// testing getName()
test("gets employee's name", () => {
    const employee = new Employee("Damian Garzi", 10, "damian@lol.com");

    expect (employee.getName()).toBe(employee.name)
});

// testing get ID()
test("gets employee's ID number", () => {
    const employee = new Employee("Damian Garzi", 10, "damian@lol.com");

    expect(employee.getID()).toBe(employee.id);
});

// testing getEmail()
test("gets employee's email", () => {
    const employee = new Employee("Damian Garzi", 10, "damian@lol.com");

    expect(employee.getEmail()).toBe(employee.email);
});

// testing getRole()

test("gets employee's role", () => {
    const employee = new Employee("Damian Garzi", 10, "damian@lol.com");

    expect(employee.getRole()).toBe("Employee");
});
