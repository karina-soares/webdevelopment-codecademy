//The forecast today is 293 Kelvin
const kelvin = 293;

//Celsius is 273 less than kelvin
const celsius = kelvin - 273;

//Using equation to calculate Fahrenheit and storing in a variable named fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//Rouding down the result converting Celsius to Fahrenheit
farenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees in Fahreheit`);
