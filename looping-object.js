const person = {
  name: "shraboni",
  age: 25,
  profession: "developer",
  weight: 38,
  height: 5,
  salary: 25000,
  "fav places": ["bandarban", "katabon", "modhubon"],
};

// **********************using for in object looping******************************

// for (const prop in person) {
//   console.log(prop, " : ", person[prop]);
// }

//*********************using keys ********************* */

const keys = Object.keys(person);
console.log(keys);

for (const key of keys) {
  console.log(key, ":", person[key]);
}
