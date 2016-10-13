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
          unvisited[i][j] = true;
        }
    }

    var currentCell= [Math.floor(Math.random() * y),
                      Math.floor(Math.random() * x)];

    var path = [currentCell];

    unvisited[currentCell[0]][currentCell[1]]
      = false;

    var numOfVisited = 1;
    while(numOfVisited < totalCells){
      var possible =
                  [[currentCell[0]-1], 0, 2,], [currentCell[1]+1, 1, 3], //checking if y value of neighbor cell (top) is inside the grid
                  [currentCell[0]], [currentCell[1], 2, 0],
                  [currentCell[0]], [currentCell[1]-1, 3, 1]];

      var neighbors = [];
      for(var l = 0; l < 4; l++){
        if(possible[l][0] > -1 &&
            possible[l][0] < y &&
            possible[l][1] > -1 &&
            possible[l][1] < x &&
            unvisited[possible[l][0]][possible[l][1]]){
              neighbors.push(possible[l]);
            }
      }
    }

}(4, 4);
