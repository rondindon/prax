/*
=====================PRAVOUHLY TROJUHOLNIK =====================
let a,b,c;

document.getElementById("submit").onclick = function() {
    a = document.getElementById("atext").value;
    a = Number(a);

    b = document.getElementById("btext").value;
    b = Number(b);

    c = Math.sqrt((Math.pow(a,2) + Math.pow(b,2)))

    document.getElementById("clabel").innerHTML = "Side C : " + c;
}


=====================CISELKA V JAVASCRIPT=====================

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



=====================RANDOM NUMBER GENERATOR=====================

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

=====================SLICE=====================

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


=====================IF ELSE=====================


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

=================CHECKBOX A RADIO BUTTON=====================

document.getElementById("btn").onclick = function() {

    const visabutton = document.getElementById("visabtn").checked;
    const mastercardbutton = document.getElementById("mastercardbtn").checked;
    const paypalbutton = document.getElementById("paypalbtn").checked;

    if(document.getElementById("checkbox").checked == true){
        console.log("You are subscribed");
    }else {
        console.log("You are not subscribed");
    }

    if(visabutton){
        console.log("You are paying with Visa")
    }else if (mastercardbutton) {
        console.log("You are paying with Mastercard")
    }else if (paypalbutton) {
        console.log("You are paying with Paypal")
    }else {
        console.log("You must select a payment type")
    }
}

================================WHILE LOOP========================

let username = " ";

while(username == "" || username == null){
    username = window.prompt("Enter your name");
}

console.log("hello " , username);

=================================DO WHILE LOOP===============

let username;

do{
    username = window.prompt("Enter tyour name");
}while(username== "")

console.log("Hello",username);

=============================FOR LOOP==========================

for(let i = 50 ; i >= 0   ; i-= 3){
    console.log(i);
}

========================NESTED LOOP===================

let symbol = window.prompt("enetr a symbol to use");
let rows = window.prompt("enetr numbe rof rows");
let cols = window.prompt("enetr numbe rof columns");

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= cols ; j++){
        document.getElementById("rectangle").innerHTML += symbol;
    }
    document.getElementById("rectangle").innerHTML += "<br>"
}

===================FUNKCIE=============================

startProgram();

function startProgram(){
    let username = "rondon";
    let age = 16;

    hbd(username,age);
}

function hbd(a ,b){
    console.log("happy birthday", a);
    console.log("hovno z makom",b);
}

======================RETURN====================================

let area,width,height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width,height);

function getArea(width,height) {

    return width * height;
}

console.log("area :",area);



let adult = checkAge(19);

console.log(adult)

function checkAge(age){
    if(age >= 18){
        return true;
    }else {
        return false;
    }

    return age >= 18 ? true : false;
    
}

======================SKRATENY IF ELSE===================

let miso = "hovno";

checkWinner(miso,true);

function checkWinner(a,win){
    win ? console.log(a,"You win") : console.log(a,"You lose");
}

=====================TEMPLATE LITERALS ======================

let username = "hovno";
let items = 3;
let total = 75;

/* console.log(`Hello ${username}`);
console.log(`You have ${items} items`);
console.log(`Your total is ${total} $`); 

let text = `Hello ${username} <br> You have ${items} items<br> Your total is ${total} $ `;

document.getElementById("mylabel").innerHTML = text;

=======================GUESS THE NUMBER=====================

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitbtn").onclick = function() {
    let guess = document.getElementById("guessfield").value;
    guesses += 1;

    if(guess == answer){
        alert(`${answer} is the number , It took you ${guesses} tries`)
    }else if (guess < answer){
        alert(`too small`)
    }else if (guess > answer){
        alert(`too big`)
    }
}

=======================CELSIUS TO FAHRENHEIT CALCULATOR=============

document.getElementById("submit").onclick = function() {
    let temp;

    if (document.getElementById("celcius").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById("templabel").innerHTML = temp + "C";
    }else if (document.getElementById("fahrenheit").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("templabel").innerHTML = temp + "F";
    }else {
        document.getElementById("templabel").innerHTML = "select a unit";
    }
}

function toCelcius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}

====================ARRAYS==================================

let fruit = ["apple","orange","banana"];

// fruit[3] = "coconut" 

fruit.push("lemon");
fruit.pop(); // ODSTARNI POSELDNY ELEMENT
fruit.unshift("mango"); // PRIDA ELEMENT NA ZACIATOK
fruit.shift(); // ODSTRANI PRVY ELEMENT

let length = fruit.length;
let index = fruit.indexOf("banana")

console.log(index);

===================LOOP THROUGH AN ARRAY=======================

let prices = [5,10,15,20,25];

for(let i = prices.length - 1; i >= 0 ; i--){
    console.log(prices[i])
}

for (let price of prices){
    console.log(price);
}

============================SORT AN ARRAY ========================

let fruit = ["banana","apple","orange","mango"];

 // fruit = fruit.sort();
    fruit = fruit.sort().reverse();

for (let fruit1 of fruit){
    console.log(fruit1);
}

======================2D ARRAY AN ARRAY OF ARRAYS===================

let fruit = ["apples","oranges","bananas"];
let vegetables = ["carrots","onions","potatoes"];
let meat = ["eggs","chicken","fish"];

let grocery_list = [fruit,vegetables,meat];

grocery_list[1][1] = "mangos";

for(let list of grocery_list){
    for(food of list){
        console.log(food)
    }
}

==========================SPRED OPERATOR ... ===========================

let username = ["hovno","z","makom"];
let numbers = [1,2,3,4,5,6,7,8,9];

let maximum = Math.max(...numbers);

console.log(...numbers , ...username);
console.log(maximum);

let class1 = ["spongebob","mcqueen","sandy"];
let class2 = ["patrick","hovno","amak"];

class1.push(...class2);

console.log(...class1);

==========================REST PARAMETERS===========================

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

console.log(sum(a,b,b,b,b,c,e,e,e));

*/