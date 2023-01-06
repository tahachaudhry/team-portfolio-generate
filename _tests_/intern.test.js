const Intern = require("../lib/intern");

test("creates an Intern", () => {
    const intern = new Intern("Damian Garzi", 10, "damian@lol.com", "NYU");

    expect(intern.school).toEqual(expect.any(String));
});

test("returns the employee's school if they are an intern", () => {
    const intern = new Intern("Damian Garzi", 10, "damian@lol.com", "NYU");

    expect(intern.getSchool()).toEqual(intern.school);
});

test("return's employee's role as Intern if they're an intern", () => {
    const intern = new Intern("Damian Garzi", 10, "damian@lol.com", "NYU");

    expect(intern.getRole()).toEqual("Intern");
});