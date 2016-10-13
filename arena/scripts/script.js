/* Useless precode stuff
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

var hobby="Arena FPS Games";*/

/*alert("First and Last Name: " + fName + " " + lName + ", Age: " + age +
 ", Hobby: " + hobby);*/

/*var uName=prompt("What is your name, stranger?");
console.log(uName);
alert(uName);

var pWord=prompt("What shall be your password?");
console.log(pWord);
alert(pWord);

var plAge=prompt("How old are you, stranger?");
console.log(parseInt(plAge));
*/

/*Movement*/

var n = document.getElementById("n");
var e = document.getElementById("e");
var s = document.getElementById("s");
var w = document.getElementById("w");

n.addEventListener("click", function(evt){
  moveNorth(evt);
});
function moveNorth(evt){
  console.log(evt);
  console.log("Went North.");
}

e.addEventListener("click", function(evt){
  moveEast(evt);
});
function moveEast(evt){
  console.log(evt);
  console.log("Went East.");
}

s.addEventListener("click", function(evt){
  moveSouth(evt);
});
function moveSouth(evt){
  console.log(evt);
  console.log("Went South.");
}

w.addEventListener("click", function(evt){
  moveWest(evt);
});
function moveWest(evt){
  console.log(evt);
  console.log("Went West.");
}

/*Grid*/

var grid = function(x, y){
  var totalCells = x * y;
  var cells = [];
  var unvisited = [];

    for(var i = 0; i < y; i++){
      cells[i] = [];
      unvisited[i] = [];
        for(var j = 0; j < x; j++){
          cells[i][j] = [0, 0, 0, 0];
        }
    }
}(9, 9);
