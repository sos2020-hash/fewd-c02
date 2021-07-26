/* Weather in Kelvin */
let kelvin = 0;
/* Weather in Celsius */
const celsius = kelvin - 273;
/*Weather in Fahrenheit */
let fahrenheit = celsius * (9/5) + 32
/* floor up fahrenheit */
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
let newton = celsius * (33/100)
newton = Math.floor(newton);
console.log(newton);
