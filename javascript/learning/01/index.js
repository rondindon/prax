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

*/