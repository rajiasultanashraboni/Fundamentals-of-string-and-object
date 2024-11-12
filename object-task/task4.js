// Task-4
// Count the number of properties.

// Input:

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

// for (const prop in student) {
//   console.log(prop);
// }

let keys = Object.keys(student);
console.log(keys);
console.log("number of properties:", keys.length);
