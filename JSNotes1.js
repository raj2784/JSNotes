"use strict";

//alert("Hello"); we are using nodeJS not browser

//Data Types

console.log(3 + 7);

//Stack , Heap

//All primitive type (Stak), Heap (Non-Premitive)

let myYoutubeName = "raj2784";

let anotherName = myYoutubeName;

anotherName = "goat3186";

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTow = userOne;

userTow.email = "user2@yahoo.com";

console.log(userOne.email);
console.log(userTow.email);

// Premitive data types
// call bay value

String;
Number;
const score = 100;
const scoreValue = 100.3;
Boolean;
const isLoggin = false;
null;
undefined;
let useremail;
Symbol;
const id = Symbol("123");
const anotherid = Symbol("123");
console.log(id === anotherid);
BigInt;
const acard = 1231654489464684746545n;
console.log(typeof acard);

// Non premitive data types

Array;

const color = ["toyota", "nissan", "maruti"];

console.log(typeof color);

Object;

const employee = {
  name: "raj",
  age: 22,
};

console.log(typeof employee);

Function;

const myfunction = function () {
  console.log("hello world");
};

console.log(typeof myfunction);

//string methods

let cityName = "Bangluru";

console.log(cityName.charAt(4));
console.log(cityName.substring(1, 5));
console.log(cityName.slice(1, 5));
console.log(cityName.toUpperCase());
console.log(cityName.toLowerCase());
console.log(cityName.search("g"));
console.log(cityName.indexOf("g"));
console.log(cityName.split("-"));

//number and maths

const rollnum = 101;

const newrollnum = new Number(100);

console.log(newrollnum.toFixed(5));

const price = 124.4545;

console.log(price.toPrecision(3));

const oneMil = 1000000;

console.log(oneMil.toLocaleString("en-IN"));

const minval = Number.MAX_VALUE;

console.log(minval);

console.log(Math.abs(-5));

console.log(Math.min(3, 2, 4, 64, 1));
console.log(Math.max(3, 2, 4, 64, 1));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 50;
const max = 60;
//mininmum in between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Data type Date and time

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());

console.log(
  myDate.toLocaleDateString("default", {
    weekday: "long",
  })
);

//month and Day start with 0 in JS

console.log(myDate.getMonth() + 1);
console.log(myDate.getDay() + 1);
console.log(myDate.getDate());

//Arrays in JavaScript

const myArray = [0, 1, 2, 3, 1, 45, 6, 4, 5, 47];

console.log("Orignal myArray", myArray);

myArray.push(51);

console.log("myArray push new element at the end of the Array", myArray);

myArray.pop();

console.log("myArray POP removing last element of the array", myArray);

myArray.unshift(27071984);

console.log("myArray unshift adding new element at 0 index", myArray);

myArray.shift();

console.log("myArray shift removing element at 0 index", myArray);

const myArrayJoin = myArray.join("-");

console.log("myArray Join convert data type to string", myArrayJoin);

const myArraySlice = myArray.slice(1, 3);

console.log("Orignal myArray after slice", myArray);
console.log(
  "myArray slice start from 1 and add till 3 but not included last paramter (1,3,) and not chnage orignal array",
  myArraySlice
);

const myArraySplice = myArray.splice(1, 3);

console.log("Orignal myArray after splice", myArray);
console.log(
  "myArray splice start from 1 and add till 3 but Included last parameter and change the orignal array",
  myArraySplice
);

const syndey = ["HarrisPark", "Clyde", "Blacktown"];

const adeliade = ["Prospect", "ClovellyPark", "Marion"];

// adeliade.push(syndey);

// console.log("after push with sydney overrite the existing array", adeliade);

// console.log(adeliade[3][0]);

const sydadl = syndey.concat(adeliade);

console.log(
  "after concat with adeliade return new array nad have to hold in new variable",
  sydadl
);

const allcities = [...syndey, ...adeliade];

console.log("after using spread operator (...)", allcities);

const queue = [10, 19, 15, 17, [12, 11, [13, 18, 16]]];

console.log("orignal queue with nesting Array", queue);

//const newqueue = queue.flat(Infinity);

//console.log("after using flat method on queue", newqueue);

console.log(Array.isArray("Rajan"));

console.log(Array.from("Rajan"));

console.log(Array.from({ student: "Rajan" })); //can't convert from object to array

let std1 = "james";
let std2 = "sam";
let std3 = "ronika";

console.log(Array.of(std1, std2, std3));

//objects 2 types

//1 singleton object type
//Object.create

//2 literals object type

const mySym = Symbol("Key1");

const jsUser = {
  name: "Rajan",
  "Full Name": "Rajan Bhatia",
  age: 20,
  [mySym]: "myKey1",
  location: "adeliade",
  email: "rajan@gmail.com",
  isLoggin: false,
  lastLoginDate: ["Monday", "Thursday"],
};

//2 ways to access objects .notetion and other is [] with string

console.log(jsUser);
console.log(jsUser.age);
console.log(jsUser["age"]);
console.log(jsUser["Full Name"]);
// Symbol access within object
console.log(typeof jsUser[mySym]);

jsUser.email = "rajan@yahoo.com";

//to loack the object freeze method use
//Object.freeze(jsUser);
jsUser.email = "rajan@hotmail.com";

console.log(jsUser);

jsUser.greeting = function () {
  console.log(`welcome ${this.name}`);
};

console.log(jsUser.greeting());

//Object singleton

const tinderUser = new Object();

tinderUser.id = "65465464";
tinderUser.name = "Jenny";
tinderUser.isLoggedn = false;

console.log("tinder data", tinderUser);

const obj1 = { 1: "a", 2: "b", 3: "c", 4: "d" };

const obj2 = { 5: "y", 6: "x", 7: "t", 8: "r" };

// const obj3 = { obj1, obj2 };
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);

console.log("using object assign merging the object in to one", obj4);

const obj5 = { ...obj1, ...obj2 };

console.log("using spread operator merging the object in to one", obj5);

//when there multiple object in one array of the object
const college = [
  { id: 125, email: "g@gmail.com" },
  { id: 253, email: "s@gmail.com" },
];

console.log(college[1].id);

const objKeys = Object.keys(jsUser);

console.log(objKeys);

const objVlaues = Object.values(jsUser);

console.log(objVlaues);

const objEntires = Object.entries(jsUser);

console.log(objEntires);

const objcheck = jsUser.hasOwnProperty("email");

console.log(objcheck);





//Object Destructuring

const course = {
  courseName: "React",
  courseFees: "1000",
  courseInstructor: "Hitesh",
};

//course.courseName;

const { courseName: cName } = course;
// :cName is shorthand of courseName
//console.log(courseName);
console.log(cName);

//JSON

// {
//     "car": "totyota",
//     "modelYear" : 1988,
//     "price" : "$3000"
// }

//Functions

function sayMyName() {
  console.log("Rajan");
}
sayMyName();

function addition(num1, num2) {
  return num1 + num2;
}
const result = console.log(addition(20, 20));
console.log(addition(10, 10));
console.log(addition(10, "10"));

function loggedInUser(userName = "sam") {
  if (!userName) {
    console.log("Please enter user name");
    return;
  }
  return `${userName} welcome on our page`;
}
console.log(loggedInUser());

//console.log(loggedInUser("James"));

//console.log(loggedInUser("Rajan"));

//function with one paramter

function calculateCartPrice(num) {
  return num;
}
console.log(calculateCartPrice(200));

// using rest operator in fuction parameter give power to fucntion accept infinite argument and retun in to Array
function calculateCartPrices(...num1) {
  return num1;
}
console.log(calculateCartPrices(200, 500, 700));

const car = {
  color: "black",
  price: 5000,
};

function handleObject(anyObject) {
  console.log(
    `Car Color is ${anyObject.color} and price is ${anyObject.price} AUD`
  );
}
// Passing object which declare out side of fucntion as argument
//handleObject(car);

//Passing ojbect direct as agument
handleObject({
  color: "white",
  price: 7000,
});

const myCarsPrices = [5000, 7000, 90000, 50000];

function retunCarValue(getArray) {
  return getArray[2];
}
// passing array which is declare outside of function as arugment //90000
//console.log(retunCarValue(myCarsPrices));

// passing array direct as argument //140000
console.log(retunCarValue([8000, 120000, 140000]));

//Scopes

let house1 = 23;
const house2 = 25;

if (true) {
  let house1 = 19;
  const house2 = 20;
  var house3 = 21;
  //console.log(house1);
  //console.log(house2);
}

//let and const will not availabe outside fo scope {}
// var is availabe at global scope

//console.log(house1);
//console.log(house2);
//console.log(house3);

//nested scope function

function one() {
  const username = "Rajan";
  function two() {
    const website = "mtechno";
    console.log(username);
  }
  //console.log(website);

  two();
}
one();

// function expression

//fucntion declare as normally than excecution can call any where
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}
//console.log(addOne(5));

// if function declare as expression than execution always after funtion
//console.log(addThree(5));
const addThree = function (num) {
  return num + 2;
};

//console.log(addThree(5));

// this keyword

const webUser = {
  webUserName: "James",
  price: 9000,

  welcomeMessage: function () {
    console.log(`Hello ${this.webUserName}, welcome to mtechno`);
    console.log(this);
  },
};

webUser.welcomeMessage();

console.log(this);

function test1() {
  console.log("from test1", this);
  //here this reference to global variable
}
test1();

//Arrow function

const test = () => {
  console.log("from test", this);
  // here in arrow function : this keyword is not accesible
};
test();

//IFFIE
// Immedieately Invoked Function Expression

// IIFE with name function
(function IIFE() {
  console.log(`DB CONNECTED FROM IIFE FUNCTION`);
})();

//IIFE with arrow function
(() => {
  console.log(`DB CONNECTED FROM ARROW FUNCTION`);
})();

//IIFE witn arrow funciton and parramter
((DBNAME) => {
  console.log(`DB CONNECTED FROM ARROW FUCNTION ON DB ${DBNAME}`);
})("MG1");

//Control flow with condition

const score = 300;
if (score > 500) {
  let result = "pass";
  console.log(`student is ${result}`);
}

// let and const is block scope not availabe out side of scope
//console.log(`student is ${result}`);

//switch case in JS
const balance = 950;
switch (balance) {
  case 750:
    console.log("balance is equal  750");
    break;
  case 950:
    console.log("balance is equal  950");
    break;
  case 1200:
    console.log("balance is greater than 1000");
    break;
  default:
    console.log("balance is equal to 1000");
    break;
}

//truthy and falsy value in JS

//falsy values
// false,
// 0,
// -0,
// BigInt 0n
// null,
// undefined,
// NaN

//truthy values

//string value
// const userEmail = "raj@gmail.com"
//emplty string
// const userEmail = ""
//empty array
// const userEmail = []
// "0", "false",
//space in string" "
//empty object, array, function

//check empty aray[]

let memberArray = [];

if (memberArray.length === 0) {
  console.log("memberArray is empty");
}

//check empty opbject

let memberObject = {};

if (Object.keys(memberObject).length === 0) {
  console.log("memberObject is empty");
}

//Nullish coalescing operator (??): null undefined

//?? null and undefined safety check

let val1;
//val1 = 27 ?? 10;
//val1 = null ?? 27;
val1 = undefined ?? 27;
//whichever value got assigned first other than null or undefined that will allocated
//val1 = null ?? 27 ?? 30;
console.log(val1);

//Terniary operator

//condition ? true : false;

const housePrice = 500000;
housePrice <= 300000
  ? console.log("greater than 400000")
  : console.log("less than 400000");

//Loops (iterations)

//for

for (let i = 1; i <= 10; i++) {
  //const nn = i;
  console.log("till 10", i);
}

for (let i = 1; i <= 5; i++) {
  console.log(`outer loop value ${i}`);
  for (let j = 1; j <= 5; j++) {
    //console.log(`inner loop value${j} and outer loop ${i}`);
    console.log(i + "*" + j + " = " + i * j);
  }
}

let numArray = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numArray.length; i++) {
  const element = numArray[i];
  console.log(element);
}

let carCollection = ["audi", "toyota", "nissan"];

for (let i = 0; i < carCollection.length; i++) {
  const cars = carCollection[i];
  console.log(i + 1, cars);
}

//break and contiue

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    console.log(`break found 3`);
    break;
  }
  console.log(`value of i ${i}`);
}

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    console.log(`continue found 3`);
    continue;
  }
  console.log(`value of i ${i}`);
}

//while loop

let num4 = 1;
while (num4 <= 10) {
  console.log(`Value of num4 from while loop ${num4}`);
  num4 = num4 + 2;
}

let arr = 0;
while (arr < carCollection.length) {
  console.log(`value of Cars from while loop ${carCollection[arr]}`);
  arr = arr + 1;
}

//do while loop
//will run one time at least as its check the condition after

let num5 = 11;
do {
  console.log(`score is ${num5}`);
  num5++;
} while (num5 <= 10);

//for of

for (const num of numArray) {
  console.log(`for of loop`, num);
}

for (const car of carCollection) {
  console.log(`for of loop`, car);
}

//map
// always return uniqu values
// not iterable witn for loop and for in, for of

const map = new Map();
map.set("SA", "South Australia");
map.set("NSW", "New South Wales");
map.set("TAS", "Tasmania");
map.set("TAS", "Tasmania");

console.log(`using map.set`, map);

for (const value of map) {
  console.log(`value from map using for of`, value);
}
for (const key of map) {
  console.log(`key from map using for of`, key);
}

//destructring of key and value
for (const [key, value] of map) {
  console.log(`key and value from map using for of :`, key, `=>`, value);
}

//object are not iterable with for of

//for in loops on Objcet iteration

const langObject = {
  js: "javaScript",
  rb: "ruby",
  cpp: "C++",
};

for (const key in langObject) {
  console.log(`${key} short cut of ${langObject[key]}`);
}

// for in loops on array

//arrays also have keys by default is index
const programming = ["js", "C++", "java"];

for (const key in programming) {
  console.log(programming[key]);
}

// for in on map, not iterable

for (const key in map) {
  console.log(key);
}

programming.forEach(function (p) {
  console.log(`foreach with normal funciton ${p}`);
});
programming.forEach((p) => {
  console.log(`from foreach with arrow`, p);
});

//foreach with function reference
function printMe(p) {
  console.log(`foreach with function reference`, p);
}
programming.forEach(printMe);

// foreach with all possible paramter
programming.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//for each on objcet
const companies = [
  {
    name: "Google Alpha",
    category: "Product Based",
    start: 1984,
    end: "till-date",
  },
  {
    name: "PayTM India ",
    category: "Product Based",
    start: 2005,
    end: "till-date",
  },
  {
    name: "Microsoft",
    category: "Product Based",
    start: 1995,
    end: "till-date",
  },
  {
    name: "Facebook Meta",
    category: "Service Based",
    start: 2003,
    end: "till-date",
  },
  {
    name: "WhatsApp Meta",
    category: "Service Based",
    start: 2010,
    end: "till-date",
  },
];

//forEach never return anythings
companies.forEach((c) => {
  console.log(c.name);
});

//filter return filter data based on filter condition

const filterNum1 = numArray.filter((n) => {
  return n > 3;
});
console.log(
  "filterNum1 with explisit return key word if open scope{}",
  filterNum1
);

const filterNum2 = numArray.filter((n) => n > 4);
console.log("filterNum", filterNum2);

//filter num with foreach

let resultNum = [];
numArray.forEach((n) => {
  if (n > 5) {
    resultNum.push(n);
  }
});
console.log(`filter with foreach`, resultNum);

let comResult = companies.filter((c) => c.start < 2000);

comResult = companies.filter((c) => {
  return c.start <= 2003;
});

console.log(comResult);

const add10 = numArray.map((n) => n + 10);
console.log(add10);

//method chaining
const newNumArray = numArray
  .map((n) => n * 10)
  .map((n) => n + 7)
  .filter((n) => n > 50);

console.log(newNumArray);

//reduce

//reduce with function
const numArrayReduceTotal = numArray.reduce(function (pre, curr) {
  console.log(`pre :${pre} and curr ${curr}`);
  return pre + curr;
}, 7);
console.log(numArrayReduceTotal);

//reduce with arrow function

// //let initialValue = 5;
// const newNumArrayReduce = numArray.reduce(
//   (pre, curr) => pre + curr,
//   initialValue
// );

const newNumArrayReduce = numArray.reduce((pre, curr) => pre + curr, 2);
console.log(newNumArrayReduce);

const shoppingCart = [
  { itemName: "js", price: 9000 },
  { itemName: "C#", price: 17000 },
  { itemName: "C++", price: 19000 },
  { itemName: "java", price: 25000 },
];

const shoppingCartTotal = shoppingCart.reduce(
  (pre, curr) => pre + curr.price,
  0
);

console.log(shoppingCartTotal);
