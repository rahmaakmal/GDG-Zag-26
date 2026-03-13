let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // true
console.log(word[0].toLowerCase() === letterE.toLowerCase()); // true
console.log(word[word.length - 1].toLowerCase() === letterO.toLowerCase()); // true





let userName = "Elzero";

console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee






let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

console.log(myFriends.slice(0, num)); // ["Ahmed", "Elham", "Osama"]
console.log(myFriends.filter((_, index) => index < num)); // ["Ahmed", "Elham", "Osama"]







let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift(); 
friends.pop(); 

console.log(friends); 







let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];

let finalArr = [...arrTwo.reverse(), ...arrOne.reverse()];

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]



let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = (arr2.pop() + arr2.pop() + arr1.pop()).toLowerCase();


console.log(allArrs); // fxy





let birthDate = new Date("1982-10-25T00:00:00"); // ضع تاريخ ميلادك هنا
let now = new Date();

let diff = now - birthDate; // الفرق بالميلي ثانية

let seconds = Math.floor(diff / 1000);
let minutes = Math.floor(diff / (1000 * 60));
let hours = Math.floor(diff / (1000 * 60 * 60));
let days = Math.floor(diff / (1000 * 60 * 60 * 24));
let months = Math.floor(days / 30);
let years = Math.floor(days / 365);

console.log(seconds + " Seconds");
console.log(minutes + " Minutes");
console.log(hours + " Hours");
console.log(days + " Days");
console.log(months + " Months");
console.log(years + " Years");








let startTime = new Date("1980-01-01T00:00:00");
let futureTime = new Date(startTime.setFullYear(startTime.getFullYear() + 10));
futureTime.setSeconds(futureTime.getSeconds() + 1);

console.log(futureTime.toString()); 










let currentDate = new Date(); 
let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0); // آخر يوم من الشهر السابق

console.log(prevMonth.toString());
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(`Previous Month Is ${monthNames[prevMonth.getMonth()]} And Last Day Is ${prevMonth.getDate()}`);








let birth = new Date("1982-10-25T00:00:00");

console.log(birth.toString());
console.log(birth + "");
console.log(`${birth}`); 






let start = performance.now();

for(let i = 1; i <= 99999; i++){
}
let end = performance.now();
console.log(`Loop Took ${Math.floor(end - start)} Milliseconds.`);




function* gen() {
    let i = 14;
    let diffs = [140, 340, 540, 740, 940]; 
    while(true){
        yield i;
        i += diffs.shift() || 540; 
    }
}

let generator = gen();
