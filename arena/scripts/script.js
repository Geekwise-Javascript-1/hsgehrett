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

    var visited = 1;
    while(visited < totalCells){
      var possible = [
                  [ currentCell[0]-1, currentCell[1], 0, 2 ], //checking if y value of neighbor cell (top) is inside the grid
                  [ currentCell[0], currentCell[1]+1, 1, 3 ],
                  [ currentCell[0]+1, currentCell[1], 2, 0 ],
                  [ currentCell[0], currentCell[1]-1, 3, 1 ]];
      var neighbors = [];
      for(var l = 0; l < 4; l++){
        if(possible[l][0] > -1 &&
            possible[l][0] < y &&
            possible[l][1] > -1 &&
            possible[l][1] < x &&
            unvisited[ possible[l][0] ][ possible[l][1] ]){
              neighbors.push( possible[l] );
            }

      }

      if(neighbors.length){
        var next = neighbors[ Math.floor(Math.random() * neighbors.length) ];

        cells[ currentCell[0] ][ currentCell[1] ][ next[2] ] = 1;
        cells[ next [0] ][ next[1] ][ next[3] ] = 1;
        unvisited[ next[0] ][ next[1] ]= false;

        visited++;

        currentCell = [ next[0], next [1] ];
        path.push(currentCell);
      }else{
        currentCell = path.pop();
      }
    }
    return cells;
}(4, 4);

var table = document.getElementById('table');
var newBtn = document.createElement('button');

var form = document.createElement('form');

var label1 = document.createElement('label');
  label1.placeholder = 'Name';
  label1.setAttribute('for', 'name');
var input1 = document.createElement('input');
  input1.id = 'name';
  input1.type = 'text';
  input1.placeholder = "Your Name Here";

var label2 = document.createElement('label');
  label2.textContent = 'Your E-Mail'
  label2.setAttribute('for', 'email')
var input2 = document.createElement('input');
  input2.id = 'email';
  input2.type = 'email';
  input2.placeholder = 'Your E-Mail Here';

var submit = document.createElement('input');
  submit.id = 'submit';
  submit.type = 'submit';
  submit.value = 'Submit';

var formI1 = document.getElementById('name');

var formI2 = document.getElementById('email');

var formBtn = document.getElementById('submit');

formBtn.addEventListener('click', function(evt){
  alert(formI1.value + ':' + formI2.value);
});

label1.appendChild(input1);
label2.appendChild(input2);
form.appendChild(label1);
form.appendChild(label2);
form.appendChild(submit);
form.appendChild(form);

table.appendChild(form);
