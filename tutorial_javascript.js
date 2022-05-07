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


/// record collection start  o2:01:00




////record collection ends 

let obj = {
  cat: {
    has_tail: "1",
    legs: "4"
  },
  dog: "woof"
};

console.log(obj.cat.legs);

console.log(obj)