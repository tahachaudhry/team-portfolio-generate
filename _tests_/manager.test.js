const Manager = require("../lib/manager");

test("creating a Manager", () => {
    const manager = new Manager("Damian Garzi", 10, "damian@lol.com", 1);

    expect(manager.officeNum).toEqual(expect.any(Number));
});

test("returns Manager if employee is a Manager", () => {
    const manager = new Manager("Damian Garzi", 10, "damian@lol.com", 1);

    expect(manager.getRole()).toEqual("Manager")
});