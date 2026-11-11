// // If hour is between 6am and 12pm: Good morning!
// // If it is between 12pm and 6pm: Good afternoon! Otherwise: Good evening!

let hour = +prompt("what is the time", "");

if (hour >= 6 && hour < 12) {
  alert("Good morning!");
} else if (hour >= 12 && hour <= 18) {
  alert("Good afternoon");
} else {
  alert("Good evening");
}

let role = prompt("What is your role?", "");

switch (role) {
  case "guest":
    alert("Hello guest");
    break;

  case "moderator":
    alert("Hello moderator");
    break;
  default:
    alert("Sorry who do you say you are again?");
}

let whoTheFuck = prompt("What is your role?", "");

if (whoTheFuck === "guest") {
  alert("Hello guest");
} else if (whoTheFuck === "moderator") {
  alert("Hello moderator");
} else {
  alert("Sorry who do you say you are again?");
}

// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');

// Let's say we want to display Hello World five(5) times in our console()
// Using a for loop, we can do this in the following way:

for (let i = 1; i <= 5; i++) {
  console.log("Hello World");
}

// Let's make this program a bit more interesting let's say we want to display odd
// numbers between 1 to 5. So instead of logging Hello World in the console, we can
// have an if statement and check the remainder of the division of i by 2.

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Using the WHY LOOP:
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Using the DO WHILE LOOP:
// let i = 6;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// Using the FOR IN LOOP, we can iterate through the properties of an object. The syntax is as follows:
const person = {
  name: "Napoleon",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

// Using the FOR OF LOOP, we can iterate through the values of an iterable object. The syntax is as follows:
const colors = ["red", "green", "blue"];
for (let color of colors) console.log(color);

let a = 0;
while (a < 10) {
  if (a === 5) break;
  
  console.log(a);
  a++;
}
