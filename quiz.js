// Section 1

// What types are these?

// /* 1.1 */ 1;              NUMBER 
// /* 1.2 */ "cat";          STRING
// /* 1.3 */ true;           BOOLEAN
// /* 1.4 */ [];             OBJECT
// /* 1.5 */ {};             OBJECT
// /* 1.6 */ 1.1;            NUMBER
// /* 1.7 */ var myVariable; UNDEFINED


// Section 2

// What is the truthiness/falsiness values of the following values?

// /* 2.1 */ 1;          TRUE
// /* 2.2 */ "cat";       TRUE
// /* 2.3 */ true;        TRUE
// /* 2.4 */ NaN;         FALSE
//  2.5  [];              TRUE
// /* 2.6 */ {};          TRUE
// /* 2.7 */ undefined;   FALSE
// /* 2.8 */ "";          FALSE
// /* 2.9 */ 0;           FALSE


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number 
// 3.2 Assign a variable that is a string
// 3.3 Assign a variable that is a boolean
// 3.4 Assign a variable that is an object

// 3.1 var myNumber = 7
// 3.2 var myString = "Amy"
// 3.3 var myBoolean = true
// 3.4 var myObject = {
//                     name: "Amy",
//                     age: 26
//                   };


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

// 1 + 1 === 2 ? console.log("hello") : console.log("bye") 

// Section 5

// var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
// 5.2. Assign the last element to a variable
// 5.3. Assign the length of an array to a variable
// 5.4. Add an item to the end of the array
// 5.5. Add an item to the start of the array
// 5.6. Assign the index of hedgehog to a variable


// var firstAnimal = animals[0];
// console.log(firstAnimal);

// var lastAnimal = animals[3];
// console.log(lastAnimal);

// var length = animals.length;
// console.log(length);

// var newAnimalEnd = animals.push("hydra");
// console.log(animals);

// var newAnimalStart = animals.unshift("bobcat");
// console.log(animals);

// var hedgehog = animals[1];
// console.log(hedgehog);



// Section 6

// 6.1 Create an array of 5 vegetables
// 6.2 Loop over the array and write to the console using a "while"
// 6.3 Loop again using a "for" with a counter
// 6.4 Loop again using a "for of"

// var vegetables = ["cabbage", "onion", "leek", "corn", "bell pepper"];


// var x = 0
// while (x < 5){
//   console.log(vegetables);
//   x++;
// }

// for(var vegetable of vegetables){
//   console.log(vegetable);
// }

// for(i = 0; i < vegetables.length; i++){
//   console.log(vegetables[i]);
}

// Section 7

// var accounts = [
//   { name: 'jay',
//     amount: 125.50,
//     type: 'personal'
//   },
//   { name: 'val',
//     amount: 55125.10,
//     type: 'business'
//   },
//   { name: 'marc',
//     amount: 400.00,
//     type: 'personal'
//   },
//   { name: 'keith',
//     amount: 220.25,
//     type: 'business'
//   },
//   { name: 'rick',
//     amount: 1.00,
//     type: 'personal'
//   },
// ];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
// 7.2 Find the amount of money in the account with the largest balance
// 7.3 Find the name of the account with the smallest balance
// 7.4 Calculate the average bank account value
// 7.5 Find the value of marcs bank account
// 7.6 Find the holder of the largest bank account
// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner


  // var total = 0
  // for (account of accounts) {
  //     total += account["amount"];
  // }
  // console.log(total);

  // var largest = 0
  // for (account of accounts) {
  //   largest = Math.max(account["amount"]);
  // }
  // console.log(largest);


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method


// var name = 'Keith';

// var printName = function() {
//   console.log('My name is ' + name );
// };

// printName();


// score = 5;

// var result = function() {
//   var score = 3;
//   return score;
// };

// console.log(result());


// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }

// listAnimals();


var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());