"use strict";
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
alert (seconds )
alert (seconds * minutes * hours * days * myAgeInSeconds);
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

// task 5
{
function task(numb) {
    if (numb%5 === 0 && numb%3 === 0) {
        return 'FizBuz';
        if (numb%5 === 0) {
        return 'Fiz';
        }
    if (numb%3 === 0) {
        return 'Buz';
    }
    }
}
task(15);
}
// 

// task 6
{
let permittedAge = 18;
let forbiddenAge = 0;
let userAge = "Пожалуйста, введите ваш возраст";
prompt(userAge);
forbiddenAge = userAge;
    if (forbiddenAge < 18) {
        prompt("Пей колу");
    } else if (forbiddenAge = 17) {
     prompt("Можешь выкурить сигаретку, только маме не говори");
    } 
    // if (forbiddenAge = 16 || 18) {
        //  if (forbiddenAge >=16) {
        // prompt("Можешь выкурить сигаретку, только маме не говори");
    // }
    else {
        prompt("Попей пивка");
    }
}

{
    let permittedAge = 18;
    let forbiddenAge = 0;
    let userAge = "Пожалуйста, введите ваш возраст";
    prompt(userAge);
    forbiddenAge = userAge;
        if (forbiddenAge < 18) {
            prompt("Пей колу");
        } 
        else if(forbiddenAge >=18) {
         prompt("Попей пивка");
        } 
        else if(forbiddenAge = 16) {
            prompt("Можешь выкурить сигаретку, только маме не говори");
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
let wrongSentence = "пОлИнА нАбЕрЕжНаЯ";
let lowerString = wrongSentence.toLowerCase();
let firstCharacter = lowerString[0];
let firstCharacterUpper = firstCharacter.toUpperCase();
let secondCharacter = lowerString[7];
let secondCharacterUpper = secondCharacter.toUpperCase();
let anotherCharacters = firstCharacterUpper + lowerString.slice(1,7) + secondCharacterUpper + lowerString.slice(8);
console.log(anotherCharacters);
let welcome = "Привет, " + anotherCharacters + "!";
let hello = welcome
alert(hello);
}
// 

// task 9



//  task 10
{
for(let i = 0; i < 7; i++){
    for(let j = 0; j< i; j++){
        document.write("#");
    }
    document.write("<br/>");
}
}

   


// let randomBodyParts = ["нос", "глаз", "рот", "подбородок"];
// let randomAdjectives = ["дурацкий", "тупой", "кривой", "косой"];
// let randomWords = ["хорек", "бобер", "поросенок", "енот"];
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
// let randomWord = randomWords[Math.floor(Math.random() * 4)];
// let insult = ["У тебя ",randomBodyPart,  randomAdjective, "как ", randomWord,].join(" ");
// console.log(insult);


// let numbers = [3, 2, 1];
// let newString = numbers.join(" ");
// let myNewString = numbers[0] + " больше, чем " + numbers[1] + " больше, чем " + numbers[2];
// console.log(myNewString);


// let sum=0;
// 	let i=0;
// 	while(i<20){
// 		if(i%3==0){
// 			sum==i;
// 		}
// 		i++;
// 	}
// 	console.log(sum);


//     let  L = 1, N = 20, M = 3;
// for (let K = 0, j = L; j <= N; j++) if (j % M == 0) K++;
// alert (K);
  

// let i = 0;
// let k =0;
// while (i<20) {
//     if(i % 3 == 0) {
//         k++;
//     }
// }
// console.log(i);


// let myCrazyObject = {
//     "name": "Нелепый объект",
//     "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
//     "random animal": "Банановая акула"
//     };
//     console.log(myCrazyObject["some array"][2].number);