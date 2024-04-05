const rose = 8;
let roses = 70;
const lily = 10;
let lilies = 50;
const tulip = 2;
let tulips = 120;

let troses = roses * rose;
let tlilies = lilies * lily;
let ttulips = tulips * tulip;

let total = troses + tlilies + ttulips;
console.log("Rose - unit price: "+ rose + ", quantity: " + roses + ", value: " +troses);
console.log("Lily - unit price: "+ lily + ", quantity: " + lilies + ", value: " +tlilies);
console.log("Tulip - unit price: "+ tulip + ", quantity: " + tulips + ", value: " +ttulips);
console.log("Total: " + total);

roses = roses - 20;
lilies = lilies - 30;

troses = roses * rose;
tlilies = lilies * lily;
total = troses + tlilies + ttulips;
console.log("Rose - unit price: "+ rose + ", quantity: " + roses + ", value: " +troses);
console.log("Lily - unit price: "+ lily + ", quantity: " + lilies + ", value: " +tlilies);
console.log("Tulip - unit price: "+ tulip + ", quantity: " + tulips + ", value: " +ttulips);
console.log("Total: " + total);

//////////////////////////////////
const rosePrice = 8; 
const lilyPrice = 10; 
const tulipPrice = 2; 
let numberOfRoses = 70; 
let numberOfLilies = 50; 
let numberOfTulips = 120; 
let rosesValue = rosePrice * numberOfRoses; 
let liliesValue = lilyPrice * numberOfLilies; 
let tulipsValue = tulipPrice * numberOfTulips; 
total = rosesValue + liliesValue + tulipsValue; 
console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue); 
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue); 
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue); 
console.log("Total: ", total); 
numberOfRoses = numberOfRoses - 20; 
numberOfLilies = numberOfLilies - 30; 
rosesValue = rosePrice * numberOfRoses; 
liliesValue = lilyPrice * numberOfLilies; 
tulipsValue = tulipPrice * numberOfTulips; 
total = rosesValue + liliesValue + tulipsValue; 
console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue); 
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue); 
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue); 
console.log("Total: ", total);