//Creating a variable with my age
let myAge = 28;

//Creating a variable and saving the value to 2
let earlyYears = 2;

//Using the multiplication operator to multiply the value saved to earlyYears by 10.5
earlyYears *= 10.5;

//We already accounted for the first two years. Taking the myAge variable, and subtract 2 from it
let laterYears = myAge - 2;

//Multiplying the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Using the multiplication assignment operator to multiply and assign in one step.

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//Adding years together and storing in a variable
let myAgeinDogYears = (earlyYears + laterYears);

//Write my name as a string, call the method and store the result in a new variable
let myName = 'Karina'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`);
