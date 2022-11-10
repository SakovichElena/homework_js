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
let userName = "Please enter your name";
alert(userName);
let userAge = prompt("Please enter your age");
alert(userAge);
 }
// 
    
// task 7 - another decision
{
let userInfo = ["userName", "userAge"];
alert(userInfo[0] = "Please enter your name");
alert(userInfo[1] = "Please enter your age");
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
let userNumber = prompt("Пожалуйста,введите ваше число");
// userNumber = 30;
let subtraction = prompt("Сколько отнять от предыдущего числа?");
// subtraction =5;
let addition = prompt("Cколько прибавить к числу?");
// addition = 78;
let multiplication = prompt("На сколько умножить число?");
// multiplication = 20;
let division = prompt("На сколько разделить число?");
// division = 2;
let result = alert((((userNumber +  "-" + subtraction) + "+" + addition) + "*" + multiplication) + "/" + division + "=" + "1030");
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
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    }
    alert( getSum(50) );
}
//   
    
 // task 2
    
    
    
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
function getSumNumber(num) {
        var sum = 0, tmp;
        while (num) {
            tmp = num % 10;
            num = (num - tmp) / 10;
            sum += tmp;
        }
        return sum;
    }
    alert(getSumNumber(2021));
}
// 