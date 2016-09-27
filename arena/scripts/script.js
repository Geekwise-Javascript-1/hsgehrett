//console.log('hello world!');
var fName="Snow";
var lName="Gehrett";
var age=19;
var dist=2.75;
var gender=true;
var list=["eggs", "bread", "milk"]
var car={
  make:"fiat",
  model:"abarth",
  year:"14",
};

console.log(fName[3]);
console.log(lName.length);
console.log(typeof age);
console.log(typeof dist);
console.log(typeof gender);
console.log(list[1]);
console.log(car.model);

// concepts in order:
// string
// number
// float
// boolean
// array
// object

var hobby="Arena FPS Games";

/*alert("First and Last Name: " + fName + " " + lName + ", Age: " + age +
 ", Hobby: " + hobby);*/

var uName=prompt("What is your name, stranger?");
console.log(uName);
alert(uName);

var pWord=prompt("What shall be your password?");
console.log(pWord);
alert(pWord);

var plAge=prompt("How old are you, stranger?");
console.log(parseInt(plAge));
