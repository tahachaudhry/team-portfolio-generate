const Engineer = require("../lib/engineer");

test("creates an engineer", () => {
    const engineer = new Engineer("Damian Garzi", 10, "damian@lol.com", "damiSDV");

    expect(engineer.github).toEqual(expect.any(String));
});

test("returns employee's github username", () => {
    const engineer = new Engineer("Damian Garzi", 10, "damian@lol.com", "damiSDV");

    expect(engineer.getGithub()).toBe(engineer.github);
});

test("returns an employee's role if they are an engineer", () => {
    const engineer = new Engineer("Damian Garzi", 10, "damian@lol.com", "damiSDV");

    expect(engineer.getRole()).toBe("Engineer");
});