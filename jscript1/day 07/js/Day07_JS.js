function getColor(){
    var userColor = prompt('what is your fav color?');
    //printColor(userColor);
    console.log( printColor(userColor) );
}
function printColor(color){
    return 'The users fav color is '+ color;
    // console.log(color);
}
// getColor();

// in a new funtion, prompt user for 3 values: age, first, last
// console 'parsed' information
// in another function, accept 3 parameters, concat first & last, & square age.
// return back to console.log
// run script

/*
console.log(name);

var name = 'heather';

console.log(name);

// Immediately Invoked Function Excecutable (IIFE)
// hoisting

//function expression
var getVals = function(){
    var age = prompt('what is your age again?'),
        first = prompt('what is your first name?'),
        last = prompt('what is your last name?');
    console.log( parseInfo(age, first, last) );
};
getVals();

// function declaration
function parseInfo(x, y, z){
    return 'First name: ' + y +
            '. Last name: ' + z +
            '. Age squared: ' + x * x;
}
*/


/*
var form = '<form>'
        + '<div>Hello World</div>'
        + '<label for="firstName">First name'
        + '<input type="text" id="firstName" class="name" value=""/>'
        + '</label><br>'
        + '<label for="lastName">Last name'
        + '<input type="text" id="lastName" class="name" value=""/>'
        + '</label><br>'
        + '<label for="email">Email'
        + '<input type="text" id="email" value=""/>'
        + '</label><br>'
        + '<button type="button" onclick="submitBtn()">Submit</button>'
        + '</form>';
window.document.write(form);

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');

var d = document.getElementsByTagName('div')[0];
// console.log(d.textContent);

// console.log(names[0]);
// console.log(names[1]);

var btn = document.querySelector('button[type=button]');
// console.log(btn);

function submitBtn(){
    // console.log(firstName.value);
    // console.log(lastName);
    // console.log(email);

    // var names = document.getElementsByClassName('name');
    // console.log(names);
    // for(var i=0; i<names.length; i++){
    //     console.log(names[i].value);
    // }

    var inputs = document.querySelectorAll('input');
    console.log(inputs);

    for(var i=0; i<inputs.length; i++){
        console.log(inputs[i].value);
    }
}
*/

/*
var a = document.getElementsByTagName('a')[0];
a.addEventListener('click', function(e){
    //console.log(e);
    // alert('clicked on the anchor tag');
    // h1.textContent = 'Matthew David Higley';
});
a.addEventListener('mousedown', function(e){
    console.log(e);
});
a.addEventListener('mouseup', function(e){
    console.log(e);
});

addEventListener('keypress', function(e){
    //console.log(e);

    // if(e.charCode === 119){
    //     console.log('user moving up');
    // }else if(e.charCode === 97){
    //     console.log('user moving left');
    // }else if(e.charCode === 100){
    //     console.log('user moving right');
    // }else if(e.charCode === 115){
    //     console.log('user moving down');
    // }else{
    //     console.log('key not permitted');
    // }

    switch(e.charCode){
        case 119:
            console.log('user moving up');
            break;
        case 97:
            console.log('user moving left');
            break;
        case 100:
            console.log('user moving right');
            break;
        case 115:
            console.log('user moving down');
            break;
        default:
            console.log('invalid key');
    }
});

addEventListener('keydown', function(e){
    console.log(e);
});

// get charCode for 'w', 'a', 's', 'd'
// w === 119
// a === 97
// s === 115
// d === 100

*/

/*
var a = document.querySelector('a');
a.addEventListener('click', getTaInfo);

var ta = document.querySelector('textarea');
ta.addEventListener('mouseenter', taError);
ta.addEventListener('mouseleave', taUnerror);

var h1 = document.querySelector('h1');

function taError(){
    ta.style.backgroundColor = 'red';
}
function taUnerror(){
    ta.style.backgroundColor = 'white';
}

function getTaInfo(){
    h1.textContent = ta.value;
}
// target the h1

// on user anchor tag click, get textarea value
// set h1 textContent to equal textarea value
*/

var nav = document.querySelector('nav');

addEventListener('scroll', function(e){
    if(e.pageY > 150){
        nav.classList.add('fixed');
    }else{
        nav.classList.remove('fixed');
    }
});
