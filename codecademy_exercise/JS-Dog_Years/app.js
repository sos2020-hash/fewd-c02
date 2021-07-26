/* My age */
const myAge = 25;
/* early year */
let earlyYears = 2;
earlyYears *= 10.5;
/* later year */
let laterYears = myAge - 2;
/* multiply the laterYears */
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
/* earlyYears plus laterYears */
let myAgeInDogYears = earlyYears + laterYears;
/* lowercase my name */
const myName = 'Alex'.toLowerCase();
/* show the age about me in dog ages */
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.` );