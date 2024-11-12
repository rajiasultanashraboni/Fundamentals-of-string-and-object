// Task-1:
// Count how many times a string has the letter a

let text = "javascript is a fantastic language";
let count = 0;

for (const char of text) {
  if (char === "a" || char === "A") {
    count++;
  }
}

console.log(count);
