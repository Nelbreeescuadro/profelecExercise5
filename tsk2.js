let userFirstName = prompt("Enter first name: ");
let userLastName = prompt("Enter last name: ");

let userFullName = userFirstName + " " + userLastName;

console.log(`Your first name is ${userFirstName.toUpperCase()}. Your last name is ${userLastName.toLowerCase()} and your full name is ${userFullName}`);
console.log(`Your initials are ${userFirstName[0].toUpperCase()}.${userLastName[0].toUpperCase()}`);

if (userFirstName.includes("o") && userLastName.includes("a")) {
    console.log('Your first name has the letter "o" and your last name has the letter "a"');
} else {
    console.log('Your first name does not have the letter "o" and your last name does not have the letter "a"');
}

let sentence = "Three Mississippi's is the standard starting time.";

let wordsArray = sentence.split(" ");
console.log(wordsArray);

let firstSubstring = sentence.substring(0, 4);
console.log(firstSubstring);

let secondSubstring = sentence.substring(5, 8);
console.log(secondSubstring);
