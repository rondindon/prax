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

=============================CALL BACK========================

sum(2,3,displayDOM);

function sum(x,y,callback){
    let result = x +y;
    callback(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("mylabel").innerHTML = output;
}

========================FOR EACH METHOD=========================

let students = ["spongebob","patrick","squidward"];
students.forEach(capitalize)
students.forEach(print)

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element)
}

console.log(students[0]);

=============================MAP METHOD IN ARRAYS=====================

let numbers = [1,2,3,4,5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(print)
cubes.forEach(print)

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

function print(element){
    console.log(element);
}

=========================FILTER METHOD IN ARRAYS======================

let ages = [18,16,21,19,90,25];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}

function print(element){
    console.log(element);
}

=======================REDUCE METHOD IN ARRAYS========================

let prices = [15,20,25,5,10,30];
let total = prices.reduce(checkOut);

console.log(`Your total is ${total}`)

function checkOut(total,element){
    return total + element;
}

==================SORT IN AN ARRAY=================================

let grades = [100,50,60,90,80,70,32];

grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort(x,y){
    return y - x;
}

function ascendingSort(x,y){
    return x - y;
}

function print(element){
    console.log(element)
}

===========================FUNCTION EXPRESSIONS=======================

const greeting = function(){
    console.log("Hello !");
}

greeting();

let count = 0;

 function increaseCount(){
    count++ ;
    document.getElementById("mylabel").innerHTML = count;
}

function decreaseCount(){
    count-- ;
    document.getElementById("mylabel").innerHTML = count;
} 

document.getElementById("increasebtn").onclick = function(){
    count++ ;
    document.getElementById("mylabel").innerHTML = count;
}

document.getElementById("decreasebtn").onclick = function(){
    count-- ;
    document.getElementById("mylabel").innerHTML = count;
}

=====================ARROW FUNCTION EXPRESSIONS======================

const greeting = (username) => {
    console.log(`hello ${username}`);
}

greeting("hovno");

const percent = (x,y) => {
    return x / y * 100;
}

console.log(`${percent(60,100)}%`);

let grades = [100,50,90,60,80,70];

grades.sort((x,y) => {
    return y - x;
})

grades.forEach((element) => {
    console.log(element)
})

=================SHUFFLE ELEMENTS IN AN ARRAY===========================

let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

shuffle(cards);

//console.log(cards[0]);
cards.forEach((card) => {
    console.log(card)})

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex-- ;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

====================NESTED FUNCTIONS=============================

let username = "rondon";
let userInbox = 0;

login();

function login(){
    displayUsername();
    displayUserInbox();
    
    function displayUsername(){
        console.log(`Welcome ${username}`);
    }

    function displayUserInbox(){
    console.log(`You have ${userInbox} new messages`);
    }
}

=========================== M A P S ============================

const store = new Map([
["t-shirt",20],
["jeans",30],
["socks",10],
["underwear",50]
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("socks");
console.log(shoppingCart);

store.set("hat",40);

store.delete("hat");

console.log(store.has("t-shirt"));

console.log(store.size);

store.forEach((value,key) => {  
    console.log(`${key} $${value}`);
})

=============================OBJECTS=====================================

const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive:function(){
        console.log("You drive the car");
    },
    brake:function(){
        console.log("You stepp on the brakes")
    }
}

const car2 = {
    model:"Rolls Royce",
    color:"black",
    year:2022,

    drive:function(){
        console.log("You drive the car");
    },
    brake:function(){
        console.log("You step on the brakes")
    }
}

console.log(car1.model);
console.log(car1.color);

car1.drive();
car1.brake();

console.log(car2.model);
console.log(car2.color);

car2.drive();
car2.brake();

=============================THIS IN OBJECTS=========================

const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive:function(){
        console.log(`You drive a ${this.color} ${this.model}`);
    }
}

const car2 = {
    model:"Rolls Royce",
    color:"black",
    year:2022,

    drive:function(){
        console.log(`You drive a ${this.color} ${this.model}`);
    }
}

car1.drive();
car2.drive();

this.name = "myCoolWindow";

console.log(this);
console.log(this.name);

=======================CLASSES==================================

class Player{
    score = 0;

    pause(){
        console.log("You pause the game");
    }

    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 2;
player3.score += 4;
player4.score += 5;

console.log(player1.score);
console.log(player2.score);
console.log(player3.score);
console.log(player4.score);

player1.pause();
player1.exit();
player2.exit();

==================CONSTRUCTORS IN CLASSES=============================

class Student{
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`)
    }
}

const Student1 = new Student("Rondon",16,5);
const Student2 = new Student("Hovniak",69,3.5);
const Student3 = new Student("Makak",12,1);

console.log(Student1.name);
console.log(Student1.age);
console.log(Student1.gpa);

Student1.study();

console.log(Student2.name);
console.log(Student2.age);
console.log(Student2.gpa);

Student2.study();

console.log(Student3.name);
console.log(Student3.age);
console.log(Student3.gpa);

Student3.study();

==================STATIC KEYWORD IN CLASSES=====================

Math.round();

class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log("3...2...1...GO!")
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("BMW");
const car3 = new Car("Rolls Royce");
const car4 = new Car("Skoda");
const car5 = new Car("KIA");

console.log(Car.numberOfCars);

Car.startRace();

=====================INHERITANCE IN CLASSES===========================

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{ 
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "rabbit";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();

================SUPER CONSTRUCTOR IN PARENT CLASS======================

class Animal{

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{ 
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("hovniak",1,40);
const fish = new Fish("tart",6,20);
const hawk = new Hawk("Wahk",2,150);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

===================GET AND SET PROPERTY IN CLASSES===================

class Car{
    constructor(power,gas){
        this._gas = gas;
        this._power = power;
    }
    
    get power(){
        return `${this._power} HP`;
    }
    get gas(){
        return `${this._gas} L (${this._gas / 50 * 100}%)`
    }
    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400,25);

car.gas = 15;

console.log(car.power);
console.log(car.gas);

==================OBJECTS AS ARGUMENTS==============================    

class Car{

    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang",2023,"red");
const car2 = new Car("Rolls Royce",2026,"black");
const car3 = new Car("Skoda",1997,"blue");

changeColor(car1,"gold")
displayInfo(car1);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car,color){
    car.color = color;
}

=======================ARRAY OF OBJECTS===========================

class Car{

    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}`)
    }
}

const car1 = new Car("Mustang",2023,"red");
const car2 = new Car("Rolls Royce",2026,"black");
const car3 = new Car("Skoda",1997,"blue");
const car4 = new Car("Rari",2006,"white");

const cars = [car1,car2,car3];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

//cars[0].drive();
//cars[1].drive();
//cars[2].drive();

startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}

=====================ANONYMOUS OBJECTS===========================

class Card{
    constructor(value,suit) {
        this.value = value;
        this.suit = suit;
    }
}

new Card("A","Hearts");
new Card("A","Spades");
new Card("A","Diamonds");
new Card("A","Clubs");
new Card("2","Hearts");
new Card("2","Spades");
new Card("2","Diamonds");
new Card("2","Clubs");

let cards = [new Card("A","Hearts"),new Card("A","Spades"),new Card("A","Diamonds"),new Card("A","Clubs"),new Card("2","Hearts"),new Card("2","Spades"),new Card("2","Diamonds"),new Card("2","Clubs")];

console.log(cards[0].value + cards[0].suit);
console.log(cards[1].value + cards[1].suit);
console.log(cards[7].value + cards[7].suit);

cards.forEach(card => {console.log(`${card.value} + ${card.suit}`)});

==================BASIC ERROR HANDLING==============================

try {
    let x = window.prompt(`Enter a #`);
    x = Number(x);

    if(isNaN(x)) throw "That wasnt a number";
    if(x == "") throw "That was empty";

    console.log(`${x} is a number`)
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes");
}

========================SET TIMEOUT METHOD===========================

let item = "cryptocurrency";
let price = 420;

let timer1 = setTimeout(frist,3000);
let timer2 = setTimeout(second,6000);
let timer3 = setTimeout(third,9000);

function frist(){
    alert(`Buy this ${item} for ${price}`);
}

function second(){
    alert(`This is not a scam`);
}

function third(){
    alert(`DO IT`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying`)
}

=====================SET INTERVAL METHOD===============================

let count = 0;
let max = window.prompt("Count up to what number # ?");
max = Number(max);

const myTimer = setInterval(countUp,1000);

function countUp(){
    count ++;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
        console.log("the end");
    }
}

======================DATE OBJECTS=============================

let date = new Date();
//let date = new Date(0);
//let date = new Date(2022, 9 , 28, 14 , 17 , 49 );

let year = date.getFullYear();
let month = date.getMonth();
let dayOfMonth = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();

//date.setFullYear(2024);
//date.setMonth(11);

date = date.toLocaleString();

console.log(date);
console.log(year);
console.log(month);
console.log(dayOfMonth);
console.log(hour);
console.log(minute);

document.getElementById("myLabel").innerHTML = date;

===================UPDATING CLOCK============================

const mylabel = document.getElementById("myLabel");

update();
setInterval(update,1000)

function update(){

    let date = new Date();
    mylabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = formatZero(hours);
        minutes = formatZero(minutes);
        seconds = formatZero(seconds);

        return `${hours}:${minutes}:${seconds}`
    }
    function formatZero(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

========================CONSOLE.TIME METHOD===========================

console.time("ResponseTime");

//alert("Click the OK button!!")

setTimeout(() => console.log("Hello!"),3000) ONLY WORKS FOR SYCHRONOUS CODE

console.timeEnd("ResponseTime");

================PROMISES (ASYNCHRONOUS OPERATIONS)================

const promise = new Promise((resolve,reject) => {

    let FileLoaded = false;

    if(FileLoaded){
        resolve("File loaded");
    }else{
        reject("File not loaded")
    }

});

promise.then(value => console.log(value)).catch(error => console.log(error));



const wait = time => new Promise(resolve => {
    setTimeout(resolve,time);
})

wait(2000).then( () => console.log("Thanks for waiting"));

==========================ASYNC FUNCTION========================

async function loadFile(){

    let FileLoaded = false;

    if(FileLoaded){
        return ("File loaded");
    }else{
        throw("File not loaded")
    }
}

loadFile().then(value => console.log(value)).catch(error => console.log(error));

=========================AWAIT KEYWORD============================

async function loadFile(){

    let FileLoaded = false;

    if(FileLoaded){
        return "File loaded";
    }
    else{
        throw "File not loaded";
    }
}

async function startProcess(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}

startProcess();

==================MODULES , IMPORT , EXPORT=======================

//import { PI, getArea , getCircumference } from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
let area = MathUtil.getArea(10);

console.log(circumference,area);

================== D O M ==========================

console.log(document);

=========================SELECTING ELEMENTS======================

let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightblue";

let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "khaki";

let desserts = document.getElementsByClassName("desserts");
desserts[1].style.backgroundColor = "plum";

let element1 = document.querySelector("#myTitle");
element1.style.backgroundColor = "rebeccapurple";

let elements = document.querySelectorAll(".desserts");
elements.forEach(element => {
    element.style.backgroundColor = "#232323"
})

==========ADD AND CHANGE HTML ELEMENTS + CSS STYLE=====================

//const nameTag = document.createElement("header");
//nameTag.textContent = window.prompt("enter your name");
//document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myList.prepend(listItem);
myList.insertBefore(listItem,myList.getElementsByTagName("li")[1]);

listItem.style.fontSize = "50px";
listItem.style.listStyle = "none";
listItem.style.fontFamily = "monospace";
listItem.style.textAlign = "center";
listItem.style.color = "whitesmoke";
listItem.style.backgroundColor = "#232323";
listItem.style.border = "2px solid rebeccapurple";

=========================== E V E N T S =============================

//const element = document.getElementById("myButton");
//element.onclick = doSomething;

//const element = document.body;
//element.onload = doSomething;

//const element = document.getElementById("myText");
//element.onchange = doSomething;

const element = document.getElementById("myDiv");
element.style.backgroundColor = "plum";
element.style.height = "100px";
element.onmouseover = doSomething;
element.onmouseout = doSomethingElse;
element.onmousedown = doSomethingElse;
element.onmouseup = doSomething;

function doSomething(){
    //alert (`You did something`);
    element.style.backgroundColor = "rebeccapurple";
}

function doSomethingElse(){
    //alert (`You did something`);
    element.style.backgroundColor = "plum";
}

====================ADD EVENT LISTENER METHOD========================

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

function changeRed(){
    innerDiv.style.backgroundColor = "red";
}

function changePurple(){
    innerDiv.style.backgroundColor = "rebeccapurple";
}

function changeBlue(){
    alert (`You selected ${this.id}`)
    this.style.backgroundColor = "midnightblue"
}

//innerDiv.addEventListener("mouseover",changeRed);
//innerDiv.addEventListener("mouseout",changePurple);

innerDiv.addEventListener("click",changeBlue);
outerDiv.addEventListener("click",changeBlue);

=================DETECTING KEY PRESSES====================

const myDiv = document.getElementById("myDiv");
let x = 0;
let y = 0;

function move(event){
    switch(event.key){
        case "ArrowDown":
            y += 5;
            myDiv.style.top = y + "vh";
            break;
        case "ArrowUp":
            y -= 5;
            myDiv.style.top = y + "vh";
            break;
        case "ArrowRight":
            x += 5;
            myDiv.style.left = x + "vw";
            break;
        case "ArrowLeft":
            x -= 5;
            myDiv.style.left = x + "vw";
            break;
        }
}

window.addEventListener("keydown", move);

======================ANIMATIONS========================

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame,5);

    function frame(){
        if(x >= 260 || y >= 260){
            clearInterval(timerId);
        }else{
            x += 1;
            y += 1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
        }
    }
}

function beginRotate(){
    let timerId = null;
    let degrees = 0;

    timerId = setInterval(frame,5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerId);
        }else{
            degrees += 1;
            //myAnimation.style.transform = "rotateX("+degrees+"deg)";
            //myAnimation.style.transform = "rotatey("+degrees+"deg)";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}

function beginRotateMove(){
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame,5);

    function frame(){
        if(x >= 250 || y >= 250){
            clearInterval(timerId);
        }else{
            x += 1;
            y += 1;
            degrees += 3;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            //myAnimation.style.transform = "rotateX("+degrees+"deg)";
            //myAnimation.style.transform = "rotatey("+degrees+"deg)";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}

function beginScale(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame,5);

    function frame(){
        if(scaleX <= 0.1 || scaleY <= 0.1){
            clearInterval(timerId);
        }else{
            scaleY -= 0.01;
            scaleX -= 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")"
        }
    }

}

myButton.addEventListener("click",beginScale);

===========================CANVAS API==============================

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke();

=======================WINDOW PROPERTY==========================

//console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.outerWidth);
console.log(window.outerHeight);

console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");

//myButton.addEventListener("click", () => window.open("https://google.com"));
//myButton.addEventListener("click", () => window.close())l;

myButton.addEventListener("click", () => window.print());

//window.alert("hello");
//window.confirm("press ok to continue");
let age = window.prompt("enter your age");
if(age < 18 && age > 0){
    window.alert("You must be 18+ to enter this site");
    window.close();
}

========================== C O O K I E S =======================

//document.cookie ="firstName=Patrick; expires=Sun , 1 January 2030 12:00:00 UTC; path=/";
//document.cookie ="lastName=Star; expires=Sun , 1 January 2030 12:00:00 UTC; path=/";

//console.log(document.cookie);

setCookie("email","hovnozmakom@gaymail.com",5);

deleteCookie("firstName");
deleteCookie("lastName");
deleteCookie("email");


function setCookie(name,value,daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 *1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`
}

function deleteCookie(name){
    setCookie(name,null,null);
}

setCookie("lastname","Squarepants",365);
setCookie("email","hovnozmakom@geymail.com");

//console.log(document.cookie);

//console.log(getCookie("firstName"));
//console.log(getCookie("lastName"));
//console.log(getCookie("email"));

deleteCookie("firstName");
deleteCookie("lastname");
deleteCookie("email");


function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach( element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result
}

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookiesBtn = document.querySelector("#cookiesBtn");

submitBtn.addEventListener("click", () => {
setCookie("FIRSTNAME",firstText.value,365);
setCookie("LASTNAME",lastText.value,365);
});

cookiesBtn.addEventListener("click", () => {
    firstText.value = getCookie("FIRSTNAME");
    lastText.value = getCookie("LASTNAME");
});

console.log(document.cookie);

=========================STOPWATCH=========================

const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,20);
    }
});
pauseBtn.addEventListener("click",() => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
        console.log(elapsedTime);
    }
});
resetBtn.addEventListener("click",() => {
    paused = true;
    console.log(elapsedTime);
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00"
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000* 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hours = pad(hours);

    timeDisplay.textContent = `${hours}:${mins}:${secs}`;
    
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}

===================ROCK PAPER SCISSORS GAME==========================

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll('.choiceBtn');

let player;
let computer;
let result;

choiceBtns.forEach(button => {
    button.addEventListener("click", () => {
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player : ${player}`;
        computerText.textContent = `Computer : ${computer}`;
        resultText.textContent = checkWinner();
    })
})

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3 + 1);

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return `Draw`;
    }else if(computer == "ROCK"){
        return(player == "PAPER") ? `You win` : `You lose`;
    }else if(computer == "SCISSORS"){
        return(player == "PAPER") ? `You lose` : `You win`;
    }else if(computer == "PAPER"){
        return(player == "ROCK") ? `You lose` : `You win`;
    }
}

======================= TIC TAC TOE =====================

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winCondintions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    restartBtn.addEventListener("click",restartGame);
    statusText.textContent = `${currentPlayer}s turn`;
    running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this,cellIndex);
    checkWinner();
}

function updateCell(cell,index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? currentPlayer = "O" : currentPlayer = "X";
    statusText.textContent = `${currentPlayer}s turn`
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winCondintions.length; i++){
        const condition =winCondintions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC ==""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} WINS!`;
        running = false;
    }else if(!options.includes("")){
        statusText.textContent = `DRAW`;
        running = false;
    }else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

=====================SNAKE GAME=============================

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#score");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "#232323";
const snakeColor = "antiquewhite";
const snakeBorder = "black";
const foodColor = "rebeccapurple";
const unitSize = 25;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize * 4 ,y:0},
    {x:unitSize * 3 ,y:0},
    {x:unitSize * 2 ,y:0},
    {x:unitSize ,y:0},
    {x:0 ,y:0}
];

window.addEventListener("keydown",changeDirection);
resetBtn.addEventListener("click",resetGame);

gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};

function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        } , 70)
    }else{
        displayGameOver();
    }
};

function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0,0,500,500);
};

function createFood(){
    function randomFood(min,max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0 , gameWidth - unitSize);
    foodY = randomFood(0 , gameWidth - unitSize);
};

function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX,foodY,unitSize,unitSize);
};

function moveSnake(){
    const head = {x: snake[0].x  + xVelocity, y: snake[0].y + yVelocity};

    snake.unshift(head);
    if(snake[0].x == foodX && snake[0].y == foodY){
        score ++;
        scoreText.textContent = score; 
        createFood();
    }else{
        snake.pop()
    }
};

function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakepart => {
        ctx.fillRect(snakepart.x , snakepart.y,unitSize,unitSize);
        ctx.strokeRect(snakepart.x , snakepart.y,unitSize,unitSize);
    })
};

function changeDirection(event){
    const keypressed = event.keyCode;
    const LEFT = 37;
    const RIGHT = 39;
    const UP = 38;
    const DOWN = 40;

    const goingUP = (yVelocity == -unitSize);
    const goingDOWN = (yVelocity == unitSize);
    const goingRIGHT = (xVelocity == unitSize);
    const goingLEFT = (xVelocity == -unitSize);

    switch(true){
        case(keypressed == LEFT && !goingRIGHT):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;

        case(keypressed == UP && !goingDOWN):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;

        case(keypressed == RIGHT && !goingLEFT):
            xVelocity = unitSize;
            yVelocity = 0;
            break;

        case(keypressed == DOWN && !goingUP):
            xVelocity = 0;
            yVelocity = unitSize;
            break;    
    }   
};

function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running=false;
            break;
        
        case (snake[0].x >= gameWidth):
            running=false;
            break;

        case (snake[0].y < 0):
            running=false;
            break;

        case (snake[0].y >= gameHeight):
            running=false;
            break;
    }
    for(let i; i < snake.length; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};

function displayGameOver(){
    ctx.font = "4rem Monospace";
    ctx.fillStyle = "whitesmoke";
    ctx.textAlign = "center";
    ctx.fillText(`Game over!` , gameWidth / 2 , gameHeight / 2);
    ctx.font =" 2rem Monospace"
    ctx.fillText(`Score : ${score}` , gameWidth / 2 , gameHeight / 1.5);
    running = false;
};

function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4 ,y:0},
        {x:unitSize * 3 ,y:0},
        {x:unitSize * 2 ,y:0},
        {x:unitSize ,y:0},
        {x:0 ,y:0}
    ];
    gameStart();
};

*/

const gameBoard = document.querySelector("#game-board");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#score-text");
const resetBtn = document.querySelector("#reset-btn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "#232323";
const paddle1Color = "whitesmoke";
const paddle2Color = "antiquewhite";
const paddleBorder = "#232323";
const ballColor = "aquamarine";
const ballBorderColor = "whitesmoke";
const ballRadius = 12.5;
const paddleSpeed = 50;

let intervalId;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXdirection = 0; 
let ballYdirection = 0;
let player1score = 0; 
let player2score = 0;
let paddle1 = {
    width: 25,
    height: 100,
    x:0,
    y:0
}

let paddle2 = {
    width: 25,
    height: 100,
    x:gameWidth - 25,
    y:gameHeight - 100
}

gameStart();
drawPaddles();

function gameStart(){
    createBall();
    nextTick();
};

function nextTick(){
    intervalId = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX,ballY);
        checkCollision();
        nextTick();
    }, 10);
};

function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0,0,gameWidth,gameHeight)
};

function drawPaddles(){
    ctx.strokeStyle = paddleBorder;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);
    ctx.strokeRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);

    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height);
    ctx.strokeRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height);
};

function createBall(){
    ballSpeed = 1;
    if(Math.round(Math.random()) == 1){
        ballXdirection = 1;
    }else{
        ballXdirection = -1;
    }
    if(Math.round(Math.random()) == 1){
        ballYdirection = 1;
    }else{
        ballYdirection = -1;
    }

    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX,ballY);
};

function moveBall(){
    ballX += (ballSpeed * ballXdirection);
    ballY += (ballSpeed * ballYdirection);
};

function drawBall(ballX,ballY){
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = ballBorderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ballX , ballY , ballRadius , 0 , 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};

function checkCollision(){
    if(ballY <= 0 + ballRadius){
        ballYdirection *= -1; 
    }
    if(ballY >= gameHeight - ballRadius){
        ballYdirection *= -1; 
    }
    if(ballX <= 0){
        player2score += 1;
        updateScore();
        createBall();
        return;
    }
    if(ballX >= gameWidth){
        player1score += 1;
        updateScore();
        createBall();
        return;
    }
    if(ballX <= (paddle1.x + paddle1.width + ballRadius)){
        if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
            ballX = (paddle1.x + paddle1.width) + ballRadius; // if ball gets stuck
            ballXdirection *= -1;
            ballSpeed += 1;
        }
    }
    if(ballX >= (paddle2.x - ballRadius)){
        if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
            ballX = paddle2.x - ballRadius;
            ballXdirection *= -1;
            ballSpeed += 1;
        }
    }
};

function changeDirection(event){
    const keypressed = event.keyCode;
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch(keypressed){
        case(paddle1Up):
            if(paddle1.y > 0){
                paddle1.y -= paddleSpeed;
            }
            break;

        case(paddle1Down):
            if(paddle1.y < gameHeight - paddle1.height){
                paddle1.y += paddleSpeed;
            }
            break;

        case(paddle2Up):
            if(paddle2.y > 0){
                paddle2.y -= paddleSpeed;
            }
            break;

        case(paddle2Down):
            if(paddle2.y < gameHeight - paddle2.height){
                paddle2.y += paddleSpeed;
            }
            break;
    }   

};

function updateScore(){
    scoreText.textContent = `${player1score} : ${player2score}`
};

function resetGame(){
    player1score = 0;
    player2score = 0;
    paddle1 = {
        width: 25,
        height: 100,
        x:0,
        y:0
    }
    
    paddle2 = {
        width: 25,
        height: 100,
        x:gameWidth - 25,
        y:gameHeight - 100
    }
    ballSpeed = 0;
    ballX = 0;
    ballY = 0;
    ballXdirection = 0;
    ballYdirection = 0;
    updateScore();
    clearInterval(intervalId);
    gameStart();
};

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click",resetGame);