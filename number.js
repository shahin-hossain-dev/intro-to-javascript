/**
 * ********************
 *      Number Types
 * ********************
 */

var orangePrice = 20;
var chocolate = 2.5;
var applePrice = '20';

// যদি নাম্বারের ‍ string যোগ করা হয় তাহলে উভয়েই string হিসাবে যোগ হয়।

// যদি string কে নাম্বারে রুপান্তর করার জন্য parseInt() ব্যবহার করতে হয়।

applePrice = parseInt(applePrice)
console.log(orangePrice + applePrice);

// যদি letter কে parseInt দিয়ে parse করতে যাই তাহলে NaN => Not a Number দেখাবে

var mangoPrice = parseInt('agdgdgs');
console.log(mangoPrice)// NaN

//যদি string থেকে Decimal/দশমিক number এ রুপান্তর করতে হয় তাহলে parseFloat() করতে হয়।

const perBiscuit = '20.5';
console.log(parseFloat(perBiscuit))

// দশমিকের পরে নাম্বার গুলোকে fixed করার জন্য toFixed(value) use করা হয়।

var num1 = 0.1;
var num2 = 0.2;
const total = num1 + num2
console.log(total.toFixed(1));

// toFixed() করলে নাম্বারকে string করে ফেলে তার জন্য parseFloat() use করত হবে।

console.log(parseFloat(total.toFixed(1)))

// যদি number কে 0 দিয়ে ভাগ করা হয় তাহলে -infinity/infinity result দিবে।

const num = 50 / 0;
console.log(num) //Infinity
const negNum = -50 / 0;
console.log(num) //-Infinity
console.log(negNum)
