const math_class = require('./my_math');
let math = new math_class();

console.log("3 + 5 = " + math.add(3, 5));
console.log("3 - 5 = " + math.subtract(3, 5));
console.log("3 * 5 = " + math.multiply(3, 5));
console.log("3 / 5 = " + math.divide(3, 5));
console.log("PI = " + math.pi);
