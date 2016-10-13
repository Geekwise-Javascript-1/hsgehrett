var colors = ["red","blue","green","pink","purple"]
//alert(colors[2]);

//colors.unshift("mint");    //add to front of array
//console.log(colors);

//colors.pop("purple");  //remove from array
//console.log(colors);

//colors.shift("red");  //remove from front
//console.log(colors);

//colors.push("pearl");  //add to end
//console.log(colors);

//colors.splice(1, 2);  //number based removal throughout
//console.log(colors);

//colors.splice(3, 0, "magenta", "grey", "white");
//console.log(colors);

//colors.sort();       //sorting tools, sort goes alphabetical, reverse reverses
//colors.reverse();

//var newColors = colors.slice(1, 3);  //added and alerted 2 colors to this
//alert(colors);                       // without damaging the main array
//alert(newColors);

//for(var i = 0; i < colors.length; i++ ){
//  console.log("my favorite color is "+colors[i]);
//}

//var i = 0;
//while(1 < colors.length){
//  console.log("my new favorite color is "+colors[i]);
//  i++;
//}

/*var car = {
  make = "fiat"
  model = "500"
  year = "2013"
};
for var(key in car){
  console.log(car[key]);
}
*/

/*function printMyName (firstname, lastname){
  console.log(firstname + " " + lastname)
}
printMyName ("Heather", "Gehrett")

var p = "<p> this is my window </p>";
//window.document.write(p);

var myWindow = window.open ("", "myWindow", "width=200", "height=200");

function openWin(){
  window.open ("", "myWindow", "width=200", "height=200");
  window.document.write(p);
  myTimer = setTimeout(function() {myWindow.close()}, 3000)
}

openWin();

var btn = "<button onclick='closewin()'>Close myWindow</button>";
window.document.write(btn);

function closewin(){
  clearTimeout(myTimer);
}
*/

/*
var myVar = setInterval(function(){ setColor() }, 500);
var myVar = setInterval(setColor, 500);

function setColor(){
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "white" ? "blue" : x.style.backgroundColor == "red" ? "white" : "red";
}

var btn = "<button onclick='stopColor()'>Stop Toggle</button>";
window.document.write(btn);

function stopColor(){
    clearInterval(myVar);
}
*/

/*
var test = 'heather';
function getGlobalVar(){
    // console.log(test);
    // console.log(test);
    var fName = 'heather';
    function getLocalVar(){
        var lName = 'gehrett';
        console.log(fName);
        console.log(lName);
    }
    getLocalVar();
    console.log(fName);
    console.log(lName);
}
getGlobalVar('gehrett');
//console.log(test2);
*/

function first(fName){
    //console.log(fName);
    last(fName, 'Gehrett');
}

function last(x, lName){
    console.log(x + ' ' +lName);
}

first('Heather');

function middle(x, y){
    return x + ' Snow ' + y;
}
console.log( middle('Heather', 'Gehrett') );
