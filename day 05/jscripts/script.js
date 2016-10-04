/* Warm-up
//var fName = prompt("What's your name?");
//console.log(fName.length);
//Name += prompt("What's your last name?");
//console.log("plus sign" + fName + " " + lName);
//console.log(fName.concat(" " + lname));
//console.log(Name.indexOf("e"));
//console.log( fName.charAt(0).toUpperCase() + fName.substr(1, fName.length).toLowerCase() );
//var year = prompt("year of your car?");
//year > 95 || color === "red" ? console.log("will run") : console.log ("won't run");*/

/*Switch Statements
var date = "";
var month = new Date().getMonth();
console.log(month);
switch(new Date().getMonth()){
  case 0:
    date = "January";
    break;
  case 1:
    date = "February";
    break;
  case 2:
    date = "March";
    break;
  case 3:
    date = "April";
    break;
  case 4:
    date = "May";
  case 5:
    date = "June";
    break;
  case 6:
    date = "July";
    break;
  case 7:
    date = "August";
    break;
  case 8:
    date = "September";
    break;
  case 9:
    date = "October";
    break;
  case 10:
    date = "November";
    break;
  case 11:
    date = "December";
    break;

}
console.log(date);*/

/*Arrays - Fruit Example*/
var fruits = ["banana","apple","orange","mango"];
console.log(fruits)
fruits.push("kiwi"); //   #### push to add element ####
console.log(fruits)
fruits.pop("kiwi"); //   #### pop to subtract element ####
//console.log(fruits.length)
//console.log("My favorite fruits are " + fruits.join(", "));
fruits.reverse();
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);
//fruits.shift("kiwi");
//console.log(fruits);   #### commented out after getting to step below -- make sure to look through this! ####
//fruits.pop();
//console.log(fruits);

//fruits.splice(2, 2, "pineapple"); // #### 1st number is index you want to place
console.log(fruits);              // the new element, 2nd is to show how many will be removed ####

//var knife = fruits.slice(1, 4);  // #### 1st number is index to remove
//console.log(fruits);             // the first element, 2nd is the last, not including
//console.log(knife);              // the values in between ####

fruits.sort();
//console.log(fruits);

//var nums = ["b", "4", "5", "45", "a", "451"];       // #### DOES NOT SORT IN HUMAN WAYS,
//console.log(nums.sort());                          //  THIS IS BASED ON NUMERICAL VALUES ####

for(var  i = 0; i < 100; i++){
  if(i % 3 == 0){
    console.log("fizz");
  }
}

//var i = 0;
/*while(i < fruits.length){
  console.log(fruits[i]);      // #### commented after experimenting with output and seeing if it gives
  i++;                         // a proper listed result ####
}*/

/*do{
  console.log(fruits[i]);
  i++;                              //ignore this; they couldn't figure out how it broke
}while(fruits[i](i !== "orange"));*/
