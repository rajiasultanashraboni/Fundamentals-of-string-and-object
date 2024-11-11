let company = {
  name: "Tech Solutions",
  location: "New York",
  employees: {
    manager: {
      name: "Alice",
      age: 35,
      department: "Management",
    },
    developer: {
      name: "Bob",
      age: 28,
      department: "Development",
    },
  },
};
company["employees"].manager.name = "Shraboni";
console.log(company.employees.manager.name);
console.log(company.employees.developer.name);
delete company.employees.developer;
console.log(company);
