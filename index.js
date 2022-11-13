"use strict"
// Part 1
// task 1 
{
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);
}
// 
    
// task 2 
{
let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 365;
let myAgeInSeconds = 22;
alert(seconds * minutes * hours * days * myAgeInSeconds);
}
// 
    
// task 3 
{
let count = 42;
let userName = '42';
count = '42'
userName = 42
alert(count , userName);
}
// 
    
// task 3 - another decision 
{
let count = 42;
let userName = '42';
count = String(count);
typeof(count);
userName = Number(userName);
typeof(userName);
}
// 
    
// task 4
{
let a = 1;
let b = 2;
let c = "белых медведей";
a = "1";
b = "2";
c = "белых медведей";
console.log(a + b + ' ' + c);
}
 // 
    
// task 5
{
let a = "доступ";
let b = "морпех";
let c = "наледь";
let d = "попрек";
let e = "рубило";
let lengthWords;
lengthWords = (a + b + c + d + e);
lengthWords.length;
}
// 
    
// task 6
{
let favoriteColor = "lilac";
let herAge = 53;
let hisSchedule = null;
`Variable:favoriteColor have type:${typeof favoriteColor}`
`Variable:herAge have type:${typeof herAge}`
`Variable:hisSchedule have type:${typeof hisSchedule}`
}
// 
    
// task 7
{
let userName = prompt("Please enter your name");
console.log(userName);
let userAge = prompt("Please enter your age");
console.log(userAge);
 }
// 
    
// task 7 - another decision
{
let userInfo = ["userName", "userAge"];
prompt(userInfo[0] = "Please enter your name");
prompt(userInfo[1] = "Please enter your age");
}
// 
    
// task 8
{ 
let a = 4;
let b = 3;
console.log(a,b);
a = a^b;
b = a^b; 
a = a^b;
console.log(a,b);
}
// 
    
// task 9
{
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher;
cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
console.log(cipher);
}
// 
    
// Part 2
// task 1
{
let nameFieldChecked = true;
typeof(nameFieldChecked);
let ageFieldChecked = false;
typeof(ageFieldChecked);
let hisAge = 17;
typeof(hisAge);
let yourName;
typeof(yourName);
let language = null;
typeof(language);
}
// 
    
// task 2
{
let height = 15;
let width = 20;
Math.max(height, width);
}
// 
    
// task 3
{
let a = 20;  
for (let x = 1; x <= a; x++) { 
    if (x % 3 === 0) { 
        console.log(x); 
    } 
}
}
// 
    
// task 4
{
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);
}
// 
   
// task 5 - first decision
{
function task(numb) {
    if (numb%5 === 0 && numb%3 === 0) {
        return "FizBuz";
    }
    else if (numb%5 === 0) {
    return "Fiz";
    }
    else if (numb%3 === 0) {
    return "Buz";
    }
}
task(5);
}
// 

//  task 5 - second decision 
{
function task(numb) {
    let buz = numb%3 === 0 ? "Buz" : " ";
    let fiz = numb%5 === 0 ? "Fiz" : " ";
    return fiz + buz;
}
let number = prompt("Пожалуйста,введите ваше число");
task(number);
}
// 
    
//  task 5 - third decision 
{
function task(numb) {
    if (numb%5 === 0 && numb%3 === 0) {
        return "FizBuz";
    }
    if (numb%5 === 0) {
        return "Fiz";
    }
    if (numb%3 === 0) {
        return "Buz";
    }
}
let number = prompt("Пожалуйста,введите ваше число");
console.log(task(number));
}   
// 
   
// task 6
{
let permittedAge = 18;
let userAge = prompt("Пожалуйста, введите ваш возраст");
    if (userAge < permittedAge) {
        alert("Пей колу");
    } 
    else if (userAge >= 16 && userAge <= permittedAge) {
        alert("Можешь выкурить сигаретку, только маме не говори");
    }
    else if (userAge >= permittedAge) {
        alert("Попей пивка");
    } 
}

//  task 6 - another decision
{
let userAge = prompt("Пожалуйста, введите ваш возраст");
let message = (userAge >= 18) ? "Попей пивка" : (userAge < 1) ? "Ошибка" : "Пей колу";
alert(message);
if(userAge >= 16 && userAge <= 18) {
    alert("Можешь выкурить сигаретку, только маме не говори");
}
}
 // 

//  task 6 - another decision
{
let userAge = prompt("Пожалуйста, введите ваш возраст");
if(userAge >= 18) {
    alert("Попей пивка");
} else {
    if (userAge < 1) {
        alert("Error");
    } else {   
        alert("Пей колу");
    }
} 
if(userAge >= 16 && userAge <= 18) {
    alert("Можешь выкурить сигаретку, только маме не говори");
}
}
// 
    
// task 7
{
let userQuestion = prompt("В какую сторону света вы направитесь?");
switch (userQuestion) {
    case "south":
        alert("на юг пойдешь счастье найдешь");
        break;
    case "north":
        alert("на север пойдешь много денег найдешь");
        break;
    case "west":
        alert("на запад пойдешь верного друга найдешь");
        break;
    case "east":
        alert("на восток пойдешь разработчиком станешь");
        break;
    default:
        alert("Попробуйте еще раз");
}
}
// 
    
// task 8
{
const wrongSentence = "пОлИнА нАбЕрЕжНаЯ";
let lowerString = wrongSentence.toLowerCase();
let firstCharacter = lowerString[0];
let firstCharacterUpper = firstCharacter.toUpperCase();
let secondCharacter = lowerString[7];
let secondCharacterUpper = secondCharacter.toUpperCase();
let anotherCharacters = firstCharacterUpper + lowerString.slice(1,7) + secondCharacterUpper + lowerString.slice(8);
let welcome = "Привет, " + anotherCharacters + "!";
alert(welcome);
}
// 

// task 8 - another decision
{
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
{
const wrongSentence = "пОлИнА нАбЕрЕжНаЯ";
let tempString = wrongSentence.toLowerCase().split(' ');
let result = "";
for ( let i = 0; i < tempString.length; i++ ) {
    result += capitalize(tempString[i]) + (i < tempString.length - 1 ? " " : "")
}
console.log("Привет, " + result + "!");
}
}
// task 9
{
let userNumber = +prompt("Пожалуйста,введите ваше число");
let subtraction = +prompt("Сколько отнять от предыдущего числа?");
let addition = +prompt("Cколько прибавить к числу?");
let multiplication = +prompt("На сколько умножить число?");
let division = +prompt("На сколько разделить число?");
let getSum = ((((userNumber - subtraction) + addition) * multiplication) / division);
let sum = ((((userNumber +  "-" + subtraction) + "+" + addition) + "*" + multiplication) + "/" + division);
let result = alert(sum + "=" + getSum);
}
//  

//  task 10
{
for(let i = 0; i < 7; i++){
    for(let j = 0; j< i; j++){
        document.write("#");
    }
document.write("<br/>");
}
}
// 

// Part 3
// task 1
{
function getSum(n) {
    let Sum = 0;
    for (let i = 1; i <= n; i++) {
        Sum += i;
        }
    return Sum;
    }
    alert( getSum(50) );   
}
//   
    
 // task 2
// {    в месяц 16.6p => 24.85p. 24.85 за 60 мес = 149.1p
{  
    function calcLoan(sum, percent, months) {
        let sum = 1000;
        let percent = 17;
        let months = 60;
    console.log()    
    }
    calcLoan()
}
    
    
// 
    
// task 3
{
let question = "      What's up?        ";
console.log(question);
console.log(question.trim());
}
// 

//  task 4 
{
function getSumNumbers(num) {
        let sum = 0, tmp;
        while (num) {
            tmp = num % 10;
            num = (num - tmp) / 10;
            sum += tmp;
        }
        return sum;
    }
    alert(getSumNumbers(2021));
}
// 

// task 5 - понять суть
{
function getSum(a, b) {
    let Sum = 0;
    let a = 0;
    let b = 1;
    // for (a = 0 && b = 1; a <= n; a++) {
        Sum += a;
    }
    return Sum;
}

{
function calculateTotal(number) { 
    // let sum = 0;
    for(var i=0, sum=0; i<= num; sum+=i++);
        sum += i; } 
return sum;
}
//  

{
function calculateTotal(number) { 
    let sum = 0;
    for (let i = 0; i <= number; i += 1) {
        sum += i;
    }  
    return sum; 
    }
    console.log(calculateTotal(3));
}
// 

// task 6
{
function fooboo () {
    let a = prompt("введи слово");
    if (a == "foo") {
    alert("foo")
    } else if (a == "boo") {
        // console.log("boo");
        alert("boo");
    }
}
fooboo()
}

// task 6 - another decision
{
function fooboo () {
    let a = prompt("Пожалуйста, введите слово");
    if (a == "foo") {
        return a;
    } else if (a == "boo") {
        return a;
    }
}
fooboo()
}
// 

// task 7
{
var arr = new Array(3);
var i;
for(i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
 }
function trangel(arr){
    if (Number.isInteger(arr[0]) && Number.isInteger(arr[1]) && Number.isInteger(arr[2])) {
        alert("true");
}
else{
alert("false");
}
}
trangel(arr);
}
// 

// task 7 - не работает!
{
var arr = new Array(3); 
var i;
for(i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
    }
function triangle(arr){
alert ( arr[0] == Number.isInteger  &&  arr[1] == Number.isInteger && arr[2] == Number.isInteger ) || alert ( arr[0] == !Number.isInteger &&  arr[1] == !Number.isInteger && arr[2] == !Number.isInteger)
}
triangle(arr);
}
// 

// task 7 - не работает
{
var arr = new Array(3);
var i;
for(i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
    }
function triangle(arr){
alert ( arr[0] == Number.isInteger  &&  arr[1] == Number.isInteger && arr[3] == Number.isInteger ||  arr[0] !== Number.isInteger &&  arr[0] !== Number.isInteger && arr[0] !== Number.isInteger)
}
triangle(arr);
}
// 
     
// task 7 - another decision;
{
var arr = new Array(3);
var i;
for(i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
}
function triangle(arr){
    if ( Number.isInteger(arr[0]) &&  Number.isInteger(arr[0]) && Number.isInteger(arr[0])) {
        alert("true");
}
if ( !Number.isInteger(arr[0]) &&  !Number.isInteger(arr[0]) && !Number.isInteger(arr[0])) {
    alert("false");
}
    }
triangle(arr);
}
// 

// task 7 - не работает!
// ????
{
var arr = new Array(3);
var i;
for(i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
    }
function triangle(arr){
    {
        alert ( arr[0] == Number.isInteger  &&  arr[1] == Number.isInteger && arr[2] == Number.isInteger )
        alert ( arr[0] !== Number.isInteger &&  arr[1] !== Number.isInteger && arr[2] !== Number.isInteger)
        }
    // var arr = Number.isInteger ? true: false;
    // let arr[1]Number.isInteger;
    // let arr[2]Number.isInteger;
// alert(Boolean(arr[0])(arr[1])(arr[2]));
// alert(Boolean(arr[i]));
}
triangle(arr);
}
// 
{
alert ( arr[0] == Number.isInteger  &&  arr[1] == Number.isInteger && arr[2] == Number.isInteger )
alert ( arr[0] !== Number.isInteger &&  arr[1] !== Number.isInteger && arr[2] !== Number.isInteger)
}
triangle(arr);
// 

// task 7 - не работает
// ?????
{ 
var arr = new Array(3);
var i;
for(i=0;i<3;i++)
{
arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
    }
function triangle(arr){
    arr[0] = (Number.isInteger) ? true: false;
    arr[1] = (Number.isInteger) ? true: false;
    arr[2] = (Number.isInteger) ? true: false;
// alert(Boolean(arr[0])(arr[1])(arr[2]));
alert( Boolean(arr) );
}
triangle(arr);
}
// 

// task 8
{

}
// 

// task 9
{

}
// 


// Part 4 - Functions
// task 1
{
let corgi = {
    name : "Patrick",
    theBestInTheWorld : true
}
delete corgi.name;
'name' in corgi
delete corgi.theBestInTheWorld;
'theBestInTheWorld' in corgi
}
// 

// task 2 
{
let movies = {
    name : "Harry Potter",
    amount : 8
};
console.log("name" in movies);
console.log("amount" in movies);
}
// 

// task 3 
{
const student = {
    name: 'John',
    age: 19,
    isHappy: true
    };
for (let key in student) {
    console.log(key);
    console.log(student[key])
}
}
// 

// task 4 
{
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
function findColor() {
    console.log("${this.red}");
}
colors.red();
}


{
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
findColor() {
    console.log(this.red);
}
};
colors.red();
}
// 

// task 5
{
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    zhenya: 664,
    alexandra: 199
    };
    let sum = 0;
    for (let key in salaries) {
      sum += salaries[key];
    }
    let averageSalary = 0;
    let guys = 5;
    for (let key in salaries) {
        averageSalary = sum / guys;
      } 
    alert(averageSalary);
}
// 

// task 6
{
let userLogin = prompt("Please enter your login");
let userPassword = prompt("Please enter your password");
let userData = {
    login: userLogin,
    password: userPassword
}
let confirmation = prompt("Please confirm your data");
    if(userData.validity.typeMismatch) {
        alert("Добро пожаловать");
    }
}