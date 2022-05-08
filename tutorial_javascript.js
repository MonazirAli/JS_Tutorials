/*
7 data types
1> undefined -- value is not set anything yet
2> null -- value set as nothing
3> boolean  -- true /false
4>string 
5> symbol---immutable primitive value i.e unique
6> number
7> object -- can store a lot of different key value pairs

variable --allows computer to store and manipulate data in a dynamic fashion
*/

var name = "Confidence"; //used through out whole program

let name1 = "password"; //will be used within the scope of where you declare that

const pi = 3.14; // it can never change

// console.log  -- allows you to see things in console

var a = 8;
var z = 'I am a "double quoted" string inside "double quotes"';
//console.log(z);
var b = `'I am using 'single quote 'as well as "double quotes" using backtick and single quote. It can be achieved by single quote also'`;
/*
You can also escape other sequence using  backslash(\) i.e:  ',",\,n (new line), r(carriage return) , t(tab), b(backspace), f(form feed)
*/
//console.log(b);
var lines = "First line\n\t\\Second Line\nThird Line";
//console.log(lines);
// strings are immutable i.e you can not change a single char out of total
var name_length = name.length;
//console.log(name_length);
var first_letter = "";
first_letter = name[0];
//console.log(first_letter);
var last_letter = name[name.length - 1];
//console.log(last_letter);

//  **** Word Blanks start here

function wordBlanks(noun, adjective, verb, adverb) {
  var result = "";
  result +=
    "The " +
    adjective +
    " " +
    noun +
    " " +
    verb +
    " to the store " +
    adverb +
    ".";
  return result;
}
//console.log(wordBlanks("dog","big","ran","quick"));

// **** Word Blanks end here

const firstName = "Monazir"
const LastName = "Khan"

const Full_name = `My full name is ${firstName} ${LastName}`
//console.log(Full_name)

//const fullname = "My full name is " + firstName + " " + LastName

var myArray = [
  ["Jhon", 07],
  ["Wick", 0111],
];

//console.log(myArray[1][0]);  //////////////////??????????????????
myArray.push(["order", 01]); //append data to the end with push
//console.log(myArray);
var removed_lastFrom_array = myArray.pop(); //remove data from the end of array with pop
//console.log(myArray);
//console.log(removed_lastFrom_array);
var removed_firstFrom_array = myArray.shift(); // shift remove first element
//console.log(myArray);
//console.log(removed_firstFrom_array);

myArray.unshift(["Jhon", 0101]); //unshift add data to first element
//console.log(myArray);

var myGlobal = 10;

function fun1() {
  oopsGlobal = 5; // here var is not used to define variable so it  will be treated as global variable
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
// fun1(); /////////// why fun 1 call is required???????????????

// fun2();
//local variable precedence over global variable in functions

///  *******  stand in line  start here

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

/*
console.log("Before : "+ JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After : " + JSON.stringify(testArr));
*/

/////****** stand in line end here

//   == equality operator , attempt both value compared to comman type
//    === strict equality operator   ,  does not do type conversion

////*************  Golf code start here  */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home!"]
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }

}

//console.log(golfScore(5,4));

////*************  Golf code end here  */

// switch start

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = "Gamma";
      break;
    case 4:
      answer = "Delta";
      break;
    default:
      answer = "other";
      break;
  }
  return answer;
}

//console.log(caseInSwitch(1));

// switch end

// counting card start

var count = 0;
function cc(cards) {
  switch (cards) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;

  }
  var holdBet = 'Hold';
  if (count > 0) {
    holdBet = 'Bet'
  }
  return count + " " + holdBet;
}
cc(2); cc('K'); cc(7); cc('K'); cc('A'); cc(2); cc(2); cc(2);
//console.log(cc(4));

// counting card ends

// Creating  objects---object are similar to arrays except of using indexes to  access data you use properties
var ourDog = {
  "name": "Dormamu",
  "legs": 4,
  "tails": 1,
  "freinds": ["Everything!"],
  "have hair": "Yes"
};
//console.log(ourDog.legs);
//console.log(ourDog["have hair"]);// accessing via bracket as instsnce(have hair) of object have space b/n //them
ourDog.name = "Mar Spector";//changing name
//console.log(ourDog);
ourDog['bark'] = 'woof!';// adding new property
ourDog.walk = 'Yeah'; //add new property
//console.log(ourDog); 
delete ourDog.walk;/// deleting the property
//console.log(ourDog);

function checkObj(checkProp) {
  if (ourDog.hasOwnProperty(checkProp)) {
    return ourDog[checkProp];
  } else {
    return "Not Found"
  }
}
//console.log(checkObj("tails"));


/// record collection start  
var collection = {
  "2548": {
    "album": "Coke Studio",
    "artist": "Atif Aslam",
    "tracks": [
      "Aadat",
      "Mujh ko bata mera dar hai kaha Maula"
    ]
  },
  "2468": {
    "album": "Nasheed",
    "artist": "Nasheed",
    "tracks": [
      "maula ya salli wasalam",
      "Na koi aap jaisa hoga"
    ]
  },
  "1245": {
    "artist": "Everyone",
    "tracks": []
  },
  "5439": {
    "artist": "Mera dil kahi dur paharo me kho gya",
  }

};
//keep a copy of collection for tests start here
var collectioncopy = JSON.parse(JSON.stringify(collection));
//keep a copy of collection for tests ends
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(2548, "tracks", "asmaul husna")
//console.log(updateRecords(5439,"album","Mer nabi pyare nabi"));

////record collection ends

//profile lookup start here
var contacts = [
  {
    "firstName": "Soheb",
    "lastName": "Hussain",
    "number": "9876543210",
    "likes": ["Bike riding", "food", "travelling"]
  },
  {
    "firstName": "Faizan",
    "lastName": "Hassan",
    "number": "1234567890",
    "likes": ["Story", "Home",]
  },
  {
    "firstName": "Ekhlaque",
    "lastName": "Hussain",
    "number": "98976123450",
    "likes": ["People", "Mobile"]
  },
  {
    "firstName": "Shahrukh",
    "lastName": "Khan",
    "number": "1234598760",
    "likes": ["People", "Bullet"]
  }
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such poperty exists"
    }
  }
  return "No such contact found on contacts";
}
var data = lookUpProfile("Shahrukh", "likes")
//console.log(data);
//profile lookup end  here

//Generate random fraction start here 
function randomfraction() {
  return Math.random();//number is from 0 to <1
}
//console.log(randomfraction());
//Generate random fraction ends here

//Generate random whole number start here
function randomWholeNum() {
  return Math.floor(Math.random() * 100);//generate no b\n 0 to 99
}
//console.log(randomWholeNum());//

//Generate random whole number ends  here

//Generate random whole number  within range start  here
function ourRandomRanges(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;//generate no b\n  start to end
}
var myRandom = ourRandomRanges(5, 50);
//console.log(myRandom);
//Generate random whole number  within range ends  here

//convert string to integer begins  here
function convertToInteger(str) {
  return parseInt(str);
}
//console.log(convertToInteger("56"));
//convert string to integer ends  here

//convert binary string to integer begins  here
function convertBinaryToInteger(str) {
  return parseInt(str, 2);// here 2 is passed to tell it is of base 2 i.e  binary
}
//console.log(convertBinaryToInteger("10110"));
//convert binary string to integer ends  here

//conditonal ternary operator begins here
// condition? statement if true: statement if false;
function checkEqual(a, b) {
  //if(a===b){return true;} else {return false};
  return a == b ? true : false;//return a===b;
}
//console.log(checkEqual(5,5));
//conditonal ternary operator ends here

//Multiple conditonal ternary operator starts here
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "Zero";
}
//console.log(checkSign(-1));
//Multiple conditonal ternary operator ends here

//Difference between var and let keyword begins here
// let wont let you declare a variable twice
let cat="Meow";  cat="abc";//here cat cannot be declare twice using let
var cts="abc";var cts="xyz";//here cts is declared twice using var
//"use strict"; //enable strict mode which catches coding mistake and unsafe action.use it in start of your js file
//let is only defined in block scope while var is defined in function scope  . 
function checkScope(){
"use strict"; 
  let i = "function scope";//We can access var outside the scope . To check comment this line and change line number 391 variable 'i' to type var.
      if(true){
         let i="Block scope";
          console.log("Block scope of i is : ",i);
      }
  console.log("Functional scope of i is : ", i);

}
//checkScope();
//Difference between var and let keyword ends here

//Read only variable i.e const keyword starts here
//it has all feature of let , you cannot reassign a const
function printManyTimes(str){
  "use strict";
  const SENTENCE = str + " is cool!";
  //SENTENCE= str+" is awesome"; it cannot be changed
   for (let i=0; i<str.length; i+=2){
     console.log(SENTENCE);
   }
}
//printManyTimes("GitHub");
//you should use let and const
//Read only variable i.e const keyword ends here

//Mutate an array declared with const begins  here
const a1=[1,2,3,4];
function mutateArray(){/*(array){
array[0] = 9; array[1] = 8; array[2] = 7;array[3]=6;
return array;*/

  "use strict"
  a1[0] = 9; a1[1] = 8; a1[2] = 7; a1[3] = 6;
} mutateArray();
//console.log(a1);

//Mutate an array declared with const ends here

//Prevent object mutation start here
function freezeObj(){
  "use strict"
  const MATH_CONSTANT={ PI:3.14 };
Object.freeze(MATH_CONSTANT);
  try{
    MATH_CONSTANT.PI=37;
  }catch(ex){
    console.log(ex);
  }
  return MATH_CONSTANT.PI;
}
//const PI= freezeObj();
//console.log(PI);
//Prevent object mutation end here

// use arrow function to write concise anonymous functions starts here
/*var magic= function(){
  return new Date();
};*/
const magic=()=>new Date();//same as above
// use arrow function to write concise anonymous functions ends here

//write arrow function with parameter starts here

const myConcat=(ar1,ar2)=> ar1.concat(ar2);
//console.log(myConcat([1,2,3],[4,5]));
//write arrow function with parameter ends here

// write higher order arrow function starts here
//example 1 is
 const realNumberArray =[4,5.6,-9.8,3.14,42,6,8.34,-2];
 const squareList=(arr)=>  {
   const squaredInteger= arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);
  return squaredInteger;
 };
 const squaredInteger=squareList(realNumberArray);
 //console.log(squaredInteger);//print square of integer number which is >0

//example 2 is 

const increment =(function(){
  return function increment(number, value=1){
    return number + value;
  
};
})  ();
//console.log(increment(5,2));// value is passed  as 2 so incremented by 2
//console.log(increment(5));//as value is set to 1 so incremented by 1


// write higher order arrow function ends here

//use rest operator with function parameter begins here
const sumArray=(function() {
  return function sum(...args) {//(x,y,z){
    //const args=[x,y,z];
    return args.reduce((a,b)=>a+b,0);
  };
})();
//console.log(sumArray(1,2,3,4,5,6,7,8,9,10));
//use rest operator with function parameter ends here

//use spread operator to evaluate array in-place starts here
const arr12=["JAN","FEB","MAR","APR","MAY"];
let arr21;
(function(){
 arr21=[...arr12];//it is not making arr12 == arr21 and we are making content of arr12 eqals arr21  i.e spread out content of arr12 into arr21
arr12[0]="Sunday";
})();
//console.log(arr21);
//use spread operator to evaluate array in-place ends here

//use destructing assignment to assign variables from objects starts here
var voxel={ x:3.6, y :7.4 ,z:6.54};
const{x:a2,y:b2,z:c2}=voxel;//a=3.6,b=7.4,c=6.54

const AVERAGE_TEMPERATURE={
  today :77.5,tomorrow:79
};
function getTempOfTmrw(avgTemparature){
  "use strict";
  const {tomorrow: tempOfTomorrow }= avgTemparature;//get tommorow feild from avgTemperature object and assignit to the tempOfTomorrow variable
  return tempOfTomorrow;
}
//console.log(getTempOfTmrw(AVERAGE_TEMPERATURE));
//use destructing assignment to assign variables from objects ends here


//use destructing assignment with nested objects start here
const LOCAL_FORECAST={
  today:{min:72,max:83},
  tomorrow:{min :73.6,max:84.3}
};
function getMaxOfTmrwForecat(forecast){
"use strict";
const{tomorrow:{max: maxOfTmrwForecat}} = forecast;
return maxOfTmrwForecat;
}
//console.log(getMaxOfTmrwForecat(LOCAL_FORECAST));
//use destructing assignment with nested objects ends here

//use destructing assignment to assign variable from array start here
const[z3,x, ,y]=[1, 2, 3, 4,5,6];
//console.log(z3,x,y);

let a4=8,b4=6;
(()=>{
  "use strict";
  [a4,b4]=[b4,a4]
})();
//console.log("a is :"+a4+" and b is :"+b4);
//use destructing assignment to assign variable from array  ends here

//use destructing assignment with the rest operator start here
const source =[1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
const [ , ,...arr]=list;

return arr;
}
const arr5=removeFirstTwo(source);
//console.log(arr5);console.log(source);
//use destructing assignment with the rest operator ends here

//use destructing assignment to pass an object as a function parameter start here

const stats={
  max: 56.78,
  standard_deviation: 4.38,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half=(function(){
return function half({max,min}){//(stats){//only passing the required property of an object
return (max+min)/2.0;//(stats.max + stats.min) / 2.0;
};
})();

//console.log(stats);console.log(half(stats));
//use destructing assignment to pass an object as a function parameter ends here

//create string using template literals start here
const person={
  name :"H.A Helwa",
  age :37
};
const greting=`Hello, My name is ${person.name} and I am ${person.age} years old.`;
//console.log(greting);

//example 2
const result={
success:["max-length","no-amd","prefer-arrow-function"],
failure:["no-var","var-on-top","linebreak"],
skipped:["id-blacklist","no-dup-keys"]
};
function makeList(arr){
  const resultDisplayArray=[];
  for(let i=0;i<arr.length;i++){
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}
const resultDisplayArray=makeList(result.failure);
//console.log(resultDisplayArray);
//create string using template literals ends here

//writing concise object literal declaration using simple field starts here
const createPerson=(name,age,gender)=>({name,age,gender});/*{
return {
  name: name,
  age: age,
  gender: gender
};
};*/
//console.log(createPerson("Tony",57,"Male"));
//writing concise object literal declaration using simple field ends here

//write concise declarative function begins  here
const bicycle={
  gear:2,
  setGear (newGear) {//setGear:function(newGear){  // both are same in line 610
    "use strict";
    this.gear = newGear;
  }
};
bicycle.setGear(3);
//console.log(bicycle.gear);

//write concise declarative function ends  here
class SpaceShuttle{
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus= new SpaceShuttle('Jupiter');
//console.log(zeus.targetPlanet);
//use class syntax to define  a constructor function

//use getter and setter to control access to an object starts here
class Book  {
  constructor(author){
    this._author = author;
  }
  //getter 
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedWriter){
this._author = updatedWriter;
  }
}

function makeClass(){
class Thermostat{
  constructor(farenhiteTemp){
    this._temp=5/9*(farenhiteTemp-32);
  }
  get temperature(){return this._temp;}
  set temperature(updatedTemperature){this._temp=updatedTemperature;}
}
  return Thermostat;
}
const Thermostat =makeClass();
const thermos = new Thermostat(100);
let temp=thermos.temperature;
//console.log(temp);
thermos.temperature=25;
temp=thermos.temperature;
//console.log(temp);
//use getter and setter to control access to an object ends here

//understand the difference between import and require start here

//understand the difference between import and require ends here