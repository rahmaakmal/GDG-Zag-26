let numberOne = 10;
let numberTwo = 20;

// Output
console.log(numberOne + "" + numberTwo);
console.log(typeof(numberOne + "" + numberTwo));

console.log(`${numberOne}${numberTwo}`);
console.log(typeof(`${numberOne}${numberTwo}`));

console.log(numberTwo + "\n" + numberOne);

console.log(`${numberTwo}
${numberOne}`);


// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 * 190 + 10 - 400 + 190);  // 0


let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * 2); // 6

// Soultion Three
console.log(num * true + num * true); // 6

// Soultion Four
console.log(num * 3 - num); // 6

// Solution Five
console.log(num + num + (num > num - true ? 0 : 0)); // 6

// Solution Six
console.log(num % num + num *2)// 6



console.log(100_000); // 100000
console.log(100000);  // 100000
console.log(1000*100)  //100000
console.log((10 ** 4) * 10); // 100000
console.log(100001 % 100001 + 100000); // 100000
console.log(200000 / 2); // 100000
console.log(+"100000"); // 100000
console.log(100000 * true); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10 **5); // 100000



let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // True
console.log(word[0].toLowerCase() === letterE.toLowerCase()); // True
console.log(word[word.length - 1].toLowerCase() === letterO.toLowerCase()); // True



console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(-50 < 0 && +"-40" < 0); // true
console.log(10 > 0 && -"-40" > 0); // true
console.log("10" === "10" || 10 === 10); // true
console.log(20 || false); // true


let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(num1 + "" === "10"); // true
console.log(num2 >= num1); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true


let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a != b); // true
console.log(a < b && a >= c); // true



let n=9
if (num < 10) {
  console.log("00" + num); // 009
} else if (num < 100) {
  console.log("0" + num); // 020
} else {
  console.log(num); // 110
}



