/*   .......PRAVOUHLY TROJUHOLNIK 
let a,b,c;

document.getElementById("submit").onclick = function() {
    a = document.getElementById("atext").value;
    a = Number(a);

    b = document.getElementById("btext").value;
    b = Number(b);

    c = Math.sqrt((Math.pow(a,2) + Math.pow(b,2)))

    document.getElementById("clabel").innerHTML = "Side C : " + c;
}


CISELKA V JAVASCRIPTE

let count = 0;

document.getElementById("decrease").onclick = function() {
    count -= 1;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("increase").onclick = function() {
    count += 1;
    document.getElementById("countlabel").innerHTML = count;
}



RANDOM NUMBER GENERATOR

let x;
let y;
let z;

document.getElementById("roll").onclick = function() {
    let x = Math.round(Math.random() * 20) + 1;
    let y = Math.round(Math.random() * 20) + 1;
    let z = Math.round(Math.random() * 20) + 1;

    document.getElementById("xlabel").innerHTML = x;
    
    document.getElementById("ylabel").innerHTML = y;

    document.getElementById("zlabel").innerHTML = z;
}

UPRAVOVANIE STRINGOV

let username = "RONDON";
let phone = "123-123-1322"

console.log(username.length);
console.log(username.charAt(0));
console.log(username.indexOf('O'));
console.log(username.lastIndexOf('O'));

username = username.trim(); // ODSTRANI MEDZERY PRED A ZA MENO
username = username.toLowerCase();

phone = phone.replaceAll("-","")

console.log(username);
console.log(phone);

SLICE

let fullname = "Hovno Zmakove";
let first_name;
let last_name;

last_name = fullname.slice(7)
first_name = fullname.slice(0,7)

last_name = fullname.slice(fullname.indexOf(" ") + 1); // NAJDE SPACE V STRINGU 
first_name = fullname.slice(0,fullname.indexOf(" "))

console.log(fullname)
console.log(first_name)
console.log(last_name)

METHOD CHAINING

let username = "rondon";

let letter = username.charAt(0).toUpperCase();

console.log(letter);


IF ELSE


let age = 70;

if(age >= 65){
    console.log("You are a senior")
}
else if (age >= 18) {
    console.log("You are an adult")
}
else if(age < 0){
    console.log("You are a kkt")
}

else {
    console.log("You are a child")
}


let online = true;

if(online) {
    console.log("You are online")
}
else {
    console.log("You are offline")
}
*/