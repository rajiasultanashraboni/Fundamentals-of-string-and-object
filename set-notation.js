const person = {
  name: "shraboni",
  age: 25,
  profession: "developer",
  weight: 38,
  height: 5,
  salary: 25000,
  "fav places": ["bandarban", "katabon", "modhubon"],
};

person.salary = 26000;
person["age"] = 26;
person["fav places"] = ["maldive", "balli", "kuakata"];

console.log(person);

const prop = "profession";
person[prop] = "devops";
console.log(person);

console.log(person["fav places"]);
