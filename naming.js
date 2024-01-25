/**
 * **************************
 * naming convention
 * ***************************
 */

// 1. no keyword in variable name / variable name এর মধ্যে কোনো JS keyword দিয়ে লেখা যাবে না।

var false = 45; //wrong
var var = 50; //wrong
var number = 60; //right

// 2. no space gap in variable name / variable এর মধ্যে কোনো space, gap রাখা যাবে না।
var is happy = false; //wrong
var isHappy = true; //right

// 3. no quote / variable name এর মধ্যে quote ব্যবহার করা যাবে না।
var "address" = "kochu khet"; //wrong
var address = "kochu khet"; //right 

// 4. can not start with a number / নাম্বার দিয়ে variable এর নাম শুরু হতে পারবে না।
// variable name এর মধ্যে বা শুরুতে ব্যবহার করা যাবে।
var 1money = 20; //wrong
var money1 = 20; //right

// 5. variable name is case sensitive 

// এ দুইটা একই জিনিস বুঝালেও কিন্তু দুইটা আলাদা।
var Address
var address

// 6. how to write a long variable 

var myCurrentHomeAddress = '15/2,D, Mirpur, Dhaka'; //camel case এটা সাধারনত ব্যবহার করা হয়।
var mycurrenthomeaddress = '15/2,D, Mirpur, Dhaka';
var my_current_home_address = '15/2,D, Mirpur, Dhaka'; //snake case 
var MyCurrentHomeAddress = '15/2,D, Mirpur, Dhaka'; //pascal case
