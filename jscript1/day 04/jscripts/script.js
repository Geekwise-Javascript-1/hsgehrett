var three = 3
var two = 2
//alert(two+three);
//alert(three-two);
//alert(three*two);

var numOne = 50
var numTwo = 5
//alert(numOne/numTwo);

var r1 = 13
var r2 = 10
//alert(r1 % r2);

/*
Math
random()
round()
floor(x)
ciel()
min()
max()
pow()
*/


/* RNG jscript
var randNum = Math.random();
var roundNum = Math.round(randNum);
var floorNum = Math.floor(randNum);
var ceilNum = Math.ceil(randNum);

var newNum = randNum * 5;
var roundedNum = Math.ceil(newNum);
var randomNum = Math.ceil(Math.random() * 5);

var smallestNum = Math.min(5, 10, 2, 45, 8);
var largestNum = Math.max(5, 10, 2, 45, 8);

var powNum = Math.pow(8,2);

// Date Machine

var locale = "en-us";
var theDate = new Date();
var theYear = theDate.getFullYear();
//console.log = (theYear);
var currDate = theDate.getDate();
var longWeekday = theDate.toLocaleString( 'pl', {weekday: "long"} );
//console.log = (longWeekday);

var num = Math.random() * 10;
var mon = theDate.toLocaleString("en-us", {month: "short"});
//alert( num + " : " + mon + " " + theDate + ", " + theYear );

// String Object
/*
var fName = prompt("What's your first name?");
//console.log(fName.length);
//console.log(fName.charAt(2));
//console.log(fName.indexOf('a'));
var lName = prompt("What's your last name?");
var pName = fName.concat("").concat(lName);
//console.log(name)
//console.log(name.substr(0, fName.length));
//console.log(fName.toUpperCase())
//console.log(fName.toLowerCase())

console.log(fName.trim());
*/

/* weird name thing

var fName = prompt("What's your first name?");
var lName = prompt("What's your last name?");
fName = fName.toLowerCase();
console.log(fName.substring(fName.charAt(0).toUpperCase().concat(fName.substring(1, 255))));
fName = lName.toLowerCase();
console.log(lName.charAt(0).toUpperCase().concat(lName.substring(1, 255))));
var pName = (fName.concat("").concat(lName));
alert(pName); */

/* var food = "linux mint";

  if(food == "apple"){
    console.log("it's true");
  }else if(food == windows){
    console.log("windows is true");
  }else{
    console.log("it's false");
  }*/

/* var num1 = prompt("Pick a number!");

num1 = parseInt(num1);

//&& = and
//|| = or

  if(num1 > "3"){
    console.log(">");
  }else if(num1 === "3"){
    console.log("=");
  }else{
    console.log("<");
  }
 */

/* Drinking Age and Gender prompt example

 var ageDrink = prompt("How old are you?");
 var genderDrink = prompt ("and your Gender?");

 ageDrink = parseInt(ageDrink);

 if(ageDrink >= "21" && genderDrink === "male"){
   console.log("Back in line, bud.");
 }else if(ageDrink >= "21" && genderDrink === "female"){
   console.log("You're in for free.");
 }else{
   console.log("You're too young, go home.");
 }
*/

/* Ternary Operator
var = prompt("What's your age again?")

(num >= 21)? console.log("Can enter.") : console.log("Denied Eentry, too young.");
 */
